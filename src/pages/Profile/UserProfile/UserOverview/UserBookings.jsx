import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import Spinner from "../../../../Shared/Spinner/Spinner";
import { Link } from "react-router-dom";


const UserBookings = () => {

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
        <div>
            <p className="text-center mt-4">Your booking list is here</p>
            <div className="lg:overflow-x-auto mt-8 mb-8">
                {
                    datas ?
                        <table className="table table-zebra lg:w-[800px] mx-auto">
                            {
                                datas ?
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Prize</th>
                                            <th>Details</th>
                                            <th>Cancel</th>
                                        </tr>
                                    </thead>
                                    :
                                    ''
                            }
                            <tbody>
                                {
                                    datas ?
                                        datas?.slice(0, 5)?.map((item, i) => <tr key={item._id}>
                                            <th>{i + 1}</th>
                                            <th>{item.date}</th>
                                            <th>{item.time}</th>
                                            <th>{item.prize} $</th>
                                            <th className="underline"><Link to={`/rentDetails/${item.o_id}`}>Details</Link></th>
                                            <th><button className="btn">Cancel</button></th>
                                        </tr>)
                                        :
                                        <p className="text-center p-8 text-red-500">You have no booking list.</p>
                                }
                            </tbody>
                        </table>
                        :
                        ''
                }
            </div>
            {
                datas.length > 5 ?
                    <div className="flex justify-center mt-10 mb-5">
                        <Link to='/allUserSelfBooking'>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Load More
                            </button>
                        </Link>
                    </div>
                    :
                    ''
            }
        </div >
    );
};

export default UserBookings;