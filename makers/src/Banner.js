
import { Button } from '@mui/material';
import React, { useState } from 'react'
import "./Banner.css";
import Searchs from './Searchs';
import {useNavigate} from 'react-router-dom';
function Banner() {
  const history= useNavigate();

  const [showSearch,setShowSearch]=useState(false);
  return (
    <div className='banner'>
    <div className='banner__search'>
    {showSearch && <Searchs/>}
      <Button onClick={()=>
      setShowSearch(!showSearch)} className='banner__searchButton' 
      variant='outlined'>
      {showSearch ? "Hide":"Search Dates"}
      </Button>
    </div>
        <div className='banner__info'>
            <h1>Get out and find something new</h1>
            <h5>
                plan a different kind of gateway to unover the hideen gems near you.
            </h5>
       <Button onClick={()=>history('/search')} variant='outlined'>Explore Nearby</Button>
        </div>
    </div>
  )
}

export default Banner