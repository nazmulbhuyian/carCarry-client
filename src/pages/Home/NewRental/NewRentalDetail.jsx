import { Link } from "react-router-dom";
import Ratting from "../../../Shared/Ratting/Ratting";

const NewRentalDetail = (rentals) => {
    const rental = rentals.rentals;
    const {_id, c_img, c_name, c_prize, c_heading, u_img, u_ratting } = rental;

    return (
        <div>
            <Link to={`/rentDetails/${_id}`}>
                <div className="relative">
                    <div className="indicator absolute">
                        <span className="indicator-item indicator-start mt-4 ml-10 p-4 badge bg-red-600 border-0">$ {c_prize}/day</span>
                    </div>
                    <img src={c_img} alt="Shoes" className="rounded-xl w-full lg:hover:scale-110 hover:scale-105" />
                    <div className="avatar absolute indicator lg:ml-8 ml-6 lg:bottom-8 bottom-6">
                        <div className="lg:w-16 w-12 rounded-full indicator-item">
                            <img src={u_img} />
                        </div>
                    </div>
                </div>
            </Link>

            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold mt-2">{c_name}</h2>
                <Ratting rattings={u_ratting}></Ratting>
            </div>
            <h3 className="text-gray-600 mt-2">{c_heading.slice(0, 45)}</h3>

        </div>
    );
};


export default NewRentalDetail;
