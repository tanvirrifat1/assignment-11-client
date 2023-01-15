import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/usetitle';
import img from '../../../assets/Sliders/istockphoto-1004591262-612x612.jpg'

const Header = () => {
    useTitle('Home')
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
        toast.warn('LogOut successfully', { autoClose: 1000 })
    }

    const menuItems = <>
        <li className='font-bold'> <Link to='/'>Home</Link></li>
        <li className='font-bold'> <Link to='/blog'>Blog</Link></li>

        <li><h1 className='text-2xl text-purple-700'> {user?.email && <div className='mb-8'>
            <Link to='/addfood'><button className="btn btn-active btn-primary mt-5 rounded-2xl hover:bg-white hover:text-black sm:mr-10 font-bold">Add Food</button></Link>
            <Link to='/myreview'><button className="btn btn-active btn-secondary mt-5 rounded-2xl hover:bg-white hover:text-black sm:mr-10 font-bold">My Review</button></Link>
        </div>}</h1>
        </li>
    </>

    return (
        <div className=''>
            <div
                style={{
                    backgroundColor: '#832561',
                }}
                className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow  rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className='flex justify-center'>
                        <Link to='/' className="btn btn-ghost normal-case text-xl font-bold ">Fast-Food <img className='w-10 h-10 ml-3 rounded-lg' src={img} alt="" /></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

                <div className='ml-0 navbar-end'>

                    <div className='mr-4'>
                        {user?.photoURL ?
                            <img className=' w-12 h-12 rounded-full dark:bg-gray-500'
                                src={user?.photoURL} alt=""></img>
                            :
                            <></>
                        }
                    </div>
                    {
                        user?.email ?
                            <button onClick={handleLogOut} className="btn rounded-2xl hover:bg-white hover:text-black sm:mr-10  btn-primary hover:rounded-lg font-bold">logOut</button>
                            : <Link className='btn btn-primary hover:rounded-lg font-bold' to='/login'> LogIn</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;