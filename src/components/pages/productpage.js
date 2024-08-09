import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faCaretDown, faCaretUp, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import Brand from "../thirddata"; // Adjust the path if needed
import '../productpage.css';
import { 
    faYoutube, 
    faFacebook, 
    faTwitter, 
    faInstagram 
  } from '@fortawesome/free-brands-svg-icons';

export default function Product() {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const { id } = useParams();
    console.log("Product ID:", id); // Debugging line
   
    const product = Brand.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon
            className="star"
                key={index}
                icon={faStar}
                color={index < rating ? "gold" : "gray"}
            />
        ));
    };

    const renderSpecsTable = (specs) => {
        if (!specs) return null;
        return (
            <table className="specs-table">
                <tbody>
                    {Object.entries(specs).map(([key, value], index) => (
                        <tr key={index}>
                            <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };
    
    return (
        <div>
            <div className='container-1'>
                <div className="text">
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
                    <FontAwesomeIcon icon={faUser} className='icon--div' />
                    <FontAwesomeIcon icon={dropdownOpen ? faCaretUp : faCaretDown} className='icon--div' />
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
                    <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} className='icon--div' /></Link>
                </div>
            </div>

            <div className="entire--div">
                <div className="enire-left">
                    <img src={product.image} alt={product.name} className="entire--img" />
                </div>
                <div className="enire-right">
                    <div className="font--back">
                        <h3 className="font--weight">{product.name}</h3>
                        <h3 className="font--style">${product.price}</h3>
                    </div>
                    <p className="about--paragraph">{product.description}</p>
                    <div className="entire--rating">
                        <p className="about--paragraph">Leave a review {renderStars(product.rating)}</p>
                    </div>
                    <div className="entire--rating">
                        <h3 className="green">En Stock</h3>
                    </div>
                    <div className="entire--button">
                        <Link to="/payment">
                        <button className="cart-button">ADD TO CART</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div className="properties--div">
                <h1>THE SPECS</h1>
                {renderSpecsTable(product.specs)}
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
                  <img  src="../images/img14.jpg" alt='' className='footer--image'/>
                  <img src="../images/img15.jpg" alt='' className='footer--image'/>
                  <img src="../images/img16.jpg"alt='' className='footer--image'/>
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
