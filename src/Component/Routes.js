import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";
import Meeting from "./Meeting";
import Recordings from "./Recordings";
import Register from "./Register";




const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: '/login',
                    element: <Login></Login>,
                },
                {
                    path: '/register',
                    element: <Register></Register>,
                },
                {
                    path: '/meeting',
                    element: <Meeting></Meeting>,
                },
                {
                    path: '/recordings',
                    element: <Recordings></Recordings>,
                },

            ]
        }
    ]
);

export default router;