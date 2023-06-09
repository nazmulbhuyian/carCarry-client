import { useEffect, useState } from "react";


const UseDriver = ({email}) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/usersLog/driver/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                    setIsSellerLoading(false)
                })
        }
    }, [email])

    return [isSeller, isSellerLoading]
};

export default UseDriver;