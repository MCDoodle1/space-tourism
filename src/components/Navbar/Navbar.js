import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';

const Navbar = ( {activateMenu, resizeWindow, menuIsActive, handleMouseLeave, setIndex} ) => {

  return (
    <div onMouseLeave={handleMouseLeave} className='navbar-wrapper'>
      <img src={logo} 
        alt="logo" 
        className='navbar-logo'
        />

      { !menuIsActive ? 
        <img src={hamburger} 
          alt="hamburger menu icon" 
          className='navbar-hamburger' 
          onClick={activateMenu}
          /> :
        <img src={close} 
          alt="menu close button" 
          className='navbar-close'
          onClick={activateMenu}
        />
      }

      <div className="h-line"></div>
      { ((menuIsActive && resizeWindow) || !resizeWindow) && 
        <ul className="navbar-menu">
          <NavLink to="/">
          <li><span>00</span>home</li>
          </NavLink>
          <NavLink to="/Destination" onClick={() => setIndex(0)}>
          <li><span>01</span>destination</li>
          </NavLink>
          <NavLink to="/Crew" onClick={() => setIndex(0)}>
          <li><span>02</span>crew</li>
          </NavLink>
         <NavLink to="/Technology" onClick={() => setIndex(0)}>
          <li><span>03</span>technology</li>
          </NavLink>
        </ul> 
         }
    </div>
  )
};

export default Navbar;
