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
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";
import DriverRoute from "./DriverRoute/DriverRoute";
import UserRoute from "./UserRoute/UserRoute";
import NotFound from "../Shared/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />,
    },
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
                // loader: ({ params }) => fetch(`https://car-carry-server.vercel.app/carsDetails/${params.id}`)
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
                path: '/driverProf',
                element: <PrivateRoutes><DriverRoute><DriverProfile></DriverProfile></DriverRoute></PrivateRoutes>
            },
            {
                path: '/userProf',
                element: <PrivateRoutes><UserRoute><UserProfiles></UserProfiles></UserRoute></PrivateRoutes>
            },
            {
                path: '/allSelfBooking',
                element: <PrivateRoutes><DriverSelfBookingAll></DriverSelfBookingAll></PrivateRoutes>
            },
            {
                path: '/allUserSelfBooking',
                element: <PrivateRoutes><UserAllBookings></UserAllBookings></PrivateRoutes>
            }
        ]
    }
])

export default router;