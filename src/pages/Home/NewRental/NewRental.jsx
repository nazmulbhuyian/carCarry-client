import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Shared/Spinner/Spinner";
import NewRentalDetail from "./NewRentalDetail";
import { Link } from "react-router-dom";



const NewRental = () => {

    const { isLoading, data: cars = [] } = useQuery({
        queryKey: ['/carsDetails'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/carsDetails')
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
       return <Spinner></Spinner>
    }

    return (
        <div className="mt-8">
            <h1 className="text-4xl font-semibold text-center text-gray-600">Latest Rental</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16 lg:mx-52 md:mx-40 mx-20">
                {
                    cars?.data?.slice(0, 3).map(car => <NewRentalDetail key={car._id} rentals={car}></NewRentalDetail>)
                }
            </div>
            <Link to='/allRental'>
                <div className="flex justify-center mt-10">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        See More
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default NewRental;