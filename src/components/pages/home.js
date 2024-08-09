import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faCaretDown, faCaretUp, faSearch, faTruckMoving} from '@fortawesome/free-solid-svg-icons';
import { 
  faYoutube, 
  faFacebook, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import NewArrivals from '../newarrivals';
import Best from '../bestsellers';

function Home() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className='media--home'>
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
    <div className='front--container'>
    <div className='front--text'> 
    <h2>
      Enhance your gaming experience
    </h2>
    <p className='test'>
      Discover our wide range of gaimg laptops and other awesome gadgets
    </p>
    <div className='button'>
      <Link to="/shop"><button className='shopp'>SHOP NOW</button></Link>
    
    </div>
    
    </div>
    <div className='front--image'>
    <img
    src='./images/page.jpg'
    alt=''
    className='page--image'
    />
    </div>
</div>

<div className='shopping--sphree'>
          <div className='warranty--text'>
          <h3 className='two'>2</h3><p className='tesst'>years warranty</p>
          </div>
          <div className='shipping--text'>
            <div className='icon'>
            <FontAwesomeIcon icon={faTruckMoving} 
            className='dispatch--icon'
            />
            </div>
            <div className='flex'>
            <p className='warranty'>Free shipping</p>
            
            <p className='warranty'>Free shipping world wide</p>
            </div>
            

          </div>

          <div className='father'>
          <div className='icon'>
          <FontAwesomeIcon icon={faTruckMoving} 
          className='dispatch--icon'
          />
        </div>
        <p className='warranty'>Return policy in 30 days</p>
          </div>

</div>

          <div className='offers'>
          <div className="sale-item printer-sale">
          <img src="./images/img1 (2).jpg" alt=""
          className='printer'
          />
          <h2>PRINTER SALES</h2>
          <p className='highlights'> Get up to <span className="highlight">30%</span> sales for all printers</p>
          <Link to="/payment"><button className='sales'>SHOP NOW</button></Link>
          </div>

          <div className="side-sales">
          <div className="sale-items ">
          <div className='headphone'>
          <h2>QUALITY HEADPHONES</h2>
          <p className='highlights'>Get up to <span className="highlight">70%</span> sale for all headphones</p>
          <Link to="/payment"><button className='sales'>Shop Now</button></Link>
          </div>
            <div className='flexo'>
            <img src="./images/img3.jpg" alt="" 
            className='jbl'
          />
            </div>
          
          
        </div>

        <div className="sale-items">
        <div className='push'>
          <h2>JUICY OFFER</h2>
          <p className='highlights'>Get up to <span className="highlight">50%</span> sale for the phone 14pro</p>
          <Link to="/payment"><button className='sales'>Shop Now</button></Link>
          </div>



          <div>
          <img src="./images/img2.jpg" alt="" 
          className='iphone'
          />
          </div>
          
          
          
        </div>
      </div>
          </div>
          <NewArrivals />
          <Best/>

          <div className='limited'> 
            <div className='play--station'>
              <img src='./images/img13.jpg' alt=''/>
            </div>
            <div className='three'>
              <h4>Product of the year</h4>
              <p> The blue play station 5.. Get it now </p>
              <Link to="payment">
              <button className='sales'>Shop Now</button></Link>
             
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
  );
}

export default Home;
