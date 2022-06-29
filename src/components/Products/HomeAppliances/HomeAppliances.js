import React from 'react';
import '../Products.css';
import Footer from '../../Footer/Footer';
import appliances1 from '../../Images/ha-3.jpg';
import appliances2 from '../../Images/ha-1.png';
import appliances3 from '../../Images/ha-2.jpg';
import NavBar from '../../NavBar/Navbar';

const HomeAppliances = () =>{
    return(
        <>
        <div>
      <NavBar/>
    </div>
          <div className='heading-title'>
        <h1 className='heading-title-content'>Products - Home Appliances</h1>
      </div>
  
      <div className='products-container'>
      <div className='products-1'>
        <h2 className='products-heading'>
          Home Appliances
        </h2>
        <div className='products-img'>
          <img src={appliances1} />
        </div>

        
        <div className='products-img'>
          <img src={appliances2} />
        </div>

        
        <div className='products-img'>
          <img src={appliances3} />
        </div>

      </div>
    </div>

    <Footer />
    </>
    )
}
export default HomeAppliances