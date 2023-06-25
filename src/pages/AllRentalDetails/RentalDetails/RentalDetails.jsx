import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Spinner from "../../../Shared/Spinner/Spinner";
import LeftSide from "./RentalOverview/LeftSide";
import RightSide from "./RentalOverview/RightSide";
import { useQuery } from "@tanstack/react-query";
import img from '../../../assets/detail_road/detail_header_road.jpg'
import { FaFacebookMessenger, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import BookingModal from "./RentalOverview/BookingModal";

const RentalDetails = () => {
    // const data = useLoaderData();
    // const detail = data[0];

    const [bookingData, setBookingData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);


    const { id } = useParams();

    const { isLoading, refetch, data: data = [] } = useQuery({
        queryKey: [`/carsDetails/${id}`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carsDetails/${id}`)
            const data = await res.json()
            return data
        }
    })
    const detail = data[0];

    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Spinner />
    }
    if (isLoading) {
        return <Spinner />
    }


    return (
        <div>

            <div className="hero relative">
                <img src={img} alt="" className="w-full h-40" />
                <div className="hero-overlay bg-opacity-60"></div>
            </div>
            <div className="absolute top-40 w-4/5 lg:left-36 md:left-20 left-10 flex items-center justify-between text-white">
                <div>
                    <h3 className="md:text-2xl font-bold">{detail?.u_name}</h3>
                    <p className="mt-2 text-gray-200">Owner of this Rental</p>
                </div>
                <div>
                    <button className="btn btn-sm bg-red-400 hover:bg-red-600 border-0 lg:px-10 md:px-10 px-6"><FaFacebookMessenger className="lg:mr-3 md:mr-2 mr-1"></FaFacebookMessenger> Share</button>
                    <p className="flex items-center justify-between mt-4"><FaPhoneAlt className="lg:mr-4 md:mr-4"></FaPhoneAlt> call( {detail?.u_phone} )</p>
                </div>
            </div>
            <div className="lg:flex mx-auto w-9/12">
                <div className="lg:w-4/5">
                    <LeftSide detail={detail}></LeftSide>
                </div>
                <div>
                    <RightSide detail={detail} setBookingData={setBookingData} setIsOpen={setIsOpen}></RightSide>
                </div>
            </div>

            {
                isOpen&&
                <BookingModal bookingData={bookingData} setIsOpen={setIsOpen} refetch={refetch}></BookingModal>
            }

        </div>
    );
};

export default RentalDetails;