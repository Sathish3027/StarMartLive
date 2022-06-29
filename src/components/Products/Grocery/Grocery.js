import React from 'react';
import '../Products.css';

import Footer from '../../Footer/Footer';
import grocery1 from '../../Images/grocery-1.jpg';
import grocery2 from '../../Images/grocery-2.png';
import grocery3  from '../../Images/grocery-3.png';
import NavBar from '../../NavBar/Navbar';

const Grocery = () =>{
    return(
        <>
        <div>
      <NavBar/>
    </div>
          <div className='heading-title'>
        <h1 className='heading-title-content'>Products - Grocery</h1>
      </div>
    <div className='products-container'>
      <div className='products-1'>
        <h2 className='products-heading'>
          Grocery
        </h2>
        <div className='products-img'>
          <img src={grocery1} />
        </div>

        
        <div className='products-img'>
          <img src={grocery2} />
        </div>

        
        <div className='products-img'>
          <img src={grocery3} />
        </div>

      </div>
    </div>
    <Footer />
    </>
    )
}
export default Grocery