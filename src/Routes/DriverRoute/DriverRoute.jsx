import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import UseDriver from "../../Hooks/UseDriver";
import { Navigate, useLocation } from "react-router-dom";


const DriverRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isDriver, isDriverLoading] = UseDriver(user)

    const location = useLocation()

    if(loading || isDriverLoading){
        return <progress className="progress w-56 lg:ml-96 lg:mt-96"></progress>
    }

    if(user && isDriver){
        return children
    }


    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default DriverRoute;