import React, { useContext } from 'react';
import { AuthContax } from './Providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContax)
    console.log(user)
    return (
        <div>
            <h1>This is home page {user && <span>{user.display}</span>}</h1>
        </div>
    );
};

export default Home;