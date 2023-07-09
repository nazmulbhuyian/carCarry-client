import { FaShare } from "react-icons/fa";

const DriverPoints = ({points}) => {
    return (
        <div className="border border-gray-300 w-[800px]">
            <h1 className="text-center p-12 text-lg font-semibold">{points} Points</h1>
            <button className="btn bg-black hover:bg-black w-full"><FaShare className="mr-3"></FaShare> Earn Point</button>
        </div>
    );
};

export default DriverPoints;