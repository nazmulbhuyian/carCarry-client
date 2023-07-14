import { Link } from "react-router-dom";


const UserSingleWishList = ({ data }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 border border-red-300 shadow-lg shadow-red-100">
            <figure><img src={data?.c_img} className="w-full" alt="Shoes" /></figure>
            <div className="card-body">
                    <h2 className="card-title">{data?.c_name}</h2>
                <div className="card-actions justify-between">
                    <p className="text-red-500 text-xl font-bold">{data?.prize} $</p>
                    <Link className="text-xl text-red-500 underline" to={`/rentDetails/${data.detail_id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default UserSingleWishList;