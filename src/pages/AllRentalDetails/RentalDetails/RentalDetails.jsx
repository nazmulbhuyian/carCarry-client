import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../../../Shared/Spinner/Spinner";
import LeftSide from "./RentalOverview/LeftSide";
import RightSide from "./RentalOverview/RightSide";


const RentalDetails = () => {
    const data = useLoaderData();
    const detail = data[0];

    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Spinner />
    }

    return (
        <div>
            <h1>Header</h1>
            <div className="lg:flex mx-auto w-9/12">
                <div className="lg:w-3/5">
                    <LeftSide detail={detail}></LeftSide>
                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default RentalDetails;