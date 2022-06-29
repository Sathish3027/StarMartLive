import React from 'react'
import './HomeProducts.css';
import home1 from '../../Images/home-prod-1.jpg';
import home2 from '../../Images/home-prod-2.jpg';
import home3 from '../../Images/home-prod-3.jpg';
import{Link} from 'react-router-dom';

function HomeProducts() {
  return (
    <div className='home-products-container'>
        
            <div className='home-products-display-col'>
      <div className='home-products-row'>
          <div className='home-products-img'>
              <img src={home1} />
              </div>
              
              <div className='home-products-content'>
                  <h2 className='home-products-heading home-products-heading-1'>Home Appliances</h2>
                  <Link to="/appliances"> <button className='home-products-btn home-products-btn-1'>Explore now</button>
                  </Link>
              </div>
              </div>
             
         
             
              <div className='home-products-row'>
          <div className='home-products-img'>
              <img src={home2} />
              </div>
              
              <div className='home-products-content'>
                  <h2 className='home-products-heading'>Grocery</h2>
                 <Link to='/grocery'> <button className='home-products-btn'>Explore now</button>
                  </Link>
              </div>
              </div>
             
        
            
              <div className='home-products-row'>
          <div className='home-products-img'>
              <img src={home3} />
              </div>
              
              <div className='home-products-content'>
                  <h2 className='home-products-heading'>Clothing</h2><br />
                 <Link to="/clothing"> <button className='home-products-btn'>Explore now</button>
                  </Link>
              </div>
              </div>
             

              <div className='home-products-row'>
              <div className='home-products-event'>
                 <h3>News and Events:</h3>
              </div>
             
              </div>
              </div>
             
    </div>
  )
}

export default HomeProducts
