import React from 'react'

import './Genealogy.css';

const Genealogy = () => {
  return (
   
     <div className='gen-container'>
       <div className="genealogy">
        <h2>Registration Form</h2>
        <form>
          <div>
          <div className='field-id'>
            <label>Member ID </label>
            <input type="text" name='id' />
          </div>

          <div class="form-row">
            <div class="form-double">
              <label>Date</label>
              <input type="date" name="date" />
            </div>
            <div class="form-double-1">
              <label>D.O.B</label>
              <input type="date" name="date" />
            </div>
            </div>

            <div className='form-double'>
              <label>UserName</label>
              <input type="text" name="uname" />
              </div>

            <div class="form-col-fa">
            <label>Father/Husband Name</label>
              <input type="text" name="fname" />
            </div>

            <div className='address'>
            <label>Address</label>
              <input type="text" name="address" />
            </div>

            <div className='form-row'>
              <div className='form-add'>
              <label>District</label>
              <input type="text" name="district" />
              </div>
              <div className='form-add-1'>
              <label>State</label>
              <input type="text" name="state" />
              </div>
              <div className='form-add-2'>
              <label>Pin Code</label>
              <input type="number" name="pin" />
              </div>
            </div>

            <div className='form-row'>
              <div className='number'>
              <label>Phone Number</label>
              <input type="number" name="phone" />
              </div>
              <div className='number'>
              <label>Mobile Number</label>
              <input type="number" name="mobile" />
              </div>
            </div>

            <div className='single'>
            <label>Email</label>
              <input type="email" name="email" />
            </div>

            <h3 className='form-head'>Sponsor Details</h3>

            <div className='form-row'>
              <div className='form-double spon'>
              <label>Name</label>
              <input type="text" name="sname" />
              </div>
              <div className='form-double-1 spon'>
              <label>ID NO</label>
              <input type="text" name="sid" />
              </div>
            </div>

            <div className='amount'>
            <label>Amount in Words</label>
              <input type="text" name="amount" />
            </div>

            <div className='rs'>
            <label>RS/-</label>
              <input type="number" name="rs" />
            </div>

            <h3 className='form-head'>Payout Details</h3>

            <div className='form-row'>
              <div className='account'>
              <label>Bank Name</label>
              <input type="text" name="bank" />
            </div>
            <div className='account'>
              <label>Account NO</label>
              <input type="number" name="account" />
            </div>
              </div>

             <div className='single'>
            <label>Branch Name</label>
              <input type="text" name="branch" />
            </div>

            <div className='form-row'>
              <div className='account'>
              <label>Pan Number</label>
              <input type="text" name="pan" />
            </div>
            <div className='account'>
              <label>IFSC Code</label>
              <input type="text" name="ifsc" />
            </div>
              </div>
            <div className='buttons'>
            <button className='form-btn'>Register</button>
            </div>
            </div>

        </form>
         </div>
     </div>
      
  )
}

export default Genealogy