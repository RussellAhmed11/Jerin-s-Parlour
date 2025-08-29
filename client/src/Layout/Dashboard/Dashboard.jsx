import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";

import Navbar2 from "../../Pages/Shared/Navbar/navbar2";

const Dashboard = () => {
    const isAdmin=true;
    return (
        <div>
        <Navbar2/>
        <div className="flex w-11/12 mx-auto">
            <div className="w-64 min-h-screen bg-white-400 shadow-sm ">
                <ul className="menu p-4">
                    
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/orderlist">
                                <FaList/>
                                Order List</NavLink></li>

                            <li><NavLink to="/dashboard/addservice">
                                <FaUtensils></FaUtensils>
                                Add services</NavLink></li>

                            <li><NavLink to="/dashboard/makeadmin">
                                <FaList></FaList>
                                Make Admin</NavLink></li>

                            <li><NavLink to="/dashboard/manageservices">
                                <FaBook></FaBook>
                                Manage Services</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashboard/book">
                                <FaBook></FaBook>
                                Book</NavLink></li>

                            <li><NavLink to="/dashboard/bookinglist">
                                <FaList></FaList>
                               Booking List</NavLink></li>
                            <li><NavLink to="/dashboard/review">
                                <FaAd></FaAd>
                                Add a Review</NavLink></li>
                            <li><NavLink to="/dashboard/paymentHistory">
                                <FaList></FaList>
                                Payment Histroy</NavLink></li>
                        </>
                    }

                    <div className='divider'></div>
                    {/* shared navlink */}
                    <li><NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink></li>
                    <li><NavLink to="/">
                        <FaEnvelope></FaEnvelope>
                        Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;