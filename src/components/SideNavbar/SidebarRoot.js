import React from 'react'
import MyTeam from '../MyTeam/MyTeam';
import MyProfile from '../MyProfile/MyProfile';
import SideNavbar from './SideNavbar';
import {BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom';
import Genealogy from '../Genealogy/Genealogy';
import Register from '../Genealogy/Register.js';

function SidebarRoot() {
  return (
    <Router>
<SideNavbar />
<Routes>
  <Route path='/register' exact element={<Register />} />
  <Route path="/team" element={<MyTeam />} />
  <Route path="/profile" element={<MyProfile />}/>
</Routes>
</Router>

  )
}

export default SidebarRoot