import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePages from "../HomePages/HomePages";
import Plants from "../Components/Plants/Plants";
import PlantDetails from "../Components/Plants/PlantDetails";
import MyProfile from "../My Profile/MyProfile";
import Login from "../Login/Login";
import Register from "../Login/Register";
import PrivateRoutes from "./PrivateRoutes";
import Forgot from "../Login/Forgot";
import Error from "../Error/Error";
import AboutUs from "../AboutSection/AboutUs";
import PrivacyPolicy from "../AboutSection/PrivacyPolicy";

const router = createBrowserRouter([
    {
        path: '/',
        Component : App,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: HomePages
            },
            {
                path: '/plants',
                Component: Plants,
            },
            {
                path: '/about',
                Component: AboutUs,
            },
            {
                path: '/privacy',
                Component: PrivacyPolicy ,
            },
            {
                path: '/myProfile',
                element : <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
            },
            {
                path: '/plants/:id',
                element : <PlantDetails></PlantDetails>
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/forgot',
                Component: Forgot
            },
            {
                path: '*',
                element: <Error></Error>
            },
            {
                path: '/plants/plants/:id',
                element : <PrivateRoutes><PlantDetails></PlantDetails></PrivateRoutes>
            }
        ]
    }
])

export default router;