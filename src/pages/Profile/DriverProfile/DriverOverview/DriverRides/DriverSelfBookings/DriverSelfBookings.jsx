import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../../Shared/Spinner/Spinner";
import { useContext } from "react";
import { AuthContext } from "../../../../../../context/AuthProvider/AuthProvider";


const DriverSelfBookings = () => {
    const {user} = useContext(AuthContext)
    const { isLoading, data=[], refetch } = useQuery({
        queryKey: [`/pubRidesBooking/${user}`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/pubRidesBooking/${user}`)
            const data = await res.json()
            return data
        }
    });
    const datas = data?.data;
    console.log(datas);
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className="my-10">

            <div className="lg:overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>From</th>
                            <th>To</th>
                            <th>E-Mail</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas?.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <th>{item.date}</th>
                                <th>{item.from}</th>
                                <th>{item.to}</th>
                                <th>{item.pub_email}</th>
                                <th>{item.pub_phone}</th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default DriverSelfBookings;