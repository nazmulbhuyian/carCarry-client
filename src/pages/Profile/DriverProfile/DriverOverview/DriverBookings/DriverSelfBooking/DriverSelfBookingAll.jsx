import { useContext } from "react";
import { AuthContext } from "../../../../../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../../Shared/Spinner/Spinner";
import { Link } from "react-router-dom";


const DriverSelfBookingAll = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, data, refetch } = useQuery({
        queryKey: [`/bookings/${user}`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings/${user}`)
            const data = await res.json()
            return data
        }
    });
    const datas = data?.data;
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className="my-10 lg:w-3/5 mx-auto">
            <p className="text-center text-red-500 font-semibold mb-6">Your booking those Rental</p>
            <div className="lg:overflow-x-auto">
                <table className="table table-zebra lg:w-[800px]">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Prize</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas ?
                                datas?.map((item, i) => <tr key={item._id}>
                                    <th>{i + 1}</th>
                                    <th>{item.date}</th>
                                    <th>{item.time}</th>
                                    <th>{item.prize} $</th>
                                    <th className="underline"><Link to={`/rentDetails/${item.o_id}`}>Details</Link></th>
                                </tr>)
                                :
                                <p className="text-center p-8 text-red-500">You have no booking list.</p>
                        }
                    </tbody>
                </table>
            </div>
                    <div className="flex justify-center mt-10 mb-5">
                        <Link to='/driverProfile'>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Back
                            </button>
                        </Link>
                    </div>
        </div >
    );
};

export default DriverSelfBookingAll;