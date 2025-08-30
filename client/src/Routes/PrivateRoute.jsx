import { Navigate, replace, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) return <progress className="progress w-56"></progress>
    if (user) return children

    return <Navigate to="/login" state={{ from: location, replace: true }} ></Navigate>
};

export default PrivateRoute;