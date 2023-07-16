import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../Shared/Spinner/Spinner";
import DriverAllRide from "./DriverAllRide";


const DriverAllRides = () => {

    const { isLoading, data = [], refetch } = useQuery({
        queryKey: [`/carsDetails/${'driver'}`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/DriPubRides/${'driver'}`)
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
                datas?.slice(0, 5).map(data=> <DriverAllRide key={data?._id} item={data} refetch={refetch}></DriverAllRide>)
            }
        </div>
    );
};

export default DriverAllRides;