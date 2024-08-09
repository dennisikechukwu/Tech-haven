import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className='main--container'>
      <nav>
        <div className='container'>
        <div className='image--logo'>
        <img src='./images/logo.jpg.jpg' alt="" className="logo--image"/>
        </div>
        <div className='menu-toggle' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
        </div>

        <div className={`nav--items ${isMenuOpen ? 'open' : ''}`}>
        <div className='close-btn' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
      <ul>
        <li className='nav---items' id='active'><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li className='nav---items'><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
        <li className='nav---items'><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li className='nav---items'><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li className='nav---items'><Link to="/journal" onClick={closeMenu}>Journal</Link></li>
      </ul>
      </div>
      </div>
    </nav>

    

    </div>
    
    
  );
}

export default Navbar;
