import React, { useState, useEffect } from "react";
import { ImLocation2 } from "react-icons/im";
import { db } from "../firebase.config.js";
import "../styles/slider.css";
import { Carousel } from 'react-bootstrap'
import {
    collection,
    getDoc,
    query,
    orderBy,
    limit,
    getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import SwipeCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Spinner from '../components/Spinner'
//config
SwipeCore.use([EffectCoverflow, Pagination]);

const Slider = () => {
    const [listings, setListings] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigat = useNavigate();
    const userPic =
        "https://openclipart.org/download/247319/abstract-user-flat-3.svg";

    useEffect(() => {
        const fetchListings = async () => {
            const listingRef = collection(db, "listings");
            const q = query(listingRef, orderBy("timestamp", "desc"), limit(5));
            const querySnap = await getDocs(q);
            let listings = [];
            querySnap.forEach((doc) => {
                return listings.push({
                    id: doc.id,
                    data: doc.data(),
                });
            });
            setLoading(false);
            setListings(listings);
        };
        fetchListings();
        console.log(listings === null ? "loading" : listings);
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner />;
    }
    return (
        <>
            <div style={{ width: "100%" }}>
                {listings === null ? (
                    <Spinner />
                ) : (
                    <Swiper
                        effect={"none"}
                        grabCursor={true}
                        centeredSlides={false}
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={true}
                        className="mySwipe"
                    >
                        {listings.map(({ data, id }) => (
                            <SwiperSlide
                                key={id}
                                onClick={() => { }}
                            >
                                <div className="slider__wheel">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 "
                                                src="https://media.istockphoto.com/photos/fingers-plugging-usb-cable-into-back-of-laptop-picture-id172161962?b=1&k=20&m=172161962&s=170667a&w=0&h=FPpY5JSpbIc7Dlmfr4gLxeLN4KK_uWwCg0M9rN6B2MA="
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <h3>Get It fast</h3>
                                                <p> Buy more and get exotic sales on your personal account on montlhy terms.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="https://images.unsplash.com/photo-1628832307345-7404b47f1751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8OGslMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                                alt="Second slide"
                                            />

                                            <Carousel.Caption>
                                                <h3>Limited Edition content is live</h3>
                                                <p>Feel yourdelf special because you are getting the deal of the day</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000"
                                                alt="Third slide"
                                            />

                                            <Carousel.Caption>
                                                <h3>Laptops are the life of every student</h3>
                                                <p>Best range of secondhand laptops for students according to their needs.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                               
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </>
    );
};

export default Slider;