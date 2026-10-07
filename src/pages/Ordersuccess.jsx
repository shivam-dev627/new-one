import { useNavigate } from "react-router-dom";

export default function OrderSuccess()
{
    const navigate=useNavigate()

    return(
        <div className="Success-container">
            <div className="success-card">
                <h1>Order placed Successfully</h1>
                <button onClick={()=>navigate("/")}>Go to home</button>

            </div>
        </div>
    )
}

