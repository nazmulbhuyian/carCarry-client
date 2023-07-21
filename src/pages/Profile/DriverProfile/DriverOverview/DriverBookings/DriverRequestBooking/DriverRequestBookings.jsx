import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../../Shared/Spinner/Spinner";
import { useState } from "react";
import DriverReqBookModal from "./DriverReqBookModal";
import { toast } from "react-hot-toast";


const DriverRequestBookings = ({ id }) => {

    const { isLoading, data, refetch } = useQuery({
        queryKey: [`/driverRequestBookings/${id}`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/driverRequestBookings/${id}`)
            const data = await res.json()
            return data
        }
    });

    const datas = data?.data;
    const [isOpen, setIsOpen] = useState(false);
    const [isId, setId] = useState(0);
    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleModal = (qId) => {
        setIsOpen(true);
        setId(qId);
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
            <p className="text-center text-red-500 font-semibold">Those User Bookings Your Car.</p>
            <div className="lg:overflow-x-auto mb-8">
                <table className="table table-zebra w-full">
                    {
                        datas ?
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>E-mail</th>
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
                                datas?.slice(0, 5)?.map((item, i) => <tr key={item._id}>
                                    <th>{i + 1}</th>
                                    <th>{item.date}</th>
                                    <th>{item.time}</th>
                                    <th>{item.c_email}</th>
                                    <th><a href="#booking_modal2"><button onClick={() => handleModal(item._id)} className="btn-sm bg-red-500 underline text-white rounded-lg hover:bg-red-400">Details</button></a></th>
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
                                :
                                <p className="text-center p-8 text-red-500">You have no booking list.</p>
                        }

                    </tbody>
                </table>
            </div>
            {
                isOpen && isId &&
                <DriverReqBookModal queryId={isId} setIsOpen={setIsOpen}></DriverReqBookModal>
            }
        </div>
    );
};

export default DriverRequestBookings;