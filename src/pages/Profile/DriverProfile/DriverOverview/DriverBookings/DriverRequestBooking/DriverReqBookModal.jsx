import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../../Shared/Spinner/Spinner";
import { Link } from "react-router-dom";

const DriverReqBookModal = ({ queryId, setIsOpen }) => {
    const { isLoading, data = [], refetch } = useQuery({
        queryKey: [`/driverRequestBookings/${queryId}`],
        queryFn: async () => {
            const res = await fetch(`https://car-carry-server.vercel.app/driverReqBookModal/${queryId}`)
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
            <div className="modal" id="booking_modal2">
                <div className="modal-box">
                    <h2 className="text-xl font-semibold mb-2 text-center">Please check User details</h2>
                    <input type="text" className="input input-bordered w-full bg-gray-300" value={datas?.c_email} readOnly />
                    <input type="text" className="input input-bordered w-full bg-gray-300 mt-2" value={datas?.c_name} readOnly />
                    <input type="text" className="input input-bordered w-full bg-gray-300 mt-2" value={datas?.c_phone} readOnly />

                    <div className="mt-2 flex justify-between items-center">
                        <Link to={`/rentDetails/${datas.o_id}`}><button className="btn bg-sky-400 hover:bg-sky-600 border-0 w-40">See Your Profile</button></Link>
                        <a onClick={() => setIsOpen(false)} className="btn bg-red-400 hover:bg-red-600 border-0">Close</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverReqBookModal;