import { useContext } from "react";
import { CartContext } from "./context/Cartcontext";
import {useNavigate } from "react-router-dom";

export default function cart()
{
    const{state,dispatch}=useContext(CartContext);
    const navigate=useNavigate()
    return(
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {
                    state.cart.length===0?(<h2>cart is empty</h2>):
                    (
                    state.cart.map((item)=>
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title}/>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <button onClick={()=>dispatch({type:"REMOVE_FROM_CART",
                            payload:item.id})}>Remove
                            </button>

                        </div>
                    )
                )      
                }
                </div>
            
<button onClick={() =>navigate ("/payment")}> proceed to payment</button>
                
            
        </div>
    )
}