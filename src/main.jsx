import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Shared/Home/Home';
import Login from './Component/LoginandRegister/Login';
import Register from './Component/LoginandRegister/Register';
import About from './Component/Pages/About/About';
import Contract from './Component/Pages/Contract/Contract';
import OurService from './Component/Pages/OurService/OurService';
import OurTeam from './Component/Pages/OurTeam/OurTeam';
import AuthProvider from './Component/AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Ourgallary from './Component/Pages/OurGallary/Ourgallary';
import OurServicedetails from './Component/Pages/OurService/OurServicedetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contract></Contract>
      }
      ,
      {
        path:'/ourservice',
        element:<OurService></OurService>,
        loader:()=>fetch('/Services.json')
      },
      {
             path:'/service/:id',
             element:<PrivateRoute><OurServicedetails></OurServicedetails></PrivateRoute>,
             loader:()=> fetch('/Services.json')
      },
      {
        path:'/ourteam',
        element:<OurTeam></OurTeam>
      },
      {
        path:'/ourgallary',
        element:<PrivateRoute><Ourgallary></Ourgallary></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
     <Toaster position="top-right"
  reverseOrder={false} ></Toaster>
    </AuthProvider>
   
  </StrictMode>,
)
