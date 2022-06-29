import React,{useState} from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';
import NavbarTop from "./NavbarTop";
import {GiClothes} from 'react-icons/gi';
import {MdLocalGroceryStore} from 'react-icons/md';
import {BiFridge} from 'react-icons/bi';
import {FaShopify} from 'react-icons/fa';
import {IoMdArrowDropdown} from 'react-icons/io';

const NavBar =() =>{
  
const[isMobile,setIsMobile]=useState(false);



    return(
        <>
        <div>
        <NavbarTop />
        </div>
        <nav className="navbar">
            <div className="logo">
            <Link to="/"  className="homes"> 
           <h2><FaShopify />StaRMarT<FaShopify/></h2>
            </Link>
            </div>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={()=> setIsMobile(false)}>
                <Link to="/" exact className="homes nav-list">
                    <li>Home</li>
                </Link>
                <Link to="/about" className="about nav-list-1">
                    <li>About Us</li>
                </Link>
                <div className="prod-hover">
                    <div className="prod-btn">
                 <button className="products nav-list ">
                Products<IoMdArrowDropdown /></button>
                </div>
                    <div  className="products-page">
                        <Link to="/appliances" className="products-li"><BiFridge/>&nbsp;
                        Home Appliances
                        </Link>
                        <Link to="/grocery" className="products-li"><MdLocalGroceryStore/>&nbsp;
                        Grocery
                        </Link>
                        <Link to="/clothing" className="products-li"><GiClothes/>&nbsp;
                        Clothing
                        </Link>
                    </div>
                </div>

                <Link to="/legal" className="legal nav-list">
                    <li>Legal</li>
                </Link>
                
                <Link to="/contact" className="contact nav-list-1">
                    <li>Contact</li>
                </Link>

             
               
               
            </ul>
            <button className="mobile-menu-icon"
            onClick={()=> setIsMobile(!isMobile)}>
                {isMobile ? (
                    <i className="fas fa-times"></i>):(<i className="fas fa-bars"></i>)
                }
            </button>
        </nav>
        </>
    );
}

export default NavBar