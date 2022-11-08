import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../../assets/login/sign-concept-illustration_114360-125.webp'
import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../../../Hooks/usetitle';



const SignUp = () => {
    useTitle('signUp')
    const { createUser, googleLogin } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('SignUp successFully', { autoClose: 1000 })
                form.reset()

            })
            .catch(err => console.error(err))
    }

    const handleGoogleSignIn = event => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid  md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img2} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-outline btn-warning rounded-lg" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>

                    <button onClick={handleGoogleSignIn} className="btn btn-warning m-5"><FaGoogle className='mr-2 text-3xl'></FaGoogle> Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;