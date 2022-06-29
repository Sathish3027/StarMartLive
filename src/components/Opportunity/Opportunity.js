import React from 'react'
import Footer from '../Footer/Footer'
import opporimg from '../Images/opportunity-st-mt.jpeg';
import './Opportunity.css';


function Opportunity() {
  return (
    <div>
    <div className='opportunity-container'>
      <div className='opportunity'>
        <h2>Opportunity</h2>
        <div className='opportunity-img'>
          <img src={opporimg} />
        </div>
      </div>

    </div>
    <div>
  <Footer />
</div>
    </div>
  )
}

export default Opportunity