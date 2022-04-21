import React from 'react';
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
        <img className="header_logo" src="https://i.ibb.co/QQrpvzD/logopg1.png" alt='/' />
        </Link>
        <div className='header_search'>
          <input type="text" />
          <SearchIcon className="header_seacrchIcon" />
        </div>
        <div className='header_nav'>
          <div className='header_option'>
            <Link to='SignIn'>
            <span className='header_optionone'>Hello yash </span>
            <span className='header_optiontwo' >Sign In </span>
            </Link>
          </div>
          <div className='header_option'>
            <span className='header_optionone'>Your</span>
            <span className='header_optiontwo'>Uploads</span>
          </div>
          <div className='header_option'>
            <span className='header_optionone'>Upload</span>
            <span className='header_optiontwo'>Here </span>
          </div>
          
        </div>
      </div>
      <div className='header_bottom'>
        <ul className='header_unlist'>
         <Link to="categories"> <Button className='optionbutton'><li className='header_li' >Categories</li> </Button></Link>
         <Link to="mobiles"> <Button className='optionbutton'><li className='header_li'>Smart Phones</li></Button></Link>
         <Link to="assosaries"><Button className='optionbutton'><li className='header_li'>Assosaries</li></Button></Link>
          <Button className='optionbutton'>  <li className='header_li'>Computer</li></Button>
          <Button className='optionbutton'> <li className='header_li'>Clothes</li></Button>
          <Button className='optionbutton'> <li className='header_li'>Shoes</li></Button>
          <Button className='optionbutton'> <li className='header_li'>Electronics</li></Button>
        </ul>
      </div>
    </>
  );
}

export default Header