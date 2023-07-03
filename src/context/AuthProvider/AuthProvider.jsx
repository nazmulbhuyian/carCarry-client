import  { createContext, useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = (localStorage.getItem('accessToken'));
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
                    setLoading(false);
                }
            })
    }, [])
    console.log(user, userName);

    // if(loading){
    //     return <Spinner></Spinner>
    // }

    const info = {
        loading,
        user,
        userName
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;