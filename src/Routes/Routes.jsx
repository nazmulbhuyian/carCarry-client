import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomeLayout from "../pages/Home/HomeLayout";
import Login from "../pages/Login/Login";

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
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;