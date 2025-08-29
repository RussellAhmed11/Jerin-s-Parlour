
import logo from '../../../../public/logo.png'
import useAuth from '../../../Hooks/useAuth';
const Navbar2 = () => {
    const { user } = useAuth()
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <div className="ml-5 w-40 rounded-">

                    <img
                        alt="Tailwind CSS Navbar component"
                        src={logo} />
                </div>
            </div>
            <div className="flex gap-2 justify-center items-center">
                <h4 className=''>{user?.displayName}</h4>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user.photoURL} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar2;