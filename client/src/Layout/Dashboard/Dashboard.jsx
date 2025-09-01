import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import UseAdmin from "../../Hooks/UseAdmin";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const Dashboard = () => {
    const [isAdmin] = UseAdmin();
    return (

        <div>
            <Navbar />
            <div className="md:flex w-11/12 mx-auto">
                <div className="md:w-64 md:min-h-screen bg-white-400 shadow-sm mt-10 pt-5">
                    <ul className="menu p-4 mt-5">

                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/adminhome">
                                    <FaList />
                                   Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/orderlist">
                                    <FaList />
                                    Order List</NavLink></li>
                                <li><NavLink to="/dashboard/addservice">
                                    <FaUtensils></FaUtensils>
                                    Add services</NavLink></li>

                                <li><NavLink to="/dashboard/alluser">
                                    <FaList></FaList>
                                    Make Admin</NavLink></li>

                                <li><NavLink to="/dashboard/manageservice">
                                    <FaBook></FaBook>
                                    Manage Services</NavLink></li>
                                <li><NavLink to="/dashboard/paymentHistory">
                                    <FaList></FaList>
                                    Payment Histroy</NavLink></li>
                            </> : <>
                               
                                <li><NavLink to="/dashboard/userhome">
                                    <FaList></FaList>
                                     User Home</NavLink></li>
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
                    </ul>
                </div>
                <div className="flex-1 p-4 w-full">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;