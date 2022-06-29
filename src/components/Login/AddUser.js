import React from 'react';
import { useState ,useEffect} from 'react';
import './UserLogin.css';

function AddUser() {

    const initialValues={username:'',email:'',address:'',phone:'',pan:'',password:''};
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
        errors.username="user name is required!";
    }

    if(!values.email){
        errors.email="email id is required!";
    }
    else if(!regex.test(values.email)){
        errors.email="This ia not a valid email format!";
    }

    if(!values.address){
        errors.address="address is required!";
    }

    if(!values.phone){
        errors.phone="phone number is required!";
    }

    if(!values.pan){
        errors.pan="pan number is required!";
    }

    if(!values.password){
        errors.password="password is required!";
    }
    else if(values.password.length<4){
        errors.password="password must be more than 4 characters!";
    }
    else if(values.password.length>10){
        errors.password="password cannot be more than 10 characters!";
    }
    
    return errors;
}

 return (
    <div className='form-log add-user'>
    <div className='login add-login'>
    
      <h1>Add User</h1>
      
      <form onSubmit={handleSubmit}>
        <div className='text-field'>
          <input type="text" name='username' value={formValues.username} onChange={handleChange}/>
          <span></span>
          <label>UserName</label>
        </div>
        <p className='warning'>{formErrors.username}</p>
        <div className='text-field'>
          <input type="email" name='email' value={formValues.email} onChange={handleChange}/>
          <span></span>
          <label>EmailId</label>
        </div>
        <p className='warning'>{formErrors.email}</p>
        <div className='text-field'>
          <input type="text" name='address' value={formValues.address} onChange={handleChange}/>
          <span></span>
          <label>Address</label>
        </div>
        <p className='warning'>{formErrors.address}</p>
        <div className='text-field'>
          <input type="number" name='phone' value={formValues.phone} onChange={handleChange}/>
          <span></span>
          <label>PhoneNumber</label>
        </div>
        <p className='warning'>{formErrors.phone}</p>
        <div className='text-field'>
          <input type="text" name='pan' value={formValues.pan} onChange={handleChange}/>
          <span></span>
          <label>PanNumber</label>
        </div>
        <p className='warning'>{formErrors.pan}</p>
        <div className='text-field'>
          <input type="password" name='password' value={formValues.password} onChange={handleChange}/>
          <span></span>
          <label>Password</label>
        </div>
        <p className='warning'>{formErrors.password}</p>
        <button className="log-btn">Register</button>
      </form>
    </div>
    </div>
  )
}

export default AddUser