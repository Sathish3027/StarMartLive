import SideNavbar from "../SideNavbar/SideNavbar";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import registerService from "../Axios/HttpService";


const CreateUser = () =>{




  const initialValues={userName:''};
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
 
  
  return errors;
}



    const [userName, setUserName] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [date_of_joining, setDateOfJoining] = useState('');
    const [emailId, setEmailId] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [sponsourid, setSponsourId] = useState('');
    const [sponsourName, setSponsourName] = useState('');
    const [amount, setAmount] = useState('');
    const [rs, setRs] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountName, setAccountName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [branchName, setBranchName] = useState('');
    const [ifscNumber, setIfscNumber] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const navigate = useNavigate();


const saveRegister = (e) =>{
   
        e.preventDefault();

        

        const register = {userName,date_of_birth,date_of_joining,
                          emailId,phoneNumber,mobileNumber,fatherName,
                        state,district,address,sponsourName,sponsourid,
                    amount,rs,panNumber,accountName,accountNumber,
                branchName,bankName,ifscNumber,pinCode};

                registerService.create(register).then(response =>{
                    console.log("data added",response.data);

                   

                    navigate('/team');
                  })
                  .catch(error =>{
                    console.log('error problem',error)
                  });
              }


    return(
        <>
        <div>
          <SideNavbar/>
          </div>
   <div className='gen-container'>
   <div className="genealogy">
    <h2>Registration Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
    

      <div class="form-row">
        <div class="form-double">
          <label>Date</label>
          <input type="date" id="date_of_joining" value={date_of_joining} onChange={(e)=>setDateOfJoining(e.target.value)} placeholder="date of joining" />
        </div>
        <div class="form-double-1">
          <label>D.O.B</label>
          <input type="date" id="date_of_birth" value={date_of_birth} onChange={(e)=>setDateOfBirth(e.target.value)} placeholder="Date of birth"/>
        </div>
        </div>

        <div className='form-double'>
          <label>UserName</label>
          <input type="text" id="userName" name="userName" value={(userName,formValues.userName)} 
          onChange={((e)=>setUserName(e.target.value),handleChange)} placeholder="User Name" />
         
          </div>
          <p className='warning'>{formErrors.userName}</p>

        <div class="form-col-fa">
        <label>Father/Husband Name</label>
          <input type="text" id="fatherName" value={fatherName} onChange={(e)=>setFatherName(e.target.value)} placeholder="Father Name" />
        </div>

        <div className='address'>
        <label>Address</label>
          <input type="text" id="address" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address"/>
        </div>

        <div className='form-row'>
          <div className='form-add'>
          <label>District</label>
          <input type="text" id="district" value={district} onChange={(e)=>setDistrict(e.target.value)} placeholder="District"/>
          </div>
          <div className='form-add-1'>
          <label>State</label>
          <input type="text" id="state" value={state} onChange={(e)=>setState(e.target.value)} placeholder="State"/>
          </div>
          <div className='form-add-2'>
          <label>Pin Code</label>
          <input type="number" id="pinCode" value={pinCode} onChange={(e)=>setPinCode(e.target.value)} placeholder="Pin Code"/>
          </div>
        </div>

        <div className='form-row'>
          <div className='number'>
          <label>Phone Number</label>
          <input type="number" id="phoneNumber" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Phone Number"/>
          </div>
          <div className='number'>
          <label>Mobile Number</label>
          <input type="number" id="mobileNumber" value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)} placeholder="Mobile Number"/>
          </div>
        </div>

        <div className='single'>
        <label>Email</label>
          <input type="email" id="emailId" value={emailId} onChange={(e)=>setEmailId(e.target.value)} placeholder="Email" />
        </div>

        <h3 className='form-head'>Sponsor Details</h3>

        <div className='form-row'>
          <div className='form-double spon'>
          <label>Name</label>
          <input type="text" id="sponsourName" value={sponsourName} onChange={(e)=>setSponsourName(e.target.value)} placeholder="Sponsour Name"/>
          </div>
          <div className='form-double-1 spon'>
          <label>ID NO</label>
          <input type="text" id="sponsourid" value={sponsourid} onChange={(e)=>setSponsourId(e.target.value)} placeholder="Sponsour Id"/>
          </div>
        </div>

        <div className='amount'>
        <label>Amount in Words</label>
          <input type="text" id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Amount"/>
        </div>

        <div className='rs'>
        <label>RS/-</label>
          <input type="number" id="rs" value={rs} onChange={(e)=>setRs(e.target.value)} placeholder="RS" />
        </div>

        <h3 className='form-head'>Payout Details</h3>

        <div className='form-row'>
          <div className='account'>
          <label>Bank Name</label>
          <input type="text" id="bankName" value={bankName} onChange={(e)=>setBankName(e.target.value)} placeholder="Bank Name"/>
        </div>
        <div className='account'>
          <label>Account NO</label>
          <input type="number" id="accountNumber" value={accountNumber} onChange={(e)=>setAccountNumber(e.target.value)} placeholder="Account Number" />
        </div>
          </div>

          <div className='form-row'>
         <div className='account'>
        <label>Branch Name</label>
          <input type="text" id="branchName" value={branchName} onChange={(e)=>setBranchName(e.target.value)} placeholder="Branch Name" />
        </div>

        <div className='account'>
          <label>Account Name</label>
          <input type="text" id="accountName" value={accountName} onChange={(e)=>setAccountName(e.target.value)} placeholder="Account Name"/>
        </div>
        </div>

        <div className='form-row'>
          <div className='account'>
          <label>Pan Number</label>
          <input type="text" id="panNumber" value={panNumber} onChange={(e)=>setPanNumber(e.target.value)} placeholder="Pan Number"/>
        </div>
        <div className='account'>
          <label>IFSC Code</label>
          <input type="text" id="ifscNumber" value={ifscNumber} onChange={(e)=>setIfscNumber(e.target.value)} placeholder="IFSC Number"/>
        </div>
          </div>
        <div className='buttons'>
      <button  type="submit" className='form-btn' onClick={(e)=>saveRegister(e)}>Register</button>
       
        </div>
        </div>

    </form>
     </div>
 </div>
 </>
    );
}
export default CreateUser