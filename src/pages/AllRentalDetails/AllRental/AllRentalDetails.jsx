import { Link } from "react-router-dom";
import Ratting from "../../../Shared/Ratting/Ratting";


const AllRentalDetails = (cars) => {
    const { _id, c_img, c_name, c_prize, c_heading, u_img, u_name, u_ratting } = cars.cars;
    return (
        <div className="mt-12 bg-white">
            <div className="card card-side">
                <figure><img src={c_img} className="lg:w-[300px] md:w-[200px] w-[120px]" alt="Movie" /></figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title">{c_name}</h2>
                        <div className="badge bg-red-500 border-0 px-6 py-4">$ {c_prize} /Day</div>
                    </div>
                    <p>{c_heading}</p>
                    <div className="flex justify-start items-center">
                        <div className="avatar mt-4">
                            <div className="lg:w-16 w-12 rounded-full">
                                <img src={u_img} />
                            </div>
                        </div>
                        <div className="ml-5">

                            <Ratting rattings={u_ratting}></Ratting>
                            <h2 className="text-xl font-semibold mt-2">{u_name}</h2>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/rentDetails/${_id}`}>
                            <button className="btn bg-orange-300 hover:bg-orange-400 border-0 rounded-2xl px-10">Details</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllRentalDetails;