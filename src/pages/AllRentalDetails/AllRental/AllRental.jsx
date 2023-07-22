import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Shared/Spinner/Spinner";
import Pagination from "./Pagination";
import AllRentalDetails from "./AllRentalDetails";
import { useNavigation } from "react-router-dom";
import { useState } from "react";


const AllRental = () => {
    const navigation = useNavigation();

    const [recordsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    const { isLoading, data: cars = [] } = useQuery({
        // queryKey: [`/carsDetails/${currentPage}`],
        queryKey: [`/carsDetails`],
        queryFn: async () => {
            // const res = await fetch(`https://car-carry-server.vercel.app/carsDetails?page=${currentPage}`)
            const res = await fetch(`https://car-carry-server.vercel.app/carsDetails`)
            const data = await res.json()
            return data
        }
    })

    const tpage = Math.ceil(cars?.data?.length / recordsPerPage);
    const nPages = tpage;

    if (navigation.state === "loading") {
        return <Spinner />
    }
    if (isLoading) {
        return <Spinner />
    }

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const currentRecords = cars?.data?.slice(indexOfFirstRecord, indexOfLastRecord);

    return (
        <div className="bg-[#F4F8FF] mb-20">
            <div className="lg:w-3/5 md:w-4/5 w-full lg:ml-24 md:ml-16">
                <h1 className="lg:text-4xl md:text-3xl text-2xl lg:font-bold font-semibold text-red-600 text-center">All Rental Car Is Here.</h1>
                <div className="mt-16">
                    {
                        currentRecords?.map(car => <AllRentalDetails key={car._id} cars={car}></AllRentalDetails>)
                    }
                </div>
                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></Pagination>
            </div>
        </div>
    );
};

export default AllRental;