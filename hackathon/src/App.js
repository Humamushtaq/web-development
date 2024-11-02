import { BrowserRouter as Router, Routes , Route , Link} from "react-router-dom";
import React from 'react';
import Navbar from './component/navbar';
import './index.css'; 
import Register from "./component/register";
import Doctor from "./component/doctor";
import Patient from "./component/patientlogin";
import Home from "./component/home";
import Appointment from "./component/appointment";
import Schedule from "./component/schedule";
function App() {
    return (
        <div>
          
          <Router>
            <Navbar />
            
            <Routes>
              
              <Route path="/" element={<Home />}/>   
              <Route path="/register" element={<Register />}/>  
              <Route path="/doctor" element={<Doctor />}/> 
              <Route path="/patientlogin" element={<Patient />}/>  
              <Route path="/appointment" element={<Appointment />}/>  

              <Route path="/schedule" element={<Schedule />}/>  
            </Routes>
            
          </Router>
        </div>
      
    );
}

export default App;
