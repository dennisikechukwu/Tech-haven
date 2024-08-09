import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faCaretDown, faCaretUp, faSearch, faGreaterThan,  } from '@fortawesome/free-solid-svg-icons';
import { 
  faYoutube, 
  faFacebook, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Brand from "../thirddata";

export default function Shop() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [filters, setFilters] = React.useState({
    category: [],
    color: [],
    price: [],
  });
  const [filteredProducts, setFilteredProducts] = React.useState(Brand);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (checked) {
        newFilters[name].push(value);
      } else {
        newFilters[name] = newFilters[name].filter(item => item !== value);
      }
      return newFilters;
    });
  };

  React.useEffect(() => {
    filterProducts(filters);
  }, [filters]);

  const filterProducts = (filters) => {
    let tempProducts = Brand;
    if (filters.category.length) {
      tempProducts = tempProducts.filter(product => filters.category.includes(product.category));
    }
    if (filters.color.length) {
      tempProducts = tempProducts.filter(product => filters.color.includes(product.color));
    }
    if (filters.price.length) {
      tempProducts = tempProducts.filter(product => {
        return filters.price.some(priceRange => {
          const [min, max] = priceRange.split('-').map(Number);
          return product.price >= min && product.price <= max;
        });
      });
    }
    setFilteredProducts(tempProducts);
  };

  return (
    <div className="media--home">
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
      
      <div className="shop--products">
        <h6 className="shop--header">Products</h6>
        <FontAwesomeIcon icon={faGreaterThan} className="shop--icon" /> <span className="shop--span">Shop</span>
      </div>

      <div className="category--container">
        <div className="filter-sidebar">
          <h3>Shop by Category</h3>
          <input type="checkbox" name="category" value="Gaming laptops" onChange={handleFilterChange} /> Gaming laptops<br />
          <input type="checkbox" name="category" value="Gaming Headset" onChange={handleFilterChange} /> Gaming Headset<br />
          <input type="checkbox" name="category" value="Gaming Phones" onChange={handleFilterChange} className="margin"/> Gaming Phones<br />

          <h3>Shop by Color</h3>
          <input type="checkbox" name="color" value="black" onChange={handleFilterChange} /> Black<br />
          <input type="checkbox" name="color" value="white" onChange={handleFilterChange} className="margin"/> White<br />

          <h3>Shop by Price</h3>
          <input type="checkbox" name="price" value="40-600" onChange={handleFilterChange} /> $40.00 - $600.00<br />
          <input type="checkbox" name="price" value="600-900" onChange={handleFilterChange} className="margin"/> $600.00 - $900.00<br />
        </div>
        <div className="products-list">
       
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}><img src={product.image} alt={product.name} className="sidebar--image"/></Link>
              <h6 className="product--header">{product.name}</h6>
              <p>{product.category}</p>
              <p>{product.color}</p>
              <p>${product.price}</p>
            </div>
          ))}
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
