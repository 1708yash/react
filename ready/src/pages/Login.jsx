import React from 'react'
import google from '../components/images/google.png'
import facebook from '../components/images/facebook.png'
import git from '../components/images/git.png'
import '../Login.css'
function Login() {
  return (
    <div className='login'>
        <div className='login__box'>
            <div className='login__left'>
              <div className='google'>
                      <img src={google} alt='google logo' />
                      <p>Google</p>
              </div> 
              <div className='facebook'>
                  <img src={facebook} alt='fb'/>
                  <p>Facebook</p>
              </div> 
                  <div className='github'>
                      <img src={git} alt='git'/>
                      <p>GitHub</p>
                  </div> 
            </div>
            <div className='login__right'>

            </div>
        </div>
    </div>
  )
}

export default Login