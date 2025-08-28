import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.png'
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {
    const { user, logOutUser } = useAuth()
    const links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Our Profile</Link></li>
        <li><Link to="/">Our Team</Link></li>
        <li><Link to="/">Contac Us</Link></li>
    </>
    return (
        <div className="navbar fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="ml-5 w-40 rounded-">

                    <img
                        alt="Tailwind CSS Navbar component"
                        src={logo} />

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px- text-bold">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button onClick={() => logOutUser()} className="btn btn-md bg-secondary">LogOut</button>
                    </> : <>
                        <Link to='/login' className="btn btn-md bg-secondary">LogIn</Link>
                    </>
                }
                {
                    user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user?.photoURL} />
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;