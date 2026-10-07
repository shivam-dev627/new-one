// import { Link } from "react-router-dom";
// import {useContext} from 'react'
// import { Themecontext } from "../pages/context/Themecontext";
// import { CartContext } from "../pages/context/Cartcontext";



// export default function Navbar() {
//     const{state:themestate,dispatch}=useContext(Themecontext);
//     const{state}=useContext(CartContext);
//     return(
//         <nav style={{
//             padding: "10px",
//             backgroundColor: "black",
//             color: "white",
//         }}>
        
//             <Link to="/">Home</Link> <br></br>
//             <Link to="/login">Login</Link> <br></br>
//             <Link to="/register">Register</Link> <br></br>
//             <Link to="/product">Product</Link> <br></br>
//             <Link to="/cart">Cart({state.cart.length})</Link>

//             <button
//             className="theme-btn"
//             onClick={()=>
            
//                 dispatch({type:"Toggle_THEME"})}
            

//             >
//                 {themestate.theme ==="light" ? "darkmode":"lightmode"}
//             </button>

//         </nav>

//     );
// }

import { Link } from "react-router-dom";
import { useContext } from "react";
import { Themecontext } from "../pages/context/Themecontext";
import { CartContext } from "../pages/context/Cartcontext";
import "./Navbar.css";

export default function Navbar() {

    const { state: themestate, dispatch } = useContext(Themecontext);
    const { state } = useContext(CartContext);

    return (
        <nav className="my-navbar">

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/product">Product</Link>
                <Link to="/cart">
                    Cart ({state.cart.length})
                </Link>

                <button
                    className="theme-btn"
                    onClick={() =>
                        dispatch({ type: "TOGGLE_THEME" })
                    }
                >
                    {themestate.theme === "light"
                        ? "Dark Mode"
                        : "Light Mode"}
                </button>
            </div>

        </nav>
    );
}