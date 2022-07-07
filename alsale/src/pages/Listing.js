import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config.js";
import { getAuth } from "firebase/auth";
import { useNavigate, Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import SwipeCore, { EffectCoverflow,Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/bundle';
import "../styles/listing.css";
import {
    FaBed,
    FaBath,
    FaParking,
    FaHouseDamage,
    FaArrowCircleRight,
} from "react-icons/fa";

//config
SwipeCore.use([EffectCoverflow, Pagination]);

const Listing = () => {
    const [listing, setListing] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); //eslint-disable-line
    const params = useParams();
    const auth = getAuth(); //eslint-disable-line

    useEffect(() => {
        const fetchListing = async () => {
            const docRef = doc(db, "listings", params.listingId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log(docSnap.data());
                setListing(docSnap.data());
                setLoading(false);
            }
        };
        fetchListing();
    }, [params.listingId]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <Layout title={listing.name}>
            <div className="row listing-container">
                <div className="col-md-8 listing-container-col1">
                    {listing.imgUrls === undefined ? (
                        <Spinner />
                    ) : (
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={1}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            className="mySwipe"
                        >
                            {listing.imgUrls.map((url, index) => (
                                <SwiperSlide key={index}>
                                    <img src={listing.imgUrls[index]} alt={listing.name} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
                <div className="col-md-4 listing-container-col2">
                    <h3>{listing.name}</h3>
                    <h6>
                        Price :{" "}
                        {listing.offer ? listing.offerPrice  : listing.regularPrice} /
                        RS
                    </h6>
                    <p>Product For : {listing.type === "rent" ? "Rent" : "Sale"}</p>
                    <p>
                        {listing.offer && (
                            <span>
                                {listing.regularPrice - listing.offerPrice} Discount
                            </span>
                        )}
                    </p>
                    <p>
                        
                        {listing.available > 1
                            ? `${listing.available} Availability`
                            : "1 Availability"}
                    </p>
                    <p>
                       
                        {listing.number > 1
                            ? `${listing.number} number`
                            : "1 number"}
                    </p>
                   
                    <p>
                       
                        {listing.available ? `available` : "not available"}
                    </p>
                    <Link
                        className="btn btn-success"
                        to={`/contact/${listing.useRef}?listingName=${listing.name}`}
                    >
                        Contact <FaArrowCircleRight size={20} />
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Listing;