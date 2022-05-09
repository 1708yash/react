import React from 'react'
import '../Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <span className='navbar__logo'> Lama app</span>
        <ul className='list'>
            <li className='listItem'>
                  <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png' alt='avatar'className='avatar'/>
            </li>
            <li className='listItem'>Yash Tomar</li>
            <li className='listItem'> Logout</li>
        </ul>
    </div>
  );
};

export default Navbar