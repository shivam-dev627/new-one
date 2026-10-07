import React from "react"
import {useContext} from "react"
import { CartContext } from "../pages/context/Cartcontext";

function ProductCart({ id,title, price, image }) {

  const{dispatch}=useContext(CartContext);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
      <p className="product-price">${Number(price).toFixed(2)}</p>
      
      <button onClick={()=>dispatch ({
 type:"ADD_To_Cart" ,
payload:{id,title,price,image}
      })}> ADD to cart </button>
    </div>
  );
}

export default React.memo(ProductCart);