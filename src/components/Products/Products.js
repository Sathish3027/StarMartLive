import React from 'react'
import Footer from '../Footer/Footer.js';
import products1 from '../Images/product-st-mt.jpeg';
import products2 from '../Images/product-st-mt-1.jpg';
import products3 from '../Images/product-st-mt-2.jpg';
import products4 from '../Images/product-st-mt-3.jpg';
import './Products.css';

function Products() {
  return (
    <div className='container-prod'>
      <div className='products'>
        <h2>Our Products</h2>
        <img src={products1} alt="prod-1" />
        <h2>Upcoming Products<small>(coming soon**)</small></h2>
        <h4>Home Appliances</h4>
        <img src={products2} alt="prod-2" />
        <h4>Clothing</h4>
        <div className='prod'>
        <div className='prod-row'>
          <img src={products3} alt="prod-3" />
        </div>
        <div className='prod-row'>
          <img src={products4} alt="prod-3" />
        </div>
        </div>
      </div>
      <div>
  <Footer />
</div>
    </div>
  )
}

export default Products