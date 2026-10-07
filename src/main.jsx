// import { createRoot } from 'react-dom/client'
// import './index.css'
// import ReactDOM from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import router from './router.jsx'
// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )



import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Router1 from "./pages/Router1";
import ThemeProvider from "./pages/context/Themecontext";
import CartProvider from "./pages/context/Cartcontext";
import ErrorBoundary from "./components/Errorboundary";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <ErrorBoundary>
            <CartProvider>
                <RouterProvider router={Router1} />
            </CartProvider>
        </ErrorBoundary>
    </ThemeProvider>
);



