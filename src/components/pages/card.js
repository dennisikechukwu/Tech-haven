// src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, title, description, price }) => {
  return (
    <div className="card">
      <Link to="/payment">
      <img src={image} alt={title}  /></Link>
      
      <h3><Link to="/cart">{title}</Link></h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default Card;
