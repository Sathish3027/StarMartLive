import React,{useState} from 'react'
import './Home.css';
import Footer from '../Footer/Footer.js';

import { FaHandPointRight, FaSlidersH } from 'react-icons/fa';

import {Navigate, useNavigate} from 'react-router-dom';
import HomeProducts from './HomeProducts/HomeProducts';
import Slider from './Slider/Slider';
import NavBar from '../NavBar/Navbar';


function Home() {
    
  const navigate=useNavigate();

  return (
    <>
    <div>
      <NavBar/>
    </div>
      <div>
        <Slider />
        </div>
        <div>
        <HomeProducts />
    </div>


         <div className='home-heading'>
             <h1>Welcome to STAR MART</h1>
             <h4>We Offer you Best Grocery Products</h4>
             <p className='home-para'>Star Mart is a direct selling company, started by a team of experts 
            having lots of experience in network marketing,<br/> finance, administration and management field.
            We started this company to redefine the network marketing industry in India.</p>
            <button className='home-btn' onClick={() => navigate ('/about')}>See Details <FaHandPointRight /></button>
         </div>
       


        <div>
    
            <Footer />
           
            </div> 


           


       
            </>
    )
}

export default Home