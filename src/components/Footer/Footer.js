import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom';
import { AiOutlineCopyright } from 'react-icons/ai';

import logo from '../Images/logo-st-mt.jpeg';

function Footer() {
    return ( 
        <>
    <footer className = 'footer' >
        <div className = 'footer-container' >

        <div className = 'footer-row' >
        <div className = 'footer-col' >
            <div className='footer-logo'>
        <img src={logo} /> 
        </div>
        </div> 
        <div className = 'footer-col' >
        <h4 > Our Products </h4> <ul >
        <Link to='/grocery'><li > <a href = "" > Grocery </a></li ></Link>
        <Link to='/appliances'><li > <a href = "" > Home Appliances </a></li ></Link>
        <Link to='/clothing'><li > <a href = "" > Clothing </a></li ></Link>
       
        </ul> 
        </div> 
        <div className = 'footer-col' >
        <h4 > E-Commerce </h4> 
        <ul >
        <Link to='/shipping'><li > <a href = "#accordion-top" > Shipping </a></li ></Link>
        <Link to='/terms'><li > <a href = "" > Terms and Conditions </a></li ></Link>
        <Link to='/policy'><li > <a href = "" > Privacy Policy </a></li ></Link>
        <Link to='/returns'><li > <a href = "" > Cancellation & Returns </a></li ></Link>
        <Link to='/service'><li > <a href = "" > Terms of Service </a></li ></Link>
        </ul> 
        </div> 
        <div className = 'footer-col' >
        <h4 > Head Office </h4>
        <div className='footer-contact'> 
        <h3>Star Mart Provision Partner</h3>
          <p>NO.168, Ramaswamy Layout, D.P.F Street,<br/> P.N.Palayam, Coimbatore-641037</p>
          <p>Contact Number:<br/>
          Tel:0422-6512072<br/>
          Cell:+91 9790113338
          </p>
          <p>Email:<br/>
             starmart2007@gmail.com
          </p>
          <p>Website:<br/>
          www.starmart.live
          </p>
          </div>
        </div> 
        </div> 
      
        </div> 
       
        </footer>
         <div className='footer-copyright'>
         <h4 className='footer-copyright-content'><AiOutlineCopyright/> 2022 Star Mart Live Pvt Ltd . All rights reserved.</h4>
     </div>
     </>
    )
}

export default Footer