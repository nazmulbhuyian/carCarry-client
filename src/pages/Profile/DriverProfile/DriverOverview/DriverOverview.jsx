import { useState } from "react";
import DriverOverviewDetail from "./DriverOverviewDetail";
import DriverOverviewRides from "./DriverOverviewRides";
import DriverOverviewReviews from "./DriverOverviewReviews";


const DriverOverview = () => {

    const [value, setValue] = useState(1);

    return (
        <div className="border border-black">
            <div className="flex items-center justify-center">
                <button onClick={() => setValue(1)} className="btn bg-white hover:bg-white text-black border-0  mr-3 text-xl font-semibold">Profile</button>
                <button onClick={() => setValue(2)} className="btn bg-white hover:bg-white text-black border-0  ml-3 text-xl font-semibold">Rides</button>
                <button onClick={() => setValue(3)} className="btn bg-white hover:bg-white text-black border-0  ml-3 text-xl font-semibold">Reviews</button>
            </div>
            <hr className="mx-8" />
                {
                    value==1 ?
                    <DriverOverviewDetail></DriverOverviewDetail>
                    :
                    <div>
                        {
                            value==2 ?
                            <DriverOverviewRides></DriverOverviewRides>
                            :
                            <DriverOverviewReviews></DriverOverviewReviews>
                        }
                    </div>
                }
        </div>
    );
};

export default DriverOverview;