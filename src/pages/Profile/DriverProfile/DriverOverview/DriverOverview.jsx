import { useState } from "react";
import DriverOverviewDetail from "./DriverBookings/DriverOverviewDetail";
import DriverOverviewRides from "./DriverRides/DriverOverviewRides";
import PublishRides from "./PublishRides/PublishRides";


const DriverOverview = ({id, datas, refetch}) => {

    const [value, setValue] = useState(1);

    return (
        <div className="border border-black">
            <div className="flex items-center justify-center">
                <button onClick={() => setValue(1)} className="btn bg-white hover:bg-white text-black border-0  mr-3 text-xl font-semibold">Bookings</button>
                <button onClick={() => setValue(2)} className="btn bg-white hover:bg-white text-black border-0  ml-3 text-xl font-semibold">Rides</button>
                <button onClick={() => setValue(3)} className="btn bg-white hover:bg-white text-black border-0  ml-3 text-xl font-semibold">Publish Rides</button>
            </div>
            <hr className="mx-8" />
                {
                    value==1 ?
                    <DriverOverviewDetail id={id}></DriverOverviewDetail>
                    :
                    <div>
                        {
                            value==2 ?
                            <DriverOverviewRides></DriverOverviewRides>
                            :
                            <PublishRides datas={datas} refetch={refetch}></PublishRides>
                        }
                    </div>
                }
        </div>
    );
};

export default DriverOverview;