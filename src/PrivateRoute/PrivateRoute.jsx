import { Navigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    console.log(loading);
    if (loading) {
        return <h1 className="text-7xl"> Loading </h1>
    }

    if (!user?.email) {
        return <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;