import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
  const [isAppointmentDropdownOpen, setIsAppointmentDropdownOpen] = useState(false);

  const toggleRegisterDropdown = () => {
    setIsRegisterDropdownOpen(!isRegisterDropdownOpen);
  };

  const toggleAppointmentDropdown = () => {
    setIsAppointmentDropdownOpen(!isAppointmentDropdownOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between">
      <span className='text-white text-xl font-bold'>Web Doc</span>
      <ul className="flex space-x-4 items-center"> 
        <li>
          <Link to="/" className="text-white hover:text-blue-300" >Home</Link>
        </li>
        <li className="relative">
          <button 
            onClick={toggleRegisterDropdown} 
            className="text-white hover:text-blue-300"
          >
            Register
          </button>
          {isRegisterDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white rounded shadow-lg z-10">
              <Link 
                to="/patientlogin" 
                className="block px-4 py-2 text-blue-600 hover:bg-gray-100"
                onClick={() => setIsRegisterDropdownOpen(false)} 
              >
                Patient
              </Link>
              <Link 
                to="/doctor" 
                className="block px-4 py-2 text-blue-600 hover:bg-gray-100"
                onClick={() => setIsRegisterDropdownOpen(false)} 
              >
                Doctor
              </Link>
            </div>
          )}
        </li>
        <li className="relative">
          <button 
            onClick={toggleAppointmentDropdown} 
            className="text-white hover:text-blue-300"
          >
            Appointments
          </button>
          {isAppointmentDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white rounded shadow-lg z-10">
              <Link 
                to="/appointment" 
                className="block px-4 py-2 text-blue-600 hover:bg-gray-100"
                onClick={() => setIsAppointmentDropdownOpen(false)} 
              >
                View Appointments
              </Link>
              <Link 
                to="/schedule" 
                className="block px-4 py-2 text-blue-600 hover:bg-gray-100"
                onClick={() => setIsAppointmentDropdownOpen(false)} 
              >
                Schedule Appointment
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

