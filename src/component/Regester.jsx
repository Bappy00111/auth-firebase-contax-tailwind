import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContax } from './Providers/AuthProviders';

const Regester = () => {

    const {carateUser} = useContext(AuthContax)
 

    const handelRegester = (event) =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name,email,password)

        carateUser(email,password)
        .then(result =>{
            const logedUser = result.user;
            from.reset()
        })
        .catch(error =>{
            console.log(error.message)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Regester now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelRegester} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <Link to='/login'>
                                <button className="btn btn-link">alredy have account</button>
                            </Link>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Regester</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Regester;