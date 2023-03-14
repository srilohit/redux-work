import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddCarType from './components/AddCarType';
import AddServiceType from './components/AddServiceType';
import AddService from './components/AddService';
import ServiceCatalogue from './components/ServiceCatalogue';
import Booking from './components/Booking';
import Details from './components/Details';
import ServiceBooking from './components/ServiceBooking';
import Payment from './components/Payment';
import EndPage from './components/EndPage';
import LoginForm from './components/LoginForm';
import SignForm from './components/SignForm';

const router = createBrowserRouter([
    {
        path:"/",
        element: <App></App>,
        children:[
            {
                path:"/dashboard",
                element: <Dashboard></Dashboard>,
                children:[
                    {
                        path:"/dashboard/addCarType",
                        element: <AddCarType></AddCarType>
                    },
                    {
                        path: "/dashboard/addServiceType",
                        element: <AddServiceType></AddServiceType>
                    },
                    {
                        path: "/dashboard/addService",
                        element: <AddService></AddService>
                    },
                    {
                        path: "/dashboard/viewService",
                        element: <ServiceCatalogue></ServiceCatalogue>
                    }
                ]
            },
            {
                path:"/booking",
                element:<Booking></Booking>,
                children:[
                    {
                        path:'/booking',
                        element:<Details></Details>
                    },
                    {
                        path:'/booking/serviceBooking',
                        element:<ServiceBooking></ServiceBooking>
                    },
                    {
                        path:'/booking/payment/:amount',
                        element:<Payment></Payment>
                    }
                ]
            },
            {
                path:'/endpage',
                element:<EndPage></EndPage>
            },
            {
                path:'/login',
                element:<LoginForm></LoginForm>
            },
            {
                path:'/signup',
                element:<SignForm></SignForm>
            }
        ]
    },
    {
        path:'/',
        element:<App></App>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
