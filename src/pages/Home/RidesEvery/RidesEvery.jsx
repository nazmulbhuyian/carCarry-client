import { FaCar, FaUser, FaGrinHearts, FaHandHoldingHeart } from "react-icons/fa";

const RidesEvery = () => {
    return (
        <div>
            <div>
                <div className="bg-[#F4F8FF] lg:p-16 p-10 mt-10">
                    <div className="lg:mx-20">
                        <h2 className="lg:text-2xl text-xl font-semibold text-gray-600">Rides every day. Where do you want to go?</h2>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:items-center lg:justify-between lg:mx-0 mx-6 mt-8">

                            <div className="bg-white lg:p-10 p-5">
                                <div className="flex items-center justify-between">
                                    <h3 className="lg:text-2xl text-xl">Cambridge</h3>
                                    <p className="">from</p>
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <h3 className="lg:text-2xl text-xl">Nottingham</h3>
                                    <h3 className="lg:text-3xl text-2xl font-bold text-red-500">$15</h3>
                                </div>
                            </div>

                            <div className="bg-white lg:p-10 p-5">
                                <div className="flex items-center justify-between">
                                    <h3 className="lg:text-2xl text-xl">Salford</h3>
                                    <p className="">from</p>
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <h3 className="lg:text-2xl text-xl">Plymouth</h3>
                                    <h3 className="lg:text-3xl text-2xl font-bold text-red-500">$9</h3>
                                </div>
                            </div>

                            <div className="bg-white lg:p-10 p-5">
                                <div className="flex items-center justify-between">
                                    <h3 className="lg:text-2xl text-xl">Carlisle</h3>
                                    <p className="">from</p>
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <h3 className="lg:text-2xl text-xl">Chelmsford</h3>
                                    <h3 className="lg:text-3xl text-2xl font-bold text-red-500">$20</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div></div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mx-20 md:mx-16 lg:py-32 md:py-16 py-10">
                <div className="lg:flex md:flex block items-center lg:mt-0 mt-8 mx-auto">
                    <div className="lg:border lg:rounded-full lg:p-4 md:p-4 p-0 border-black lg:mr-5 md:mr-5 mr-0 md:border md:rounded-full">
                        <FaHandHoldingHeart size={60} className='text-teal-400 flex mx-auto'></FaHandHoldingHeart>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-500 text-center md:text-left lg:text-left">20</h3>
                        <h4 className="text-xl">User Love Car Carry.</h4>
                    </div>
                </div>

                <div className="lg:flex md:flex block items-center lg:mt-0 mt-8 mx-auto">
                    <div className="lg:border lg:rounded-full lg:p-4 md:p-4 p-0 border-black lg:mr-5 md:mr-5 mr-0 md:border md:rounded-full">
                        <FaCar size={60} className='text-teal-400 flex mx-auto'></FaCar>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-500 text-center md:text-left lg:text-left">4329</h3>
                        <h4 className="text-xl">rides made per day.</h4>
                    </div>
                </div>

                <div className="lg:flex md:flex block items-center lg:mt-0 mt-8 mx-auto">
                    <div className="lg:border lg:rounded-full lg:p-4 md:p-4 p-0 border-black lg:mr-5 md:mr-5 mr-0 md:border md:rounded-full">
                        <FaGrinHearts size={60} className='text-teal-400 flex mx-auto'></FaGrinHearts>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-500 text-center md:text-left lg:text-left">321</h3>
                        <h4 className="text-xl">ratings made daily.</h4>
                    </div>
                </div>

                <div className="lg:flex md:flex block items-center lg:mt-0 mt-8 mx-auto">
                    <div className="lg:border lg:rounded-full lg:p-4 md:p-4 p-0 border-black lg:mr-5 md:mr-5 mr-0 md:border md:rounded-full">
                        <FaUser size={60} className='text-teal-400 flex mx-auto'></FaUser>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-500  text-center md:text-left lg:text-left">100</h3>
                        <h4 className="text-xl">new users register daily.</h4>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RidesEvery;