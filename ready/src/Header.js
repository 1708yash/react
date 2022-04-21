import React from 'react'
import "./header.css";
function Header() {
  return (
    <div className='header'>
        <img className='header_logo' src='/' alt='//'/>
        <div className='header_search'>
           <input></input> 
        </div>
        <div className='header_logins'>
            <div className='header_signup'>
                <h3>SignUp</h3>
            </div>
            <div className='header_Upload'>
                <h3>Upload</h3>
            </div>

        </div>
    </div>
  )
}

export default Header