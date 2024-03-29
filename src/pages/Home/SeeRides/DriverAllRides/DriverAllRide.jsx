import { useState } from "react";
import DriverAllRideModal from "./DriverAllRideModal";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../Shared/Spinner/Spinner";
import { toast } from "react-hot-toast";

const DriverAllRide = ({ item, refetch }) => {

    const [isOpen, setIsOpen] = useState(false);

    const { user } = useContext(AuthContext);

    const { isLoading, data = [] } = useQuery({
        queryKey: [`/usersReg/${user}`],
        queryFn: async () => {
            const res = await fetch(`https://car-carry-server.vercel.app/usersReg/${user}`)
            const data = await res.json()
            return data
        }
    });
    const datas = data?.data?.balance;
    if (isLoading) {
        return <Spinner />
    }

    const handleOpen = () => {
        if (user == item?.email) {
            toast.error('You cant booking this.');
        } else {
            setIsOpen(true);
        }
    }


    return (
        <div>
            <a href="#booking_modal3" onClick={() => handleOpen()}>
                <button className="border border-gray-300 bg-sky-50 mb-4 rounded-lg lg:p-4 flex items-center justify-between lg:px-12 hover:shadow-xl hover:scale-105">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={item?.img} />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between ml-4">
                            <p className="text-gray-800">{item?.date}</p>
                            <h3 className="text-xl text-red-500 font-bold">{item?.prize} $</h3>
                        </div>
                        <p className="ml-4"><span className="lg:text-xl font-semibold">{item?.name}</span>. is Driving from <span className="underline text-red-500">{item?.from}</span> to <span className="underline text-red-500">{item?.to}</span></p>
                    </div>
                </button>
            </a>
            {
                isOpen &&
                <DriverAllRideModal data={item} setIsOpen={setIsOpen} refetch={refetch} userBalance={datas} ></DriverAllRideModal>
            }
        </div>
    );
};

export default DriverAllRide;