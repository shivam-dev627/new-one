import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Themecontext } from "./pages/context/Themecontext";
import { useContext } from "react";
import "./App.css";

function App() {

    const { state } = useContext(Themecontext);

    return (
        <div className={`main-app ${state.theme}`}>
            <Navbar />
            <main className="page-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;