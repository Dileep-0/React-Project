import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Headerpart = () => {
  const [clicked, setClicked] = useState(false);


  const showToggle = () => {
    setClicked(!clicked);
  };

  return (
    <div className="main">
      <div className="nav">
        <div className="logo">
          <img src="https://media.licdn.com/dms/image/C560BAQG9gqfgGSt7TA/company-logo_200_200/0/1630660260109/elico_healthcare_services_ltd_logo?e=2147483647&v=beta&t=0Vr21afQYc6b6SQU43apY-PjXGor1GMR_kGdeElI6gg" alt="Company Logo" />
        </div>
        <div className="items">
          <ul>
            <li><Link to='/aboutus' >About Us</Link></li>
            <li><Link to='/applications' >Applications</Link></li>
            <li><Link to='/services' >Services</Link></li>
            <li><Link to='/contactus' >Contact Us</Link></li>  
            <li><Link to='/graphs'>Graphs</Link></li>

          </ul>
        </div>

        <div className='dropdown'>
            <button className="dropbtn" onClick={showToggle}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            {clicked && (
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Headerpart;
