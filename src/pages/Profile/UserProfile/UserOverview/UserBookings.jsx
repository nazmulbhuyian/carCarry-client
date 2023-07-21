import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import Spinner from "../../../../Shared/Spinner/Spinner";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

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

    const handleDelete = (item) => {
        fetch(`http://localhost:5000/bookings`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status == "Successfully Deleted") {
                    toast.success('Booking Deleted successfully');
                    refetch();
                } else {
                    toast.error('Something Wrong')
                }
            })
    }

    const handleOk = (item) => {
        fetch(`http://localhost:5000/bookings`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status == "Successfully Updated") {
                    toast.success('Booking Updated successfully');
                    refetch();
                } else {
                    toast.error('Something Wrong')
                }
            })
    }

    return (
        <div>
            <p className="text-center mt-4 text-xl font-semibold text-red-500">Your booking list is here</p>
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
                                            <th>Booking Ok</th>
                                        </tr>
                                    </thead>
                                    :
                                    ''
                            }
                            <tbody>
                                {
                                    datas ?
                                        datas?.slice(0, 5)?.map((item, i) => {
                                            return (
                                                <tr key={item._id}>
                                                    <th>{i + 1}</th>
                                                    <th>{item.date}</th>
                                                    <th>{item.time}</th>
                                                    <th>{item.prize} $</th>
                                                    <th className="underline"><Link to={`/rentDetails/${item.o_id}`}>Details</Link></th>
                                                    {
                                                        item.status == 'OK' ?
                                                            <th><p className="text-xl font-semibold">Ride Done</p></th>
                                                            :
                                                            <th>
                                                                <button onClick={() => handleDelete(item)} className="btn bg-red-500 hover:bg-red-400 rounded-lg border-0">Cancel</button>
                                                            </th>
                                                    }
                                                    {
                                                        item.status == 'OK' ?
                                                        <th><p className="text-xl font-semibold">Ride Done</p></th>
                                                        :
                                                            <th>
                                                                <button onClick={() => handleOk(item)} className="btn bg-sky-500 hover:bg-sky-400 rounded-lg border-0">Ride Ok ?</button>
                                                            </th>
                                                    }
                                                </tr>
                                            )
                                        }
                                        )
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
                datas?.length > 5 ?
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