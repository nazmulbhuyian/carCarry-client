import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import UseAdmin from "../../Hooks/UseAdmin";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin(user)
    console.log(isAdmin);

    const location = useLocation()

    if(loading || isAdminLoading){
        return <progress className="progress w-56 lg:ml-96 lg:mt-96"></progress>
    }

    if(user && isAdmin){
        return children
    }


    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default AdminRoute;