import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../Assets/images/logo.svg';
import './styles.css';
import NavLinks from './Navlinks';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <img src={ logo } alt="Logo" />
        </a>
        <div className={ `nav__menu ${showMenu ? 'show-menu' : ''}` } id="nav-menu">
          <NavLinks setShowMenu={ setShowMenu } />
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <FaBars onClick={ () => toggleMenu() } />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
