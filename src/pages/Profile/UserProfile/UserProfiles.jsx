import { useState } from "react";
import UserProUpdate from "./UserProUpdate/UserProUpdate";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Shared/Spinner/Spinner";
import UserBalance from "./UserBalance/UserBalance";
import UserRidesBookings from "./UserRidesBooking/UserRidesBookings";
import UserWishList from "./UserWishList/UserWishList";
import UserBookings from "./UserOverview/UserBookings";
import UserPublishRides from "./UserPublishRides/UserPublishRides";
import SubmitCar from "./SubmitCar/SubmitCar";


const UserProfiles = () => {

    const [value, setValue] = useState(1);

    const { user } = useContext(AuthContext)

    const { isLoading, data, refetch } = useQuery({
        queryKey: [`/carsDetails?email=${user}`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/usersReg/${user}`)
            const data = await res.json()
            return data
        }
    });
    const datas = data?.data;
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className="border border-black lg:w-4/6 lg:mx-auto mt-10">
            <div className="flex items-center justify-center">
                <button onClick={() => setValue(1)} className="btn bg-white hover:bg-white text-black border-0  lg:mr-3 font-semibold">Profile Update</button>
                <button onClick={() => setValue(2)} className="btn bg-white hover:bg-white text-black border-0  lg:ml-3 font-semibold">Booking List</button>
                <button onClick={() => setValue(3)} className="btn bg-white hover:bg-white text-black border-0  lg:mr-3 font-semibold">Profile Balance</button>
                <button onClick={() => setValue(4)} className="btn bg-white hover:bg-white text-black border-0  lg:mr-3 font-semibold">Rides List</button>
                <button onClick={() => setValue(5)} className="btn bg-white hover:bg-white text-black border-0  lg:mr-3 font-semibold">Wish List</button>
                <button onClick={() => setValue(6)} className="btn bg-white hover:bg-white text-black border-0 lg:mr-3 font-semibold">Publish Rides</button>
                <button onClick={() => setValue(7)} className="btn bg-white hover:bg-white text-black border-0 font-semibold">Submit Car</button>
            </div>
            <hr className="mx-8" />
            {
                value == 1 ?
                    <UserProUpdate data={datas} refetch={refetch}></UserProUpdate>
                    :
                    <div>
                        {
                            value == 2 ?
                                <UserBookings></UserBookings>
                                :
                                <div>
                                    {
                                        value == 3 ?
                                        <UserBalance data={datas}></UserBalance>
                                        :
                                        <div>
                                            {
                                                value == 4 ?
                                                <UserRidesBookings></UserRidesBookings>
                                                :
                                                <div>
                                                    {
                                                        value == 5 ?
                                                        <UserWishList></UserWishList>
                                                        :
                                                        <div>
                                                            {
                                                                value == 6 ?
                                                                <UserPublishRides datas={datas} refetch={refetch}></UserPublishRides>
                                                                :
                                                                <SubmitCar></SubmitCar>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                        }
                    </div>
            }
        </div>
    );
};

export default UserProfiles;