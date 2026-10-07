import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "./context/Cartcontext";
import OrderSuccess from "./Ordersuccess";

export default function Payment()
{
    const navigate=useNavigate()
    const {state,dispatch}=useContext(CartContext);
    const total=(state.cart.reduce ((acc,item)=>acc+item.price,0)).toFixed(2);


    const handlePayment=()=>{
        dispatch ({type: "CLEAR_CART"})
        alert("Payment successfull");
        navigate("/success")
    };

    return(
        <div className="payment-container">
            <div className="payment-card">
                <h2>Payment</h2>
                <p>TotalAmount :${total}</p>
                <input placeholder="card-numbbber" />
                <input placeholder="card-holder-name" />
                <input placeholder="cvv" />

                <button onClick={handlePayment}>pay</button>


            </div>
        </div>
    )
}
