import React from 'react';
import './NavbarTop.css';
import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai';
import {BsPersonCheck,BsCartCheck} from 'react-icons/bs';
import {Link} from 'react-router-dom';

function NavbarTop() {
  return (
    <div className='navbar-top'>
       <div className="navbar-top-row">
           <div className='navbar-top-col-1'>
               <p className='top-nav-item iso'>ISO 9001:2015 Certified</p>
           </div>
           <div className='navbar-top-col-1 mail-col'>
               <div className='top-nav-item item'>
               <span className='top-icon'><AiOutlineMail /></span>
                   <p className='top-content'><AiOutlineMail />&nbsp; starmartlive@gmail.com</p></div>
           </div>
           <div className='navbar-top-col-2'>
               <div className='top-nav-item bord item'>
               <span className='top-icon'><AiOutlinePhone /></span>
                   <p className='top-content'><AiOutlinePhone /> &nbsp;0422-6512072</p></div>
           </div>
           <div className='navbar-top-col-2'>
               <div className='top-nav-item item'>
               <Link to="/sign" ><span className='top-icon'><BsPersonCheck /></span></Link>
                   <Link to="/sign" className='top-content top-sign'><BsPersonCheck /> &nbsp;Consumer Login</Link></div>
           </div>
           <div className='navbar-top-col-2'>
               <div className='top-nav-item item'>
               <span className='top-icon'><BsCartCheck /></span>
                   <p className='top-content'><BsCartCheck />&nbsp; Add to Cart</p></div>
           </div>
       </div>
    </div>
  )
}

export default NavbarTop