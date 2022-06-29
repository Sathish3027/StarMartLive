import React, { useEffect, useState } from 'react'
import registerService from '../Axios/HttpService';
import SideNavbar from '../SideNavbar/SideNavbar';
import './MyTeam.css';



const MyTeam = () => {



    const [registers, setRegisters] = useState([])

    useEffect(() => {
        
        init();
    
    }, [])
    
    const init = () =>{
    
        registerService.getAll().then(response => {
            console.log('printing data',response.data)
            setRegisters(response.data);
           })
           .catch(error =>{
             console.log('error problem',error)
           })
    }

 

 
  
    return (
      <>
      <div>
      <SideNavbar/>
      </div>
      <div className='container myTeam'>
        <h2 className='text-center'>User List</h2>
       
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <td>User ID</td>
                <td> User Name</td>
                <td> User EmailID</td>
                <td> User District</td>
              </tr>
            </thead>

            <tbody>
              {
                 registers.map(register => (
                  <tr key = {register.id}>
                    <td>{register.id} </td>
                    <td>{register.userName}</td>
                    <td>{register.emailId}</td>
                    <td>{register.district}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      </>
    )
  }


export default MyTeam