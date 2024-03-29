import { useContext, useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from 'date-fns';
import TimePicker from 'react-time-picker';
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import { FcCalendar, FcAlarmClock, FcManager } from "react-icons/fc";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../Shared/Spinner/Spinner";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";


const RightSide = ({ detail, setBookingData, setIsOpen }) => {
    const { u_name, u_email, c_prize, u_img, u_phone, _id } = detail;
    const { user, userName, userPhone } = useContext(AuthContext);

    const [range, setRange] = useState(new Date());
    const [value, onChange] = useState('00:00');

    const { isLoading, data = [], refetch } = useQuery({
        queryKey: [`/usersReg/${user}`],
        queryFn: async () => {
            const res = await fetch(`https://car-carry-server.vercel.app/usersReg/${user}`)
            const data = await res.json()
            return data
        }
    });
    const datas = data?.data;
    if (isLoading) {
        return <Spinner />
    }

    let footer = <p className="mt-6 ml-8 lg:ml-0 text-red-600">Please pick the day.</p>;
    if (range) {
        footer = <p className="mt-6 ml-8 lg:ml-0 text-red-600">You select {format(range, 'PP')}</p>;
    }

    const date = format(range, 'PP');

    // const today = new Date();
    // if(range<today){
    //     console.log("not");
    // }else{
    //     console.log("ok");
    // }

    const handleBooking = () => {
        if (u_email == user) {
            toast.error("You dont booking this. Try another");
        } else {
            const info = {
                o_name: u_name,
                o_email: u_email,
                o_img: u_img,
                o_phone: u_phone,
                o_id: _id,
                date: date,
                time: value,
                c_name: userName,
                c_email: user,
                c_phone: userPhone,
                prize: c_prize,
                userBalance: datas?.balance
            }
            setBookingData(info);
            setIsOpen(true);
        }
    }

    return (
        <div className="mb-12">
            <div className="bg-sky-50 lg:p-8 md:p-4 p-0">
                <div className="lg:ml-16 flex mx-auto md:w-3/5">
                    <DayPicker
                        id="test"
                        mode="single"
                        selected={range}
                        footer={footer}
                        onSelect={setRange}
                    />
                </div>
                <div className="lg:flex md:flex items-center justify-center mx-auto mt-6 ml-8 lg:ml-0">
                    <h1 className="text-xl text-primary">Select First day time: </h1>
                    <TimePicker onChange={onChange} value={value} />
                </div>

                <h2 className="lg:text-2xl text-xl mt-6 ml-8 lg:ml-0 md:text-center lg:text-center"><span className="text-red-500 font-bold">${c_prize}</span> Price Per Day</h2>

                {
                    user ?
                        <a href="#booking_modal" className="btn hover:btn-primary bg-sky-500 border-0 lg:ml-40 md:ml-52 ml-8 mt-6"><button onClick={handleBooking} >Rent This Car Today</button></a>
                        :
                        <Link to='/login' className="btn hover:btn-primary bg-sky-500 border-0 lg:ml-40 md:ml-52 ml-8 mt-6 disabled:"><button onClick={handleBooking} >Please Login For Rent</button></Link>
                }

                {/* <button onClick={handleBooking} className="btn hover:btn-primary bg-sky-500 border-0 w-full mt-6">Rent This Car Today</button> */}

                <p className="text-center lg:mt-10 mt-6 mb-6">Have a great ride with our 100km / day. In case you need more you can always ask for extra. </p>

                <hr />

                <p className="text-center lg:mt-10 mt-6 mb-6">Rent this car and get 100 Car East points. Use your points for promos & discounts.</p>

            </div>

            <div className="flex items-center lg:justify-between md:justify-around justify-between">

                <div className="mt-12 ml-8">
                    <div className="avatar">
                        <div className="lg:w-40 md:w-28 w-24 rounded-full">
                            <img src={u_img} />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center">{u_name}</h3>
                    <h4 className="text-gray-400 text-center">Owner</h4>
                </div>

                <div>

                    <div className="flex justify-between">
                        <FcManager size={30}></FcManager>
                        <div className="lg:ml-5 md:ml-5 ml-2">
                            <h2 className="text-xl font-semibold">89%</h2>
                            <p className="text-gray-400">acceptance rate</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <FcAlarmClock size={30}></FcAlarmClock>
                        <div className="lg:ml-5 md:ml-5 ml-2">
                            <h2 className="text-xl font-semibold">60 Mins</h2>
                            <p className="text-gray-400">replies within 1hr</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <FcCalendar size={30}></FcCalendar>
                        <div className="lg:ml-5 md:ml-5 ml-2">
                            <h2 className="text-xl font-semibold">1 day ago</h2>
                            <p className="text-gray-400">updated calendar</p>
                        </div>
                    </div>

                </div>

            </div>

            <hr className="mt-12 lg:ml-4" />
            <ul className="steps steps-vertical lg:ml-12">
                <li className="step step-primary text-gray-400">Online on 4 Oct 2017 at 08:36</li>
                <li className="step step-primary text-gray-400">Account connected on Facebook</li>
                <li className="step step-primary text-gray-400">Phone number verified</li>
                <li className="step text-gray-400">Reject Trip</li>
            </ul>

            <p className="lg:mt-8 mt-6 text-gray-400 lg:ml-12">You will be able to see the phone number of the owner of the car, in the moment he accepts your request.</p>

            <div>
                <button className="btn bg-sky-500 hover:bg-red-500 border-0 mt-6  lg:ml-12 mx-auto flex md:mx-0">Send Message</button>
            </div>

        </div>
    );
};

export default RightSide;