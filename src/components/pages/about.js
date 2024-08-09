import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faCaretDown, faCaretUp, faSearch} from '@fortawesome/free-solid-svg-icons';
import { 
    faYoutube, 
    faFacebook, 
    faTwitter, 
    faInstagram 
  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function About() {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
    return(
        <div className="about--container">
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
            <div className="about--headers">
            <h2>About Us</h2>
            <h6 className="about--h">Welcome to Tech Haven!</h6>
            <p className="about--paragraph">At Tech Haven, we are passionate about bringing the latest and greatest gadgets to tech enthusiasts everywhere. Specializing in phones and laptops, our mission is to provide high-quality devices that enhance your digital experience.</p>
            </div>

            <div className="about--headers">
            <h6 className="about--h">Who We Are</h6> 
            <p className="about--paragraph">Tech Haven was founded with the vision of creating a one-stop-shop for all your tech needs. We understand the excitement of unboxing a new gadget and the importance of having reliable technology at your fingertips. Our team is dedicated to curating a selection of the best gadgets on the market, ensuring that you always have access to cutting-edge technology.</p>
            </div>

            <div className="about--headers">
            <h6 className="about--h">What We Offer</h6> 
            <div className="list">
            
                <li className="text--items">Smartphones: Explore our extensive collection of smartphones from top brands, featuring the latest models and innovations.</li>
                <li className="text--items">Laptops: Discover a wide range of laptops to suit your needs, whether you're a gamer, a professional, or a casual user.</li>
                <li className="text--items">Accessories: Find the perfect accessories to complement your devices, from protective cases to high-performance chargers.</li>
            
            </div>
           
            </div>

            <div className="about--headers">
            <h6 className="about--h">Our Commitment</h6> 
            <p className="about--paragraph">At Tech Haven, customer satisfaction is our top priority. We strive to offer competitive prices, fast shipping, and exceptional customer service. Our knowledgeable staff is always here to help you make informed decisions and find the perfect tech solutions for your lifestyle.</p>
            </div>

            <div className="about--headers">
            <p className="about--paragraph">Thank you for choosing Tech Haven. Join us on our journey to stay ahead of the tech curve and experience the future of gadgets today!</p>
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