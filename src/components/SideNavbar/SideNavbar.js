import React,{useState} from 'react';
import {BsMenuUp} from 'react-icons/bs';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData.js';
import './SideNavbar.css';
import {IconContext} from 'react-icons';
import {FaShopify} from 'react-icons/fa';

function SideNavbar() {
  
    const [sidebar,setSidebar]=useState(false);
const showSidebar=()=>setSidebar(!sidebar);
  
  
  
    return (


    <>
    <IconContext.Provider value={{color:"#fff"}}>
    <div className='side-navbar'>
        <Link to="#" className="menu-bars">
            <BsMenuUp onClick={showSidebar} />
        </Link>
        <div className="side-navbar-logo logo">
            <Link to="/team"  className="team"> 
            <h2><FaShopify />StaRMarT<FaShopify/></h2>
            </Link>

            
            </div>
           
    </div>

    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar} > 
            <li className='navbar-toggle'>
                <Link to="#" className="menu-bars close">
                    <AiOutlineCloseCircle />
                </Link>
            </li>
            {SidebarData.map((item,index) =>{
        return(
            <li key={index} className={item.cName}>
                <Link to={item.path} >
                    {item.icon}
                    <span className='lists'>{item.title}</span>
                </Link>
            </li>
        );    
        })}
        </ul>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default SideNavbar