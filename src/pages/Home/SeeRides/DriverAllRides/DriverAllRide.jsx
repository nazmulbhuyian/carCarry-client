import { useState } from "react";
import DriverAllRideModal from "./DriverAllRideModal";

const DriverAllRide = ({ data, refetch }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
        <a href="#booking_modal3" onClick={() => setIsOpen(true)}>
            <button className="border border-gray-300 bg-sky-50 mb-4 rounded-lg lg:p-4 flex items-center justify-between lg:px-12 hover:shadow-xl hover:scale-105">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={data?.img} />
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between ml-4">
                        <p className="text-gray-800">{data?.date}</p>
                        <h3 className="text-xl text-red-500 font-bold">{data?.prize} $</h3>
                    </div>
                    <p className="ml-4"><span className="lg:text-xl font-semibold">{data?.name}</span>. is Driving from <span className="underline text-red-500">{data?.from}</span> to <span className="underline text-red-500">{data?.to}</span></p>
                </div>
            </button>
        </a>
        {
                isOpen &&
                <DriverAllRideModal data={data} setIsOpen={setIsOpen} refetch={refetch}></DriverAllRideModal>
            }
        </div>
    );
};

export default DriverAllRide;