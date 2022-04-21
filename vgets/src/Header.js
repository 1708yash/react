import React from 'react'

function Header() {
  return (
    <div className='header'>
        <img className='header__logo' src='/' alt='/'/>
        <div className='header__body'>
            <input className='header__searchbar' type='text'></input>
            
        </div>
    </div>
  )
}

export default Header