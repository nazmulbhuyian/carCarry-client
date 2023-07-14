
import AboutCar from "./AboutCar/AboutCar";
import AboutClient from "./AboutClient/AboutClient";
import Banner from "./Banner/Banner";
import NewRental from "./NewRental/NewRental";
import RidesEvery from "./RidesEvery/RidesEvery";
import SeeRides from "./SeeRides/SeeRides";


const HomeLayout = () => {
    return (
        <div className="mt-5 mb-10">
            <Banner></Banner>
            <AboutCar></AboutCar>
            <NewRental></NewRental>
            <AboutClient></AboutClient>
            <SeeRides></SeeRides>
            <RidesEvery></RidesEvery>
        </div>
    );
};

export default HomeLayout;