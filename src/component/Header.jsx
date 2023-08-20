import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContax } from './Providers/AuthProviders';

const Header = () => {
    const {user,logOut} = useContext(AuthContax)
    const handleLogeOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="navbar bg-primary text-primary-content flex justify-between">
            <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
           <div>
           <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/regester">Regester</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>
           </div>
           {
            user ?<div>
                 <span>{user.email}</span>
                 <button onClick={handleLogeOut} className="btn btn-xs">Sing Out</button>
            </div> : 
            <Link to='/login'>Login</Link>
           }
        </div>
    );
};

export default Header;