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
import { useState } from "react";
import Earnings from "./Earnings/Earnings";
import DriverProUpdate from "./DriverProUpdate/DriverProUpdate";
import DriverPoints from "./DriverPoints/DriverPoints";


const DriverProfile = () => {

    const [value, setValue] = useState(1);

    const navigation = useNavigation();

    const { user } = useContext(AuthContext);

    const { isLoading, data: cars = [], refetch } = useQuery({
        queryKey: [`/carsDetails?email=${user}`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carsDetails?email=${user}`)
            const data = await res.json()
            return data
        }
    });
    const datas = cars?.data?.[0];

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

            <div className="lg:flex w-11/12 mx-auto mt-16">
                <div className="lg:w-4/12">
                    <DriverDetails datas={datas}></DriverDetails>
                </div>
                <div className="lg:w-5/12">
                    <DriverOverview id={datas?._id} datas={datas} refetch={refetch}></DriverOverview>
                </div>
                <div className="lg:w-3/12">
                    <DriverBalance datas={datas}></DriverBalance>
                </div>
            </div>

            <div className="w-9/12 mx-auto mt-10 lg:flex items-start">

                <ul className="mt-16">
                    <button className="flex items-center mb-3 hover:text-red-500" onClick={() => setValue(1)}>
                        <a className="tooltip mr-3" data-tip="Details">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </a>
                        Earnings</button>
                    <button onClick={() => setValue(2)} className="flex items-center mb-3 hover:text-red-500">
                        <a className="tooltip mr-3" data-tip="Details">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </a>
                        Profile Update</button>
                    <button onClick={() => setValue(3)} className="flex items-center hover:text-red-500">
                        <a className="tooltip mr-3" data-tip="Details">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </a>
                        Points</button>
                </ul>

                <div className="lg:ml-40">
                    {
                        value == 1 ?
                            <Earnings></Earnings>
                            :
                            <div>
                                {
                                    value == 2 ?
                                        <DriverProUpdate data={datas} refetch={refetch}></DriverProUpdate>
                                        :
                                        <DriverPoints points={datas?.points}></DriverPoints>
                                }
                            </div>
                    }
                </div>

            </div>

        </div>
    );
};

export default DriverProfile;