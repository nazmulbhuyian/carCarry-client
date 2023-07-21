import  { createContext, useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userPhone, setUserPhone] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = (localStorage.getItem('accessToken'));
        if(token){
            fetch(`http://localhost:5000/getMe`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.status=="Failled"){
                    setUser(null);
                    setUserName(null);
                    setLoading(false);
                }else{
                    setUser(data.email);
                    setUserName(data.userName);
                    setUserPhone(data.userPhone);
                    setUserBalance(data.userBalance);
                    setUserRole(data.userRole);
                    setLoading(false);
                }
            })
        }else{
            setUser(null);
            setLoading(false);
        }
    }, [])
    console.log(user, userName, userPhone, userBalance, userRole);

    // if(loading){
    //     return <Spinner></Spinner>
    // }

    const info = {
        loading,
        user,
        userName,
        userPhone,
        userBalance,
        userRole
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;