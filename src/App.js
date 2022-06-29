import React from 'react';
import './App.css';
import NavbarRoot from './components/NavBar/NavbarRoot';
import Navbar from './components/NavBar/Navbar.js';
import AddUser from './components/Login/AddUser.js';


import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Opportunity from './components/Opportunity/Opportunity';
import Legal from './components/Legal/Legal'
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import UserLogin from './components/Login/UserLogin';


import MyTeam from './components/MyTeam/MyTeam';

import MyProfile from './components/MyProfile/MyProfile';


import SideNavbar from './components/SideNavbar/SideNavbar';




import {BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom';
import Genealogy from './components/Genealogy/Genealogy';
import SidebarRoot from './components/SideNavbar/SidebarRoot';

import Slider from './components/Home/Slider/Slider';
import NavbarTop from './components/NavBar/NavbarTop';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomeProducts from './components/Home/HomeProducts/HomeProducts';
import Register from './components/Genealogy/Register';
import HomeAppliances from './components/Products/HomeAppliances/HomeAppliances';
import Grocery from './components/Products/Grocery/Grocery';
import Clothing from './components/Products/Clothing/Clothing';
import Shipping from './components/Footer/Shipping/Shipping';
import CancellationReturns from './components/Footer/CancellationReturns/CancellationReturns';
import PrivacyPolicy from './components/Footer/PrivacyPolicy/PrivacyPolicy';
import TermsService from './components/Footer/TermsService/TermsService';
import TermsCondition from './components/Footer/TermsConditions/TermsConditions';
import CreateUser from './components/Genealogy/CreateUser';



const App = () => {
  return (


    <>

<Router>
           
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

            <Route path='/register' exact element={<CreateUser />} />
  <Route path="/team" element={<MyTeam />} />
  <Route path="/profile" element={<MyProfile />}/>
 
            </Routes>
            </Router>

</>
 


  
  
    /*

     <>
          <div>
<Register />
         </div> 
          </>

*/

  
  
  
          );

}

export default App;
