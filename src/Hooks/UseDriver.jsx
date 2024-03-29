import { useEffect, useState } from "react";


const UseDriver = ({ email }) => {
    const [isDriver, setIsDriver] = useState(false);
    const [isDriverLoading, setIsDriverLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://car-carry-server.vercel.app/usersLog/driver/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsDriver(data?.isDriver);
                    setIsDriverLoading(false)
                })
        }
    }, [email])

    return [isDriver, isDriverLoading]
};

export default UseDriver;