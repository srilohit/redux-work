import React from "react";
import { Link,Outlet } from "react-router-dom";

var Dashboard =()=>{

    return (
        <div className="border border-2 border-secondary w-75 mx-auto mt-4 p-3 rounded bg-dark" >
            <h1 className="text-center"><b  style={{color:'rgb(250, 71, 83)', letterSpacing: '5px', fontFamily:"Segoe UI" }}>DashBoard</b></h1>
            <hr />
            <div className="d-flex flex-wrap ">
                <ul className="w-25 " type='none'>
                    <div className="border border-white rounded mx-3">
                        <li className="border-bottom border-white mb-4" style={{marginTop:'20px'}}> 
                            <Link to="/dashboard/addCarType" className="text-decoration-none text-dark mx-3 text-white">Add Car Type</Link>
                        </li>
                        <li className="border-bottom border-white mb-4">
                            <Link to="/dashboard/addServiceType" className="text-decoration-none text-dark mx-3 text-white">Add Service Type</Link>
                        </li>
                        <li className="border-bottom border-white mb-4">
                            <Link to="/dashboard/addService" className="text-decoration-none text-dark mx-3 text-white">Add Service</Link>
                        </li>
                        <li className="">
                            <Link to="/dashboard/viewService" className="text-decoration-none text-dark mx-3 text-white">Service Catalogue</Link>
                        </li>
                    </div>
                </ul>
                <div className="w-75">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;
