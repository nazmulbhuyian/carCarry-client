import { FaCarSide, FaCcMastercard, FaDumpster, FaPhoneAlt } from "react-icons/fa";

const AboutCar = () => {
    return (
        // <div className="lg:mt-20 mt-10 lg:w-[1200px] mx-auto">
        <div className="lg:mt-20 mt-10 lg:w-3/4 mx-auto">
            <div className="lg:mx-auto text-center mx-5">
                <h1 className="lg:text-3xl text-2xl font-bold">Things you’ll love about Car Carry</h1>
                <p className="text-gray-400 mt-2">SAY NO TO EMPTY SEATS.</p>
            </div>
            <div className="lg:grid lg:grid-cols-2 grid-cols-1 mt-10">
                <div className="bg-[#F4F8FF] flex justify-between items-center p-10 lg:mr-5 mx-5 lg:mx-0 mb-5">
                    <div>
                        <FaCarSide size={60} className='mr-10 text-gray-500'></FaCarSide>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">You’re In Control</h2>
                        <p className="text-gray-400 mt-3">Verified member profiles & ratings mean you know exactly who you,re travelling with.</p>
                    </div>
                </div>

                <div className="bg-[#F4F8FF] flex justify-between items-center p-10 lg:mr-5 mx-5 lg:mx-0 mb-5">
                    <div>
                        <FaPhoneAlt size={60} className='mr-10 text-gray-500'></FaPhoneAlt>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Carpool With Confidence</h2>
                        <p className="text-gray-400 mt-3">ID verification adds another level of security to member profiles.</p>
                    </div>
                </div>

                <div className="bg-[#F4F8FF] flex justify-between items-center p-10 lg:mr-5 mx-5 lg:mx-0 mb-5">
                    <div>
                        <FaDumpster size={60} className='mr-10 text-gray-500'></FaDumpster>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Ride Fully Insured</h2>
                        <p className="text-gray-400 mt-3">We partner to cover your ride from start to finish, absolutely free of charge.</p>
                    </div>
                </div>
                
                <div className="bg-[#F4F8FF] flex justify-between items-center p-10 lg:mr-5 mx-5 lg:mx-0 mb-5">
                    <div>
                        <FaCcMastercard size={60} className='mr-10 text-gray-500'></FaCcMastercard>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Car Carry Points</h2>
                        <p className="text-gray-400 mt-3">Earn points everytime you reserve a seat or rent a car & get discounts.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutCar;