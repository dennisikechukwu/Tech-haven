import React from "react";
import datas from "./seconddata";
import { Link } from "react-router-dom";

export default function Best() {
    return(
        <div className="main">
            <h2> Our best sellers</h2>
        <div className="best">
            
            {datas.map(products => {
                return(
                    <div className="products">
                        <Link to="/payment">
                        <img src={products.image} alt=""/></Link>
                        
                        <h4 className="four">{products.name}</h4>
                        <p>{products.description}</p>
                        <p>{products.price}</p>
                    </div>
                    
                )
            })}

        </div>
        </div>
        
    )
}