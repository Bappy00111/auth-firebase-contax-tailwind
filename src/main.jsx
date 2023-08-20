import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/layout/Main.jsx';
import Home from './component/Home.jsx';
import Login from './component/Login.jsx';
import Regester from './component/Regester.jsx';
import AuthProviders from './component/Providers/AuthProviders.jsx';
import Orders from './component/Orders.jsx';
import PrivetsRoutes from './routes/PrivetsRoutes.jsx';
import Profile from './component/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
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
        path: '/regester',
        element: <Regester></Regester>
      },
      {
        path:'/orders',
        element:<PrivetsRoutes><Orders></Orders></PrivetsRoutes>
      },
      {
        path:'/profile',
        element:<PrivetsRoutes><Profile></Profile></PrivetsRoutes>
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
