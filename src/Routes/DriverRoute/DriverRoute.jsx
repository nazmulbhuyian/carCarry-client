import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import UseDriver from "../../Hooks/UseDriver";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


const DriverRoute = ({ children }) => {
    const { user, loading, userRole } = useContext(AuthContext);
    // const [isDriver, setIsDriver] = useState(false);
    // const [isDriverLoading, setIsDriverLoading] = useState(true);

    // useEffect(() => {
    //     if (user) {
    //         fetch(`https://car-carry-server.vercel.app/usersLog/driver/${user}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 setIsDriver(data?.isDriver);
    //                 setIsDriverLoading(false)
    //             })
    //     }
    // }, [user])

    const location = useLocation()

    if (loading) {
        return <progress className="progress w-56 flex mx-auto lg:mt-20 lg:mb-20"></progress>
    }
    // if(loading || isDriverLoading){
    //     return <progress className="progress w-56 flex mx-auto lg:mt-20 lg:mb-20"></progress>
    // }

    if (user && userRole == 'driver') {
        return children
    }
    // if(user && isDriver==true){
    //     return children
    // }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default DriverRoute;