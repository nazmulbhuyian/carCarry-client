import DriverAllRides from "./DriverAllRides/DriverAllRides";
import UserAllRides from "./UserAllRides/UserAllRides";


const SeeRides = () => {
    return (
        <div className="lg:flex lg:items-center lg:justify-around mt-12">
            <div>
                <h1 className="text-3xl font-bold">Looking for ride?</h1>
                <DriverAllRides></DriverAllRides>
            </div>
            <div>
                <h1 className="text-3xl font-bold">Get spare seat?</h1>
                <UserAllRides></UserAllRides>
            </div>
        </div>
    );
};

export default SeeRides;