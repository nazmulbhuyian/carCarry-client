import Ratting from "../../../../Shared/Ratting/Ratting";


const DriverDetails = ({ datas }) => {

    return (
        <div>
            <div className="flex justify-evenly items-center">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={datas?.u_img} />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-center">{datas?.u_name}</h3>
                    <h1 className="text-center"><Ratting rattings={datas?.u_ratting}></Ratting></h1>
                    <p className="text-center">{datas?.u_ratting} Reviews</p>
                </div>
            </div>
            <ul className="steps steps-vertical lg:ml-12 mt-6">
                <li className="step step-primary text-gray-400">Online on 4 Oct 2017 at 08:36</li>
                <li className="step step-primary text-gray-400">Account connected on Facebook</li>
                <li className="step step-primary text-gray-400">Phone number verified</li>
            </ul>
        </div>
    );
};

export default DriverDetails;