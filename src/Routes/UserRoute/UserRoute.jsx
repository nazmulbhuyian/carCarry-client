import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";


const UserRoute = ({children}) => {

    const {user, loading, userRole} = useContext(AuthContext);

    // const [isUser, setIsUser] = useState(false);
    // const [isUserLoading, setIsUserLoading] = useState(true);

    // useEffect(() => {
    //     if (user) {
    //         fetch(`http://localhost:5000/usersLog/user/${user}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 setIsUser(data?.isUser);
    //                 setIsUserLoading(false)
    //             })
    //     }
    // }, [user])

    const location = useLocation()

    if(loading){
        return <progress className="progress w-56 flex mx-auto lg:mt-20 lg:mb-20"></progress>
    }
    // if(loading || isUserLoading){
    //     return <progress className="progress w-56 flex mx-auto lg:mt-20 lg:mb-20"></progress>
    // }

    if(user && userRole=='lift'){
        return children
    }
    // if(user && isUser==true){
    //     return children
    // }


    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default UserRoute;