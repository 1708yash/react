import React from 'react'
import "./sigin.css";
function SignIn() {
  return (
    <div className='signin'>
       <div> <h1 className='signin__head'> Hello and welcome to our platform</h1></div>
       <div className='signinbox'>
           <div className='signin__typers'>
                <input type='text' className='signin_username'></input>
             <input type='text'></input>
             </div> 
       </div>
    </div>
  )
}

export default SignIn