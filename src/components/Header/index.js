import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SiderbarData';
import './index.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const [hideNotification , setHide] = useState(true) ;
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {hideNotification && <div className='top-notification'>
        <h1 className='top-title'>Our delay policy has been changed <a  href='/' className='spanClass'>Know more</a></h1>
        <button type='button' className='close-hide' onClick={() => setHide(!hideNotification)}>X</button>
      </div> }
      <IconContext.Provider value={{ color: 'red' }}>
        <div className={`navbar ${!hideNotification ? 'fix' : ''}`}>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to='/' >
            <img src='https://img.freepik.com/free-vector/y-letter-colorful-logo-gradient-vector-designs_343694-1188.jpg' alt='logo' className='banner-logo'/>
          </Link>
          <div className='extra-large-devices-links'>
            <a href='/'>Traif</a>
            <a href='/'>What's new?<span className='arrow-span'>v</span>
            <div className='whats-new-card' style={{top:'px' , position:
          'absolute' , border: '0px 1px 1px 1px solid black' }}>
              <a href='/'>Store</a>
              <a href='/'>Intercity Capital</a>
            </div>
            </a>
           
            <a href='/'>offers</a>
            <a href='/'>Partner with Us<span className='arrow-span'>v</span>
            <div className='whats-new-card' style={{top:'px' , position:
          'absolute' , border: '0px 1px 1px 1px solid black'}}>
              <a href='/'>Earn With Us</a>
              <a href='/'>Own a franchise</a>
            </div>
            </a>
          </div>
          <div className='select-container'>  
            <select>
                <option>Udupi - Manipal</option>
                <option>Andhra - Visakhapatnam</option>
                <option>Telangana - Hyderabad</option>
            </select>
          </div>
          <div className='buttons-container'>
            <button type='button'>Login</button>
            <button type='button' className='button2'>Sign Up</button>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;