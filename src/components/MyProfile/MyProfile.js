import React from 'react'
import './MyProfile.css';
import {FiEdit} from 'react-icons/fi';
import SideNavbar from '../SideNavbar/SideNavbar';

const MyProfile = () => {
  return (
    <>
    <div>
      <SideNavbar/>
      </div>
    
    <div className='my-profile-container'>
      <div className='my-profile'>
        <h2>MY Profile</h2>
        
        <div className='profile-row'>
          <div className='profile-col'>
          <h4>User Id :</h4>
            </div>
            <div className='profile-col'>
             <p className='profile-id'>A01   <span className='profile-icon'><FiEdit /></span> </p>
          </div></div>
          
        <div className='profile-row'>
          <div className='profile-col-1'>
             <h4>User Name :</h4>
             </div>
             <div className='profile-col-1'>
             <p>Sathish   <span className='profile-icon'><FiEdit /></span> </p>
          </div></div>
          
        <div className='profile-row'>
          <div className='profile-col-1'>
             <h4>Sponsor Id :</h4>
             </div>
             <div className='profile-col-1'>
             <p>A00   <span className='profile-icon'><FiEdit /></span> </p>
          </div></div>
          
        <div className='profile-row'>
          <div className='profile-col-1'>
             <h4>Join Date :</h4>
             </div>
             <div className='profile-col-1'>
             <p>01/01/2022   <span className='profile-icon'><FiEdit /></span> </p>
          </div>
        </div>

        <div className='profile-row'>
          <div className='profile-col-1'>
             <h4>Password :</h4>
             </div>
             <div className='profile-col-1'>
             <p>*******   <span className='profile-icon'><FiEdit /></span> </p>
          </div></div>

          <div className='profile-row'>
          <div className='profile-col-1'>
             <h4>Pay Out :</h4>
             </div>
             <div className='profile-col-1'>
             <p>2000rs/- </p>
          </div></div>

      </div>
    </div>
    </>
  )
}

export default MyProfile
