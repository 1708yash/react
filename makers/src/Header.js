import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, } from '@mui/material';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
 <NavLink to='/'>
 <img className='header__icon'
          src='https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg'
              alt='airbnb logo'
              />
    </NavLink>
      <div className='header__center'>
       <input typeof='text'/>
       <SearchIcon/>
      </div>
      <div className='header__right'>
          <p>become a host</p>
          <LanguageIcon/>
              <KeyboardArrowDownIcon/>
             <Avatar/>
      </div>
    </div>
  )
}

export default Header