import React from 'react'
import Footer from '../Footer/Footer'
import './Legal.css';
import legal from '../Images/legal.jpg';
import legal1 from './PDF/legal.pdf';
import NavBar from '../NavBar/Navbar';

function Legal() {
  return (
    <>
     <div>
      <NavBar/>
    </div>
    <div className='legal-container'>
    <div className='heading-title'>
        <h1 className='heading-title-content'>Legal</h1>
      </div>
      <div className='legal'>
      <div className='legal-row'>
        <div className='legal-col-1'>
          <h4 className="legal-heading">Firm Registration:</h4>
          <p className='legal-paragraph'>Tranzindia Corporate Network Private 
          Limited was incorporated on 23rd August 2011 under the Companies Act 1956 (No.1 of 1956)
           as a Private Limited Company under the registration of Companies, Tamilnadu, Coimbatore</p>

          <h4 className="legal-heading">Sales Tax Registration:</h4>
          <p className='legal-paragraph'>Tranzindia Corporate Network Private Limited was registered as a dealer with the Commercial 
            Tax Department, Govt of Tamilnadu, on 10th day of June 2013 and was issued Tax Identification 
            Number (TIN) 33302184706 and Central Sales Tax Number (CST) 1097681 dated 10th day of June 2013 by the Assistant Commissioner (CT), Coimbatore.</p>

          <h4 className="legal-heading">ISO Certificaton:</h4>
          <p className='legal-paragraph legal-paragraph-1'>The Company is ISO 9001:2015 certified by TȔV SȔD South Asia Private Limited, under the Registration no: 9910014366 on 07.05.2014, 
            for Trading of Ayurvedic Health Care Products, Ayurvedic Personal Care Products and Home Appliances 
            through Direct Marketing.</p>
            <a href={legal1} className="legal-link-1">Click here to view Certificate of Incorporation</a><br/>
            <a href={legal1} className="legal-link-1">Click here to view Certificate of ISO 2022-23</a><br/>
            <a href={legal1} className="legal-link">Click here to view Certificate of GST</a>

          <h4 className="legal-heading legal-heading-2">FDSA:</h4>
          <p className='legal-paragraph legal-paragraph-1'>The Company is the member of Federation of Direct Selling Association. We have the membership certificate for four years continuously.</p>
          <a href={legal1} className="legal-link">Click here to view FDSA Certificate Validity March 2023</a>
        </div>
        <div className='legal-col-2'>
          <img src={legal} className="legal-img" />
        </div>
      </div>
      </div>
</div>
<div>
  <Footer />
</div>
    
    </>
  )
}

export default Legal