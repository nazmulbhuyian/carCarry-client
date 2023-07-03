import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useNavigation } from "react-router-dom";
import Spinner from "../../../Shared/Spinner/Spinner";
import { FaFacebookMessenger, FaPhoneAlt } from "react-icons/fa";
import img from '../../../assets/detail_road/detail_header_road.jpg';
import DriverDetails from "./DriverDetails/DriverDetails";
import DriverOverview from "./DriverOverview/DriverOverview";
import DriverBalance from "./DriverBalance/DriverBalance";

const DriverProfile = () => {

    const navigation = useNavigation();

    const { user } = useContext(AuthContext);

    const { isLoading, data: cars = [] } = useQuery({
        queryKey: [`/carsDetails?email=${user}`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carsDetails?email=${user}`)
            const data = await res.json()
            return data
        }
    })
    const datas = cars?.data?.[0];
    console.log(datas);

    if (navigation.state === "loading") {
        return <Spinner />
    }
    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="mb-12">

            <div className="hero relative">
                <img src={img} alt="" className="w-full h-40" />
                <div className="hero-overlay bg-opacity-60"></div>
            </div>
            <div className="absolute top-40 w-4/5 lg:left-36 md:left-20 left-10 flex items-center justify-between text-white">
                <div>
                    <h3 className="md:text-2xl font-bold">{datas?.u_name}</h3>
                    <p className="mt-2 text-gray-200">Wellcome Your Rental</p>
                </div>
                <div>
                    <button className="btn btn-sm bg-red-400 hover:bg-red-600 border-0 lg:px-10 md:px-10 px-6"><FaFacebookMessenger className="lg:mr-3 md:mr-2 mr-1"></FaFacebookMessenger> Share</button>
                    <p className="flex items-center justify-between mt-4"><FaPhoneAlt className="lg:mr-4 md:mr-4"></FaPhoneAlt> call( {datas?.u_phone} )</p>
                </div>
            </div>

            <div className="flex w-10/12 mx-auto mt-16">
                <div className="w-4/12">
                    <DriverDetails datas={datas}></DriverDetails>
                </div>
                <div className="w-5/12">
                    <DriverOverview></DriverOverview>
                </div>
                <div className="w-3/12">
                    <DriverBalance datas={datas}></DriverBalance>
                </div>
            </div>
        </div>
    );
};

export default DriverProfile;