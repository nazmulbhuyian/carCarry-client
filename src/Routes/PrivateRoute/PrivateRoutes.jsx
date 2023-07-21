import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation()


    if(loading){
        return <progress className="progress w-56 flex mx-auto lg:mt-20 lg:mb-20"></progress>
    }

    if(user){
        return children
    }else return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;