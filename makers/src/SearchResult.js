import React from 'react'
import "./searchresult.css"
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function SearchResult({ img, location, title, description, stars, price, total }) {
    return (
        <div className='SearchResult'>
            <img src={img} alt='/' />
            <FavoriteBorderIcon
                className='SearchResult__heart' />
            <div className='SearchResult__info'>
                <div className='SearchResult__infoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_______</p>
                    <p>{description}</p>
                </div>
                <div className='SearchResult__infoBottom'>
                    <div className='SearchResult__stars'>
                        <StarRateIcon/>
                        <p> <strong>{stars}</strong></p>
                    </div>
          
                    <div className='SearchResult__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SearchResult