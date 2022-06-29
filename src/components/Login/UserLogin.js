import React from 'react'
import './UserLogin.css';
import { useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate,Navigate} from 'react-router-dom';
import SidebarRoot from '../SideNavbar/SidebarRoot.js';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/Navbar';





function UserLogin() {
  const navigate = useNavigate();
 
  
  
  const initialValues={username:'',password:''};
  const[formValues,setFormValues]=useState({initialValues});
  const[formErrors,setFormErrors]=useState({});
  const[isSubmit,setIsSubmit]=useState(false);
  
  const handleChange=(e)=>{
      const{name,value}=e.target;
      setFormValues({... formValues,[name]:value});
  }

const handleSubmit=(e)=>{
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
  
}

useEffect(()=>{
  if(Object.keys(formErrors).length===0 && isSubmit)
  {
      console.log(formValues);
  }
},[formErrors]);

const validate=(values)=>{
  const errors={};
  const regex=/^[^/s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if(!values.username){
      errors.username="*user name is required!";
  }


  if(!values.password){
      errors.password="*password is required!";
  }
  else if(values.password.length<4){
      errors.password="password must be more than 4 characters!";
  }
  else if(values.password.length>10){
      errors.password="password cannot be more than 10 characters!";
  }
  else{navigate('/team');}
  
  return errors;
}





  
  return (
<>
 <div>
        <NavBar/>
      </div>
    <div>
    <div className='form-log'>
      <div className='form-image'>
        
      </div>
    <div className='login' id='u-login'>
      <h1>Member Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='text-field'>
          <input type="text" name='username' value={formValues.username} onChange={handleChange} />
          <span></span>
          <label>UserName</label>
        </div>
        <p className='warning'>{formErrors.username}</p>
        <div className='text-field'>
          <input type="password" name='password' value={formValues.password} onChange={handleChange} />
          <span></span>
          <label>Password</label>
        </div>
        <p className='warning'>{formErrors.password}</p>
        <div className='for-pass'>forgot password</div>
        <button className='log-btn' onClick={(e)=>handleSubmit(e)}>Team Login</button>
        
    
    
      </form>
    </div>
    </div>



    
   
 
       
           </div>
           <div><Footer /></div>
           </>
  );  
}

export default UserLogin
