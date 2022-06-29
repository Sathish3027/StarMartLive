import React from 'react';
import { Link } from 'react-router-dom';
import SideNavbar from '../SideNavbar/SideNavbar';
import RegisterService from './RegisterService';

class Register extends React.Component {
constructor(props) {
    super(props);

    this.state =( {date_of_birth:'',date_of_joining:'',userName:'',fatherName:'',address:'',
    emailId:'',district:'',state:'',mobileNumber:'',phoneNumber:'',pinCode:'',sponsourid:'',
    sponsourName:'',amount:'',rs:'',bankName:'',accountName:'',accountNumber:'',
    ifscNumber:'',panNumber:'',branchName:''
    });

    
    this.changeDateOfJoinHandler = this.changeDateOfJoinHandler.bind(this);
    this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
    this.changeFatherNameHandler = this.changeFatherNameHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeDistrictHandler = this.changeDistrictHandler.bind(this);
    this.changeStateHandler = this.changeStateHandler.bind(this);
    this.changePinCodeHandler = this.changePinCodeHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
    this.changeSponsourIdHandler = this.changeSponsourIdHandler.bind(this);
    this.changeSponsourNameHandler = this.changeSponsourNameHandler.bind(this);
    this.changeRsHandler = this.changeRsHandler.bind(this);
    this.changeAmountHandler = this.changeAmountHandler.bind(this);
    this.changeAccountNameHandler = this.changeAccountNameHandler.bind(this);
    this.changeAccountNumberHandler = this.changeAccountNumberHandler.bind(this);
    this.changeBankNameHandler = this.changeBankNameHandler.bind(this);
    this.changeBranchNameHandler = this.changeBranchNameHandler.bind(this);
    this.changeIfscNumberHandler = this.changeIfscNumberHandler.bind(this);
    this.changePanNumberHandler = this.changePanNumberHandler.bind(this);
    this.saveRegister = this.saveRegister.bind(this);
}




changeDateOfJoinHandler(event){
    this.setState({date_of_joining:event.target.value});
}

changeDateOfBirthHandler(event){
    this.setState({date_of_birth:event.target.value});
}

changeUserNameHandler(event){
    this.setState({userName:event.target.value});
}

changeFatherNameHandler(event){
    this.setState({fatherName:event.target.value});
}

changeAddressHandler(event){
    this.setState({address:event.target.value});
}

changeEmailIdHandler(event){
    this.setState({emailId:event.target.value});
}

changePhoneNumberHandler(event){
    this.setState({phoneNumber:event.target.value});
}

changeMobileNumberHandler(event){
    this.setState({mobileNumber:event.target.value});
}

changeStateHandler(event){
    this.setState({state:event.target.value});
}

changePinCodeHandler(event){
    this.setState({pinCode:event.target.value});
}

changeDistrictHandler(event){
    this.setState({district:event.target.value});
}

changeAmountHandler(event){
    this.setState({amount:event.target.value});
}

changeRsHandler(event){
    this.setState({rs:event.target.value});
}

changeSponsourNameHandler(event){
    this.setState({sponsourName:event.target.value});
}

changeSponsourIdHandler(event){
    this.setState({sponsourid:event.target.value});
}

changeBankNameHandler(event){
    this.setState({bankName:event.target.value});
}

changeBranchNameHandler(event){
    this.setState({id:event.target.value});
}

changeAccountNameHandler(event){
    this.setState({accountName:event.target.value});
}

changeAccountNumberHandler(event){
    this.setState({accountNumber:event.target.value});
}

changePanNumberHandler(event){
    this.setState({panNumber:event.target.value});
}

changeIfscNumberHandler(event){
    this.setState({ifscNumber:event.target.value});
}

saveRegister = (e) =>{
    e.preventDefault();
    let register = {
                    date_of_joining:this.state.date_of_joining,
                    date_of_birth : this.state.date_of_birth,
                    userName : this.state.userName,
                    fatherName : this.state.fatherName,
                    address : this.state.address,
                    emailId : this.state.emailId,
                    phoneNumber : this.state.phoneNumber,
                    mobileNumber : this.state.mobileNumber,
                    pinCode : this.state.pinCode,
                    state : this.state.state,
                    district : this.state.district,
                    sponsourName : this.state.sponsourName,
                    sponsourid : this.state.sponsourid,
                    amount : this.state.amount,
                    rs : this.state.rs,
                    bankName : this.state.bankName,
                    branchName : this.state.branchName,
                    accountName : this.state.accountName,
                    accountNumber : this.state.accountNumber,
                    ifscNumber : this.state.ifscNumber,
                    panNumber : this.state.panNumber,
    }
    console.log("register =>"+ JSON.stringify(register));

    RegisterService.createRegister(register).then((res) =>{
        this.props.history.push('/team');
    });
}

    render() {
        return (
            
          <>
          <div>
            <SideNavbar/>
            </div>
     <div className='gen-container'>
     <div className="genealogy">
      <h2>Registration Form</h2>
      <form>
        <div>
        <div className='field-id'>
          <label>Member ID </label>
          <input type="text" name='id'/>
        </div>

        <div class="form-row">
          <div class="form-double">
            <label>Date</label>
            <input type="date" name="date_of_joining" value={this.state.date_of_joining}
             onChange={this.changeDateOfJoinHandler} />
          </div>
          <div class="form-double-1">
            <label>D.O.B</label>
            <input type="date" name="date_of_birth" value={this.state.date_of_birth} onChange={this.changeDateOfBirthHandler} />
          </div>
          </div>

          <div className='form-double'>
            <label>UserName</label>
            <input type="text" name="userName" value={this.state.userName} onChange={this.changeUserNameHandler} />
            </div>

          <div class="form-col-fa">
          <label>Father/Husband Name</label>
            <input type="text" name="fatherName" value={this.state.fatherName} onChange={this.changeFatherNameHandler} />
          </div>

          <div className='address'>
          <label>Address</label>
            <input type="text" name="address" value={this.state.address} onChange={this.changeAddressHandler} />
          </div>

          <div className='form-row'>
            <div className='form-add'>
            <label>District</label>
            <input type="text" name="district" value={this.state.district} onChange={this.changeDistrictHandler} />
            </div>
            <div className='form-add-1'>
            <label>State</label>
            <input type="text" name="state" value={this.state.state} onChange={this.changeStateHandler} />
            </div>
            <div className='form-add-2'>
            <label>Pin Code</label>
            <input type="number" name="pinCode" value={this.state.pinCode} onChange={this.changePinCodeHandler} />
            </div>
          </div>

          <div className='form-row'>
            <div className='number'>
            <label>Phone Number</label>
            <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler} />
            </div>
            <div className='number'>
            <label>Mobile Number</label>
            <input type="number" name="mobileNumber" value={this.state.mobileNumber} onChange={this.changeMobileNumberHandler} />
            </div>
          </div>

          <div className='single'>
          <label>Email</label>
            <input type="email" name="emailId" value={this.state.emailId} onChange={this.changeEmailIdHandler} />
          </div>

          <h3 className='form-head'>Sponsor Details</h3>

          <div className='form-row'>
            <div className='form-double spon'>
            <label>Name</label>
            <input type="text" name="sponsourName" value={this.state.sponsourName} onChange={this.changeSponsourNameHandler} />
            </div>
            <div className='form-double-1 spon'>
            <label>ID NO</label>
            <input type="text" name="sponsourid" value={this.state.sponsourid} onChange={this.changeSponsourIdHandler} />
            </div>
          </div>

          <div className='amount'>
          <label>Amount in Words</label>
            <input type="text" name="amount" value={this.state.amount} onChange={this.changeAmountHandler} />
          </div>

          <div className='rs'>
          <label>RS/-</label>
            <input type="number" name="rs" value={this.state.rs} onChange={this.changeRsHandler} />
          </div>

          <h3 className='form-head'>Payout Details</h3>

          <div className='form-row'>
            <div className='account'>
            <label>Bank Name</label>
            <input type="text" name="bankName" value={this.state.bankName} onChange={this.changeBankNameHandler} />
          </div>
          <div className='account'>
            <label>Account NO</label>
            <input type="number" name="accountNumber" value={this.state.accountNumber} onChange={this.changeAccountNumberHandler} />
          </div>
            </div>

            <div className='form-row'>
           <div className='account'>
          <label>Branch Name</label>
            <input type="number" name="branchName" value={this.state.branchName} onChange={this.changeBranchNameHandler} />
          </div>

          <div className='account'>
            <label>Account Name</label>
            <input type="text" name="accountName" value={this.state.accountName} onChange={this.changeAccountNameHandler} />
          </div>
          </div>

          <div className='form-row'>
            <div className='account'>
            <label>Pan Number</label>
            <input type="text" name="panNumber" value={this.state.panNumber} onChange={this.changePanNumberHandler} />
          </div>
          <div className='account'>
            <label>IFSC Code</label>
            <input type="text" name="ifscNumber" value={this.state.ifscNumber} onChange={this.changeIfscNumberHandler} />
          </div>
            </div>
          <div className='buttons'>
        <button  type="submit" className='form-btn' onClick={this.saveRegister}>Register</button>
         
          </div>
          </div>

      </form>
       </div>
   </div>
   </>
        );
    }
}



export default Register;