import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../Shared/Spinner/Spinner";


const UserBalance = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, data = [], refetch } = useQuery({
        queryKey: [`/usersReg/${user}`],
        queryFn: async () => {
            const res = await fetch(`https://car-carry-server.vercel.app/usersReg/${user}`)
            const data = await res.json()
            return data
        }
    });
    const datas = data?.data;
    if (isLoading) {
        return <Spinner />
    }
    return (
        <div className="p-12 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gray-800 text-center">Balance</h1>
            <h1 className="text-3xl font-bold text-red-500 text-center mt-2">{datas?.balance} $</h1>
            <Link to='/payment'><button className="block btn btn-primary mt-3 w-40">Deposit</button></Link>
            <button className="block btn btn-primary mt-3 w-40">Withdraw</button>
        </div>
    );
};

export default UserBalance;