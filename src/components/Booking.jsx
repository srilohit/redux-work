import React from "react";
import { Outlet } from "react-router-dom";

const Booking =()=>{

    return (
        <div className="border border-2 w-75 mx-auto mt-4 rounded">
            <h1 className="p-2 text-success text-center">Booking</h1>
            
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
};
 
export default Booking;