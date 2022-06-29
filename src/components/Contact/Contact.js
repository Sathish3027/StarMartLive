import React from 'react'
import Footer from '../Footer/Footer.js';
import contactimage from '../Images/contact-st-mt.jpg';
import contactimage1 from '../Images/contact-st-mt-1.jpg';
import contactbank from '../Images/contact-st-mt-2.jpg';
import './Contact.css';
import NavBar from '../NavBar/Navbar.js';


function Contact() {
  return (
    <div>
       <div>
      <NavBar/>
    </div>
    <div className='container-contact'>
    <div className='heading-title'>
        <h1 className='heading-title-content'>contact</h1>
      </div>
      <div className='contact'>
       
        <h2>Contact Details</h2>
        <div className='contact-row'>
        
        <div className='contact-col add'>
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
        <div className='contact-col contact-img'>
          <img src={contactimage1} />
        </div>
          </div> 
      </div>
     
      <div className='contact-row bank'>
      
        <div className='contact-col contact-img-1'>
          <img src={contactbank} />
        </div>
        <div className='contact-col-1 bank-det add-1'>
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
    <div>
  <Footer />
</div>
    </div>
  )
}

export default Contact