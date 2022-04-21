import React from 'react';
import "./about.css";
function About() {
  return (
    <div className='about'>
        <h1>Cusast</h1>
        <p>We are here to serve you</p>
        <div className='about_dir'>
        <ul className='firstlist'>
            <li className='list'>News</li>
            <li className='list'>Best Products</li>
            <li className='list'>Mobile Phones</li>
            <li className='list'>Computers</li>
        </ul>
        <ul className='secondlist'>
            <li className='list'>About</li>
            <li className='list'>Privacy Policy</li>
            <li className='list'>Careers</li>
            <li className='list'>Contact</li>
            <li className='list'>Indian Privacy Notice</li>
        </ul>
        <ul className='thirdlist'>
            <li className='advert'>Advertise</li>
            <li className='advert'>Cookie Ploicy</li>
            <li className='advert'>Editorial Guidelines</li>
            <li className='advert'>Terms of Use</li>
            <li className='advert'>Advertise</li>
        </ul>
        <ul className='thirdlist'>
            <li className='advert'>Owner</li>
            <li className='advert'>Yash Tomar</li>
           
        </ul>
        </div>
        <div className='contactus'><p>Contact Us:  cusast@gmail.com</p></div>
    </div>
  )
}

export default About