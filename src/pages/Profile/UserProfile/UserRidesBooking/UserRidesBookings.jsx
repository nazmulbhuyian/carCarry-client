import { useState } from "react";
import UserSelfBookings from "./UserSelfBookings/UserSelfBookings";
import UserRequestedBookings from "./UserRequestBookings/UserRequestedBookings";


const UserRidesBookings = () => {

    const [value, setValue] = useState(1);

    return (
        <div className="">
            <ul className="mt-6 flex items-center justify-center">
                <button className="flex items-center hover:text-white mb-3 btn btn-sm mr-4 bg-red-500 border-none hover:bg-red-700" onClick={() => setValue(1)}>
                    <a className="tooltip mr-3" data-tip="Details">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </a>
                    Self Booking</button>
                <button onClick={() => setValue(2)} className="flex items-center hover:text-white mb-3 btn btn-sm bg-red-500 border-none hover:bg-red-700">
                    <a className="tooltip mr-3" data-tip="Details">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </a>
                    Request Booking</button>
            </ul>

            <div className="mt-4">
                {
                    value == 1 ?
                        <UserSelfBookings></UserSelfBookings>
                        :
                        <UserRequestedBookings></UserRequestedBookings>
                }
            </div>
        </div>
    );
};

export default UserRidesBookings;