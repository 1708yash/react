import React from 'react'
import './Login.css'
import google from './google-removebg-preview.png'
import facebook from './fb-removebg-preview.png'
import git from './git.png'
function Login() {
    return (
        <div className='login'>
           
        <div className='welcome'>
            <h1>! WELCOME !</h1>
        </div>
       
            <div className='login__wrap'>
              
                <div className='login__left'>
              
                    <div className='login__img'>
                        <div className='google'>
                            <img className='googimg' src={google} alt='google' />
                            <p className='googtext'>Google</p>
                        </div>
                        <div className='facebook'>
                            <img  className='fbimg' src={facebook} alt='facebook' />
                            <p className='fbtext'>Facebook</p>
                        </div>
                        <div className='github'>
                            <img className='gitimg' src={git} alt='git' />
                            <p className='gittext'>GitHub</p>
                        </div>
                    </div>
                    <div className='separate'>
                        <div className='or'>
                            OR
                            <div className='line' />
                        </div>
                        
                    </div>
                </div>
                <div className='login__right'>
                    <div className='login__direct'>
                        <input className='user' type='text' value='Username'/>
                        <input className='password'  type='text' value='Password'/>
                        <button  className='submit'>LOGIN/SIGNUP</button>
                      
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login