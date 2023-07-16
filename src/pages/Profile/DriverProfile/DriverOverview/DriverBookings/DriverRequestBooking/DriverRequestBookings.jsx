import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../../Shared/Spinner/Spinner";
import { useState } from "react";
import DriverReqBookModal from "./DriverReqBookModal";


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

    const handleModal = (qId) =>{
        setIsOpen(true);
        setId(qId);
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
                                    <th><button className="btn-sm bg-red-500 underline text-white rounded-lg hover:bg-red-400">Cancel</button></th>
                                </tr>)
                                :
                                <p className="text-center p-8 text-red-500">You have no booking list.</p>
                        }

                    </tbody>
                </table>
            </div>
            {
                isOpen&&isId &&
                <DriverReqBookModal queryId={isId} setIsOpen={setIsOpen}></DriverReqBookModal>
            }
        </div>
    );
};

export default DriverRequestBookings;