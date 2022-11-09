import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import img1 from '../../assets/login/mobile-login-concept-illustration_114360-83.webp'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/usetitle';

const Login = () => {

    const { userLogin } = useContext(AuthContext)
    useTitle('login')
    const location = useLocation()
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Login successFully', { autoClose: 1000 })
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(err => {
                console.error(err)
                toast.error('password wrong', { autoClose: 1000 })
            })
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img1} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 ">
                            <input className="btn btn-outline btn-success rounded-lg" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>Food Service Here <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;