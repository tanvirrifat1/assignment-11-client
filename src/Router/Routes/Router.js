import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllFood from "../../Pages/Home/Foods/AllFood/AllFood";
import SingleFood from "../../Pages/Home/Foods/SignleFood/SingleFood";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import AddFood from "../../Pages/Shared/AddFood/AddFood";
import Blog from "../../Pages/Shared/Blog/Blog";
import MyReview from "../../Pages/Shared/MyReview/MyReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            },
            {
                path: '/singlefood/:id',
                element: <PrivateRoute><SingleFood></SingleFood></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/getfood/${params.id}`)
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/addfood',
                element: <AddFood></AddFood>
            },
        ]
    },
])

export default router;