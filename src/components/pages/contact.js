import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faCaretDown, faCaretUp, faSearch, faGreaterThan} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { 
  faYoutube, 
  faFacebook, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
    return(
        <div className="media--home">
             <div className='container-1'>
      <div className ="text">
      <h5>Your best gadget plug</h5>
      </div>
      <div className='form'>
        <input
        type='text'
        className='search--input'
        placeholder='search for anything'
        />
         <FontAwesomeIcon icon={faSearch} className='search-icon' />
      </div>
      <div className="menu" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faUser} 
          className='icon--div'
          />
          <FontAwesomeIcon icon={dropdownOpen ? faCaretUp : faCaretDown}
          className='icon--div'
          />
          {dropdownOpen && (
            <div className='dropdown-menu'>
              <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/others">Others</Link></li>
              </ul>
            </div>
          )}
        </div>
        <div className='cart'>
          <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}
          className='icon--div'
          /></Link>
        </div>

    </div>
            <div className="contact--container">
                <h6 className="contact--header">Contact</h6>
                <p>About   <FontAwesomeIcon icon={faGreaterThan} className="shop--icon" /> <span className="dark">   Contact</span></p>
                <div className="form--container">
                  <div className="contact---text">
                    <h6 className="form--header">NAME</h6>
                    <input
                    type="text"
                    className="inputs"
                    placeholder="Enter your name here"
                    />
                  </div>
                  <div className="contact---text">
                  <h6 className="form--header">EMAIL</h6>
                  <input
                    type="email"
                    className="inputs"
                    placeholder="Enter your email here"
                    />
                  </div>
                  <div className="contact---text">
                  <h6 className="form--header">MESSAGE</h6>
                  <textarea className="text--area" placeholder="ENTER YOUR MESSAGE HERE"/>
                  </div>
                  <div className="contact---texts">
                    <Link to="/home">
                    <button className='sales'>POST</button>
                    </Link>
                  
                  </div>

                </div>
            </div>
            <footer className='footer--container'>
            <div className="footer--session">
              <div className='more--info'>
              <h6 className='footer'>More about Tech Haven</h6>
              <p className='footer--ways'>We sell legit and durable gadgets and we also give awesome discounts.. We are the best in town.</p>
              <Link to="#"><FontAwesomeIcon icon={faYoutube}  className='footer--icons'/></Link>
              <Link to="#"><FontAwesomeIcon icon={faFacebook} className='footer--icons'/></Link>
              <Link to="#"><FontAwesomeIcon icon={faTwitter} className='footer--icons'/></Link>
              <Link to="#"><FontAwesomeIcon icon={faInstagram} className='footer--icons'/></Link>
              </div>
              <div className="shop--footer">
              <h6 className='footer'>Shop</h6>
              <li className='hover'><Link to="#">Laptops</Link></li>
              <li className='hover'><Link to="#">phones</Link></li>
              <li className='hover'><Link to="#">others</Link></li>
              </div>
              <div className='account'>
              <h6 className='footer'>Account</h6>
              <li className='hover'><Link to="/signup">profile</Link></li>
              <li className='hover'><Link to="#">Orders</Link></li>
              <li className='hover'><Link to="#">Addresses</Link></li>
              <li className='hover'><Link to="#">Payments Options</Link></li>
              </div>
              <div className='subscribe'>
                <h6 className='footer'>Subscribe to our news-letter</h6>
                <div className='form--footer'>
                  <input
                  type='email'
                  className='email'
                  />
                 <button className='sales'>Subscribe</button>
                </div>
                <div className='footer--images'>
                  <img  src="./images/img14.jpg" alt='' className='footer--image'/>
                  <img src="./images/img15.jpg" alt='' className='footer--image'/>
                  <img src="./images/img16.jpg"alt='' className='footer--image'/>
                </div>

              </div>
            </div>
            
          </footer>
          <hr/>
          <div className='copyright'>
            <p>&copy; Copyright 2024 | Tech Haven |All Rights Reserved</p>
          </div>
        </div>
    )
}