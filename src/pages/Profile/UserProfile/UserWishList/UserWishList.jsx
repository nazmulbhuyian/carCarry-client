import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../Shared/Spinner/Spinner";
import UserSingleWishList from "./UserSingleWishList";


const UserWishList = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, data } = useQuery({
        queryKey: [`/wishList/${user}`],
        queryFn: async () => {
            const res = await fetch(`https://car-carry-server.vercel.app/wishList/${user}`)
            const data = await res.json()
            return data
        }
    });
    const datas = data?.data;
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className="grid grid-cols-2 my-8 mx-2 gap-8">
                {
                    datas?.map(data => <UserSingleWishList key={data._id} data={data}></UserSingleWishList>)
                }
            </div>
        </div>
    );
};

export default UserWishList;