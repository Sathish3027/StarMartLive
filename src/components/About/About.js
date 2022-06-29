import React from 'react'
import Footer from '../Footer/Footer.js';
import './About.css';
import aboutimg from '../Images/about-st-mt.jpg';
import {FcIdea} from 'react-icons/fc';
import {FcOnlineSupport} from 'react-icons/fc';
import {BsShieldCheck} from 'react-icons/bs';
import {MdAnalytics} from 'react-icons/md';
import NavBar from '../NavBar/Navbar.js';

function About() {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
    <div className='about-container'>
      <div className='heading-title'>
        <h1 className='heading-title-content'>About US</h1>
      </div>
      <div className='about'>
       <div className='about-row'>
         <div className='about-col'>
           <h4><small>Welcome to</small><br/> STAR MART<small> Provision Partner</small></h4>
           <p>Every human being wants to lead a healthy life in the society, since health is wealth.
              Health is the state of physically and mentally wellbeing. If mind disturbed, it cause 
              unwanted consequences in the body, in order to prevent it. Everyone should be insisted 
              to make their mind in steady state. Unless, they cannot accomplish their basic needs of 
              life, exclusively earning money.Although the person is financially sound, better to live 
              in the society with mentally solace and free of disease. In order to maintain healthy life, 
              everyone should follow the medicinally valuable herbal food as medicine, to be free of disease. 
              Medicinal plants are being used since the time of siddhars. In ancient times, these had been used as food. Hence the siddhars literally pronounced that, the “food is medicine and the medicine is food”. From this we can understand that, unless we can eat the food as medicine we cannot maintain ourhealth properly. Medicinal plants can be applied to cure many diseases, in terms of siddha as well as Ayurveda. It aims to protect the person to be free of diseases.Based on this, we the UNILAYAA COMPANY fervently take the necessary efforts to create the awareness about the medicine and supplying such medicinally valuable herbal food to the society.Nature seems to be a philanthropist, since it produces many medicinal plants for making the environment without pollution.
The research is being carried out on the traditionally valuable medicinal plants and its effectiveness by 
various scientist since five thousand years back. According to their report, treatment using medicinal 
plants could have beenstarted during ancient times, ie; before the start of Christian era or about 5000 years 
back. In fact, approximately, 80% of the people are highly inquisitive to use this medicinal plants for 
treating the disease in Asian countries. WHO obviously reported that the 25% of allopathic medicines are 
synthetically prepared from the content of our medicinal plants, as it has more antimicrobial activity.
In United States of America and Europe, medicines have been prepared by the same way and readily consumed 
to treat many diseases.Medicinal plants are best to treat the chronic diseases like asthma,cancer, diabetic, 
renal failure, arthritis and various skin disease as they do nothave any side effects.Usually it has been 
prepared in the form of powder, liquid and tablets.Thus the way it is being given to patients.We profoundly 
say that the traditional medicines and food products, which is prepared from medicinal plants are having 
many advantages like,</p>
         </div>
         <div className='about-col-1'>
           <div className='about-image'>
             <img src={aboutimg} />
           </div>
           <h4><BsShieldCheck /> SSL SECURITY</h4>
           <h4><MdAnalytics /> DISTRIBUTED SERVER</h4>
           <h4><FcIdea /> INNOVATIVE IDEAS</h4>
           <h4><FcOnlineSupport /> FULL SUPPORT</h4>
         </div>
       </div>
      </div>

    </div>
    <div>
  <Footer />
</div>
    </div>
  )
}

export default About