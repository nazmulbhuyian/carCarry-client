import { useContext } from "react";
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider'
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../Shared/Spinner/Spinner";
import { toast } from "react-hot-toast";


const UserSelfBookings = () => {
    const { user } = useContext(AuthContext)
    const { isLoading, data = [], refetch } = useQuery({
        queryKey: [`/pubRidesBooking/${user}`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/pubRidesBooking/${user}`)
            const data = await res.json()
            return data
        }
    });
    const datas = data?.data;
    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleDelete = (item) => {
        fetch(`http://localhost:5000/pubRidesBooking`, {
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
        fetch(`http://localhost:5000/pubRidesBooking`, {
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
                            <th>Prize</th>
                            <th>Cancel</th>
                            <th>Booking Ok</th>
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
                                <th>{item.prize} $</th>
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
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default UserSelfBookings;