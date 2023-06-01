import AboutCar from "./AboutCar/AboutCar";
import AboutClient from "./AboutClient/AboutClient";
import Banner from "./Banner/Banner";


const HomeLayout = () => {
    return (
        <div className="mt-5 mb-10">
            <Banner></Banner>
            <AboutCar></AboutCar>
            <AboutClient></AboutClient>
        </div>
    );
};

export default HomeLayout;