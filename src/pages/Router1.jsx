// import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Product from "./pages/Product";

// const router=createBrowserRouter([
//     {
//         path: "/",
//         element:<App />,
//         children:[
//             {
//                 index:true,
//                 element:<Home />
//             },
//             {
//                 path: "/cart",
//                 element:<Cart />
//             },
//             {
//                 path: "/login",
//                 element:<Login />
//             },
//             {
//                 path: "/register",
//                 element:<Register />
//             },
//             {
//                 path: "/product",
//                 element:<Product />
//             },
//         ],
//     },
// ]);
// export default router;




import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
import Product from "./Product";
import Payment from "./Payment";
import OrderSuccess from "./Ordersuccess";

const Router1 = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "product",
                element: <Product />
            },

              {
                path: "payment",
                element: <Payment />
            },


               {
                path: "success",
                element: <OrderSuccess/>
            },
        ],
    },
]);

export default Router1;