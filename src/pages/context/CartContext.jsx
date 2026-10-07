import { useReducer } from "react";
import { createContext } from "react";

export const CartContext=createContext();
const initialstate={
    cart:[],
};

function cartReducer(state,action)
{
    switch(action.type)
    {
        case "ADD_To_Cart":
            return{
                ...state,
                cart:[...state.cart,action.payload]
            }

            case "REMOVE_FROM_CART":
            return{
                ...state,
                cart:state.cart.filter((item)=>item.id!==action.payload),
            };

            case "CLEAR_CART":
                return{
                    ...state,
                    cart:[],
                }
            default:
                return state;
    }
}

export default function CartProvider({children})

{
    const[state,dispatch]=useReducer(cartReducer,initialstate);
    return(
        <CartContext.Provider value={{state,dispatch}}>{children}

        </CartContext.Provider>
    );
}