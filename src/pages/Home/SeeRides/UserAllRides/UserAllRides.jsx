import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../Shared/Spinner/Spinner";
import UserAllRide from "./UserAllRide";


const UserAllRides = () => {

    const { isLoading, data = [], refetch } = useQuery({
        queryKey: [`/carsDetails/${'lift'}`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/DriPubRides/${'lift'}`)
            const data = await res.json()
            return data
        }
    });
    const datas = data?.data;
    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="mt-6">
            {
                datas?.slice(0, 5).map(data=> <UserAllRide key={data?._id} data={data} refetch={refetch}></UserAllRide>)
            }
        </div>
    );
};

export default UserAllRides;