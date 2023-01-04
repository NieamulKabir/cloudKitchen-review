import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Loading/Loading'

const Login = () => {
    const { signIn, loading, googleSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate(from, { replace: true });
                const currentUser = {
                    uid: user.uid
                }
                fetch('https://cloudkitchen-v5ck.onrender.com/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                        toast.success('Successfully Sign In')
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => console.log(error));
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    uid: user.uid
                }
                fetch('https://cloudkitchen-v5ck.onrender.com/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                        toast.success('Successfully Sign In')
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => console.log(error));
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='bg-base-200'>
                <h1 className="text-3xl md:text-5xl font-bold pb-0 pt-10 text-center text-violet-500">Login now!</h1>
                <div className="hero max-w-screen-xl mx-auto w-full">

                    <div className="hero-content md:w-[50%] mx-auto">

                        <div className="card  w-full  shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body pb-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-semibold">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg text-semibold">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" />


                                </div>
                                <div className="text-red-500 py-1">
                                    <div>
                                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                                    </div>
                                </div>
                                <label className="label">
                                    <h1 className='text-lg text-semibold'>Need Account? <span className='text-violet-500  font-semibold'> <Link to='/signup'>Click to Register</Link> </span></h1>
                                </label>
                                <div className="form-control ">
                                    <button className="btn bg-violet-500 border-0 w-[70%] mx-auto">Login</button>
                                </div>
                            </form>
                            <div className="divider mx-6 mt-0">OR</div>
                            <button
                                onClick={handleGoogleSignIn}
                                className="btn w-[62%] mx-auto bg-violet-500 border-0 mb-10"><FaGoogle className='mr-2 text-2xl' >
                                </FaGoogle>Google Signin
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;