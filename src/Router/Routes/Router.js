import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllFood from "../../Pages/Home/Foods/AllFood/AllFood";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Blog from "../../Pages/Shared/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/getfood',
                element: <AllFood></AllFood>
            }
        ]
    },
])

export default router;