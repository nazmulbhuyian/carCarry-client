import { toast } from "react-hot-toast";

const BookingModal = ({ bookingData, setIsOpen, refetch }) => {
    const { c_email, c_name, o_id, o_img, o_name, o_email, o_phone, date, time, prize, c_phone, userBalance } = bookingData;

    const handleBooking = () => {
        if (userBalance < prize) {
            toast.error("Dont enough money. Please deposit");
        } else {
            const info = {
                o_email: o_email,
                o_name: o_name,
                o_img: o_img,
                o_phone: o_phone,
                o_id: o_id,
                date: date,
                time: time,
                c_name: c_name,
                c_email: c_email,
                c_phone: c_phone,
                prize: prize,
                userBalance: userBalance,
                status: 'NO'
            }
            fetch('https://car-carry-server.vercel.app/bookings', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(info)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === "Successfully Added") {
                        toast.success(`Booking Added Successfully`)
                        setIsOpen(false);
                        refetch()
                    }
                })
        }
    }

    return (
        <div>
            <div className="modal" id="booking_modal">
                <div className="modal-box">
                    <h2 className="text-xl font-semibold mb-5 text-center">Please check your confirmation details</h2>
                    <input type="text" className="input input-bordered w-full bg-gray-300" value={date} readOnly />
                    <input type="text" className="input input-bordered w-full bg-gray-300 mt-2" value={time} readOnly />
                    <input type="text" className="input input-bordered w-full bg-gray-300 mt-2" value={prize} readOnly />
                    <input type="text" className="input input-bordered w-full bg-gray-300 mt-2" value={c_email} readOnly />
                    <div className="mt-3 flex justify-between items-center">
                        <button onClick={handleBooking} className="btn bg-sky-400 hover:bg-sky-600 border-0 w-40">Submit</button>
                        <a onClick={() => setIsOpen(false)} className="btn bg-red-400 hover:bg-red-600 border-0">Close</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;