import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Error from "../../Pages/Home/Error/Error";
import AllFood from "../../Pages/Home/Foods/AllFood/AllFood";
import SingleFood from "../../Pages/Home/Foods/SignleFood/SingleFood";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import AddFood from "../../Pages/Shared/AddFood/AddFood";
import Blog from "../../Pages/Shared/Blog/Blog";
import Edit from "../../Pages/Shared/MyReview/Edit/Edit";
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
                element: <SingleFood></SingleFood>,
                loader: ({ params }) => fetch(`https://assignment-server-11.vercel.app/getfood/${params.id}`)
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/addfood',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/edit',
                element: <Edit></Edit>
            }
        ]
    },
    { path: '*', element: <Error></Error> }
])

export default router;