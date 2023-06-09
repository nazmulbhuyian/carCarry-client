import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomeLayout from "../pages/Home/HomeLayout";
import Login from "../pages/Login/Login";
import AllRental from "../pages/AllRentalDetails/AllRental/AllRental";
import RentalDetails from "../pages/AllRentalDetails/RentalDetails/RentalDetails";
import Register from "../pages/Login/Register";
import DriverProfile from "../pages/Profile/DriverProfile/DriverProfile";
import UserProfiles from "../pages/Profile/UserProfile/UserProfiles";
import DriverSelfBookingAll from "../pages/Profile/DriverProfile/DriverOverview/DriverBookings/DriverSelfBooking/DriverSelfBookingAll";
import UserAllBookings from "../pages/Profile/UserProfile/UserOverview/UserAllBookings";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
            {
                path: '/allRental',
                element: <AllRental></AllRental>
            },
            {
                path: '/rentDetails/:id',
                element: <RentalDetails></RentalDetails>,
                // loader: ({ params }) => fetch(`http://localhost:5000/carsDetails/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/driverProfile',
                element: <DriverProfile></DriverProfile>
            },
            {
                path: '/userProf',
                element: <UserProfiles></UserProfiles>
            },
            {
                path: '/allSelfBooking',
                element: <DriverSelfBookingAll></DriverSelfBookingAll>
            },
            {
                path: '/allUserSelfBooking',
                element: <UserAllBookings></UserAllBookings>
            }
        ]
    }
])

export default router;