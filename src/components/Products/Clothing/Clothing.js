import React from 'react';
import '../Products.css';
import Footer from '../../Footer/Footer';
import clothing1 from '../../Images/clothing-2.jpg';
import clothing2 from '../../Images/clothing-3.jpg';
import clothing3 from '../../Images/clothing-1.jpg';
import NavBar from '../../NavBar/Navbar';

const Clothing = () =>{
    return(
        <>
         <div>
      <NavBar/>
    </div>
        <div className='heading-title'>
        <h1 className='heading-title-content'>Products - Clothing</h1>
      </div>
   
      <div className='products-container'>
      <div className='products-1'>
        <h2 className='products-heading'>
          clothing
        </h2>
        <div className='products-img'>
          <img src={clothing1} />
        </div>

        
        <div className='products-img'>
          <img src={clothing2} />
        </div>

        
        <div className='products-img'>
          <img src={clothing3} />
        </div>

      </div>
    </div>

    <Footer />
    </>
    )
}
export default Clothing