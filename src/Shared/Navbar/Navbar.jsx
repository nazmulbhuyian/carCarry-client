import { Link } from "react-router-dom";
import img from '../../assets/navbar/logo-black.png'

const Navbar = () => {

    return (

        <div className="navbar lg:w-[1200px] md-w-full mx-auto mt-5">
            <div className="navbar-start">
                <div className="">
                    <div className="">
                        <img src={img} alt="" />
                    </div>
                </div>

                <div className="dropdown lg:contents hidden ">
                    <Link to='/' className='mx-7 font-bold text-gray-600'>Home</Link>
                    <Link to='/' className='font-bold mr-7 text-gray-600'>Profile</Link>
                    <Link to='/login' className='font-bold text-gray-600'>Login</Link>
                </div>
            </div>
            <div className="navbar-end ">
                <div className="dropdown lg:hidden dropdown-end">
                    <label tabIndex={0} className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
                        <Link to='/' className='font-bold text-gray-600'>Home</Link>
                        <Link to='/' className='font-bold text-gray-600'>Profile</Link>
                        <Link to='/login' className='font-bold text-gray-600'>Login</Link>
                    </ul>
                </div>
                <div className='lg:contents hidden'>
                    <Link to='/dashboard' className=' font-bold text-gray-600 mr-5 ml-2'>Contact Us</Link>
                </div>
            </div>
        </div>
    );
};


export default Navbar;