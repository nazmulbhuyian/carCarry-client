import { Link } from "react-router-dom";
import img from '../../assets/navbar/logo-black.png'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Navbar = () => {

    const { user, loading } = useContext(AuthContext);

    const handleLogOut = () => {
        localStorage.removeItem('accessToken');
        loading(true);
    }

    return (

        // <div className="navbar lg:w-[1200px] md-w-full mx-auto mt-5">
        <div>
            <div className="navbar lg:w-3/4 mx-auto mt-5">
                <div className="navbar-start">
                    <div className="">
                        <div className="">
                            <img src={img} alt="" />
                        </div>
                    </div>

                    <div className="dropdown lg:contents hidden ">
                        <Link to='/' className='mx-7 font-bold text-gray-600'>Home</Link>
                        <Link to='/allRental' className='font-bold mr-7 text-gray-600'>Rent-Car</Link>
                        {
                            user ?
                                <Link onClick={handleLogOut} className='font-bold text-gray-600'>Log Out</Link>
                                :
                                <Link to='/login' className='font-bold text-gray-600'>Login</Link>
                        }
                    </div>
                </div>
                <div className="navbar-end ">
                    <div className="dropdown lg:hidden dropdown-end">
                        <label tabIndex={0} className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
                            <Link to='/' className='font-bold text-gray-600'>Home</Link>
                            <Link to='/login' className='font-bold text-gray-600 mt-1'>Login</Link>
                            <Link to='/driverProfile' className='font-bold text-gray-600 mt-1'>Profile</Link>
                            <Link to='/' className='font-bold text-gray-600 mt-1'>Dashboard</Link>
                        </ul>
                    </div>
                    <div className='lg:contents hidden'>
                        <Link to='/driverProfile' className=' font-bold text-gray-600 mr-5 ml-2'>
                            {/* <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div> */}
                            Profile
                        </Link>
                        <Link to='/' className='font-bold text-gray-600 ml-5'>Dashboard</Link>
                    </div>
                </div>
            </div>
            <hr className="mt-10" />
        </div>
    );
};


export default Navbar;