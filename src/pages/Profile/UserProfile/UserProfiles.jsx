import { useState } from "react";
import UserProUpdate from "./UserProUpdate/UserProUpdate";
import UserOverview from "./UserOverview/UserOverview";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Shared/Spinner/Spinner";
import UserBalance from "./UserBalance/UserBalance";


const UserProfiles = () => {

    const [value, setValue] = useState(1);

    const {user} = useContext(AuthContext)

    const { isLoading, data, refetch } = useQuery({
        queryKey: [`/carsDetails?email=${user}`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/usersReg/${user}`)
            const data = await res.json()
            return data
        }
    });
    const datas = data?.data;
    if(isLoading){
        return <Spinner></Spinner>
    }

    return (
        <div className="border border-black w-2/5 mx-auto mt-10">
            <div className="flex items-center justify-center">
                <button onClick={() => setValue(1)} className="btn bg-white hover:bg-white text-black border-0  ml-3 text-xl font-semibold">Booking List</button>
                <button onClick={() => setValue(2)} className="btn bg-white hover:bg-white text-black border-0  mr-3 text-xl font-semibold">Profile Update</button>
                <button onClick={() => setValue(3)} className="btn bg-white hover:bg-white text-black border-0  mr-3 text-xl font-semibold">Profile Balance</button>
            </div>
            <hr className="mx-8" />
            {
                value == 2 ?
                    <UserProUpdate data={datas} refetch={refetch}></UserProUpdate>
                    :
                    <div>
                        {
                            value == 1 ?
                            <UserOverview></UserOverview>
                            :
                            <UserBalance data={datas}></UserBalance>
                        }
                    </div>
            }
        </div>
    );
};

export default UserProfiles;