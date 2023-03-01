import React from 'react'
import "./Product.css";
function Proudct  (props) {
 
    return (
      <div  className="card">
            <img src={props.product.image} alt=''/>
            <h1>{props.product.title}</h1>
            <p>{props.product.description}</p>
            <p>price:{props.product.price}</p>
            </div>
       
    )
  }
  
  export default Proudct;