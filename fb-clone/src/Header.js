import React from 'react'
import './Css/Header.css'
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Avatar, IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' alt='' />
                <div className='header__search'>
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className='header__middle'>
                <div className='header__option header__option--active'>
                    <HomeIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <OndemandVideoIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <PeopleIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <SportsEsportsIcon fontSize='large' />
                </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar alt='yash' src='https://images.unsplash.com/photo-1599475735868-a8924c458792?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWUlMjBib3l8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60'/>
                    <h5>Yash Tomar</h5>
                </div>
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header