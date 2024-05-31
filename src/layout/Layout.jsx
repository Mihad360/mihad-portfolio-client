import { Outlet } from "react-router-dom";
import Navbar from "../homeroutes/Navbar";
import Footer from "../homeroutes/Footer";

const Layout = () => {
    return (
        <div className="">
            <div className=" font">
                <div>
                    <Navbar></Navbar>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Layout;