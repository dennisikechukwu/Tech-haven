import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faCaretDown, faCaretUp, faSearch,} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { 
    faYoutube, 
    faFacebook, 
    faTwitter, 
    faInstagram 
  } from '@fortawesome/free-brands-svg-icons';


export default function Journal() {
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

    <div className="about--headers">
            <h2>Tech Haven Journal</h2>
            <h6 className="about--h">Welcome to the Tech Haven Journal!</h6>
            <p className="about--paragraph">Our journal is your go-to destination for all things tech. Whether you're a gadget enthusiast, a tech-savvy professional, or someone who loves to stay updated with the latest in technology, the Tech Haven Journal has something for you.</p>

            </div>
            <div className="about--headers">
            <h6 className="about--h">What You'll Find Here</h6> 
            <div className="list">
            <li className="text--items">Latest News: Stay informed with the newest updates and trends in the world of technology. From groundbreaking product launches to significant industry developments, we cover it all.</li>
            <li className="text--items">In-Depth Reviews: Get comprehensive reviews of the latest gadgets, especially phones and laptops. Our expert analysis will help you make informed decisions on your next tech purchase.</li>
            <li className="text--items">How-To Guides: Discover practical tips and step-by-step guides to get the most out of your devices. Whether it's setting up a new phone or optimizing your laptop's performance, we've got you covered.</li>
            <li className="text--items">Tech Insights: Dive into thought-provoking articles on the future of technology, innovative breakthroughs, and the impact of tech on our daily lives.</li>
            <li className="text--items">Exclusive Features: Enjoy exclusive interviews with industry leaders, behind-the-scenes looks at tech events, and sneak peeks at upcoming products.</li>
          
        </div>
            </div>
            <div className="about--headers">
            <h6 className="about--h">Join the Conversation</h6> 
            <p className="about--paragraph">The Tech Haven Journal is not just a platform for sharing information; it's a community for tech lovers to connect and engage. We encourage you to join the conversation by commenting on articles, sharing your thoughts, and interacting with other readers.</p>
            </div>
            <div className="about--headers">
            <h6 className="about--h">Stay Updated</h6> 
            <p className="about--paragraph">Don't miss out on the latest content from the Tech Haven Journal. Subscribe to our newsletter to receive regular updates, special features, and exclusive content directly in your inbox.</p>
            </div>
            <div className="about--headers">
            <p className="about--paragraph">Thank you for visiting the Tech Haven Journal. We're excited to share our passion for technology with you and look forward to exploring the tech world together!</p>
            </div>
            <div className="about--headers">
              <Link to="/shop">
              <button className='saless'>CONTINUE SHOPPING</button></Link>
                  
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