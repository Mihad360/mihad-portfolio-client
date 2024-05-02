import { Outlet } from "react-router-dom";
import Navbar from "../homeroutes/Navbar";

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

                </div>
            </div>
        </div>
    );
};

export default Layout;