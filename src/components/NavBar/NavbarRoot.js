import React from 'react';
import Navbar from './Navbar.js';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Opportunity from '../Opportunity/Opportunity';
import Legal from '../Legal/Legal'
import Contact from '../Contact/Contact';
import About from '../About/About';
import UserLogin from '../Login/UserLogin';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import HomeAppliances from '../Products/HomeAppliances/HomeAppliances';
import Grocery from '../Products/Grocery/Grocery';
import Clothing from '../Products/Clothing/Clothing';

import Shipping from '../Footer/Shipping/Shipping';
import CancellationReturns from '../Footer/CancellationReturns/CancellationReturns';
import PrivacyPolicy from '../Footer/PrivacyPolicy/PrivacyPolicy';
import TermsService from '../Footer/TermsService/TermsService';
import TermsCondition from '../Footer/TermsConditions/TermsConditions';


const NavbarRoot = () =>{


return(


          <div>
            <Router>
            <Navbar />
            <Routes>
    
              <Route path="/" exact element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/legal" element={<Legal />} />
              
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/sign" element={<UserLogin />} />
          
             <Route path="/appliances" element={<HomeAppliances />} />
             <Route path="/grocery" element={<Grocery />} />
             <Route path="/clothing" element={<Clothing />} />
            
            <Route path="/shipping" element={<Shipping/>} />
            <Route path="/returns" element={<CancellationReturns/>} />
            <Route path="/policy" element={<PrivacyPolicy/>} />
            <Route path="/service" element={<TermsService/>} />
            <Route path="/terms" element={<TermsCondition/>} />
 
            </Routes>
            </Router>


            </div> 
);
}

export default NavbarRoot