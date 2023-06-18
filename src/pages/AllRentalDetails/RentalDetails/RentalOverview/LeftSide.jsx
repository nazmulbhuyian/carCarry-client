import Ratting from "../../../../Shared/Ratting/Ratting";
import { FaFacebookMessenger } from 'react-icons/fa';

const LeftSide = ({ detail }) => {
    console.log(detail);
    const { c_name, c_img, u_ratting, u_name, year, description, c_heading, description_2, model, fuel, km, reg_number, seat, insurance } = detail;
    return (
        <div>

            <div className="w-full px-5">
                <div className="">
                    <h2 className="text-3xl font-semibold">{c_name}</h2>
                    <div className="flex justify-start items-center mt-4 mb-4">
                        <div>
                            <Ratting rattings={u_ratting}></Ratting>
                        </div>
                        <div className="flex justify-start items-center ml-6">
                            <button className="btn btn-xs btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> 
                                 Save</button>
                                <button className="btn btn-xs btn-primary ml-4">
                                <FaFacebookMessenger></FaFacebookMessenger>
                                 Share</button>
                        </div>
                    </div>
                    <p className="mb-5">Property of {u_name} from {year}</p>
                </div>
                <figure><img src={c_img} alt="Shoes" className="w-full" /></figure>
            </div>

            <div className="mt-12">
                <h1 className="text-2xl font-semibold">Description</h1>
                <h3 className="text-gray-400 mt-3">{c_heading}</h3>
                <p className="mt-5 text-gray-700">{description}</p>
                <p className="mt-5 text-gray-700">{description_2}</p>
            </div>

            <div className="mt-10">
                <h1 className="text-2xl font-semibold">Characteristics:</h1>
                <div className="grid grid-cols-2 mt-4">
                    <p className="bg-sky-100 text-sm p-3">Model</p>
                    <p className="bg-sky-100 text-sm p-3">{model}</p>
                    <p className="bg-sky-200 text-sm p-3">Year</p>
                    <p className="bg-sky-200 text-sm p-3">{year}</p>
                    <p className="bg-sky-100 text-sm p-3">Fuel</p>
                    <p className="bg-sky-100 text-sm p-3">{fuel}</p>
                    <p className="bg-sky-200 text-sm p-3">KM</p>
                    <p className="bg-sky-200 text-sm p-3">{km} km</p>
                    <p className="bg-sky-100 text-sm p-3">Registration-Number</p>
                    <p className="bg-sky-100 text-sm p-3">{reg_number}</p>
                    <p className="bg-sky-200 text-sm p-3">Seats</p>
                    <p className="bg-sky-200 text-sm p-3">{seat}</p>
                    <p className="bg-sky-100 text-sm p-3">Insuarance</p>
                    <p className="bg-sky-100 text-sm p-3">{insurance}</p>
                </div>
            </div>

        </div>
    );
};

export default LeftSide;