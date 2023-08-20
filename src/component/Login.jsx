import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContax } from './Providers/AuthProviders';

const Login = () => {

    const {singIn} = useContext(AuthContax)
    console.log(singIn)

    const handelLogin = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)

        singIn(email,password)
        .then(result =>{
            const loginUser = result.user;
            console.log(loginUser)
            from.reset( '')
            
        })
        .catch(error => {
            console.log(error)
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <Link to='/regester'>
                                <button className="btn btn-link">New to auth Master</button>
                            </Link>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;