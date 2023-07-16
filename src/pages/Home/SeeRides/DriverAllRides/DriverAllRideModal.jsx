import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider'
import { toast } from "react-hot-toast";
import { format, parseISO } from "date-fns";


const DriverAllRideModal = ({ data, setIsOpen, refetch, userBalance }) => {
    const { user, userName, userPhone } = useContext(AuthContext)


    const handleBooking = (data) => {
        if (user == data?.email) {
            toast.error('You publish this ride. So you dont booking this.');
            setIsOpen(false);
        } else {
            const info = {
                pub_email: data?.email,
                pub_phone: data?.phone,
                date: data?.date,
                from: data?.from,
                to: data?.to,
                b_email: user,
                b_name: userName,
                b_phone: userPhone,
                userBalance,
                prize: data?.prize
            }
            fetch(`http://localhost:5000/pubRidesBooking`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(info)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.status == "Successfully Added") {
                        toast.success('Rides Booking successfully');
                        refetch();
                        setIsOpen(false);
                    } else {
                        toast.error('Something Wrong')
                    }
                })
        }
    }

    return (
        <div>
            <div className="modal" id="booking_modal3">
                <div className="modal-box">
                    <h2 className="text-xl font-semibold mb-2 text-center">Please check User details</h2>
                    <input type="text" className="input input-bordered w-full bg-gray-300" value={data?.email} readOnly />
                    <input type="text" className="input input-bordered w-full bg-gray-300 mt-2" value={data?.date} readOnly />
                    <input type="text" className="input input-bordered w-full bg-gray-300 mt-2" value={data?.phone} readOnly />

                    <div className="mt-2 flex justify-between items-center">
                        <button onClick={() => handleBooking(data)} className="btn bg-sky-400 hover:bg-sky-600 border-0 w-40">Booking</button>
                        <Link to={`/rentDetails/${data?.pub_detail}`}><button className="btn bg-sky-400 hover:bg-sky-600 border-0 w-40">Details Driver</button></Link>
                        <a onClick={() => setIsOpen(false)} className="btn bg-red-400 hover:bg-red-600 border-0">Close</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverAllRideModal;