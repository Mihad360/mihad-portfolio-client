import { Outlet } from "react-router-dom";
import Navbar from "../homeroutes/Navbar";
import Footer from "../homeroutes/Footer";

const Layout = () => {
    return (
        <div className="">
            <div className=" font">
                <div className="max-w-7xl mx-auto">
                    <Navbar></Navbar>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
                <div className="max-w-7xl mx-auto">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Layout;