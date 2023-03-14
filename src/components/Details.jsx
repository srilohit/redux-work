import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Details =(props)=>{

    const navigate = useNavigate();
    const [carType,setCarType] = useState([]);
    const [user,setUser] = useState({});

    useEffect(()=>{
        setUser(props.user.userDetails);
        
    },[props.user.userDetails]);

    useEffect(()=>{
        axios('http://localhost:4000/carTypes').then((res)=>{
            //console.log(res.data)
            setCarType([...res.data])
        })
        // return function(){
        //     props.dispatch({type:'UPDATEUSER',payload:{...user}})
        // }
    },[]);

    const updateUser =()=>{
        // to="/booking/serviceBooking"
        //console.log(user)
        props.dispatch({type:"UPDATEUSER",payload:user});
        navigate("/booking/serviceBooking")
    };

    return (
        <div className="m-4 border border-2 rounded">
            <h2 className="mx-4">Details</h2>
            <div className="d-flex flex-wrap form-control">
                <div className="w-50 p-4">
                    <label htmlFor="" className="form-label">Full Name</label>
                    <input type="text" name="" className="form-control" onChange={(e)=>{setUser({...user,fullname:e.target.value})}}/>
                </div>
                <div className="w-50 p-4">
                    <label htmlFor="" className="form-label">Mobile</label>
                    <input type="number" name="" className="form-control" onChange={(e)=>{setUser({...user,mobile:e.target.value})}}/>
                </div>
                <div className="w-50 p-4">
                    <label htmlFor="" className="form-label">Vehical NO</label>
                    <input type="text" name="" className="form-control" onChange={(e)=>{setUser({...user,vehicalNo:e.target.value})}}/>
                </div>
                <div className="w-50 p-4">
                    <label htmlFor="" className="form-label">Car Type</label>
                    <div>
                        <select name="carType" className="form-select"  onChange={(e)=>{setUser({...user,selectedCarType:e.target.value})}}>
                            <option value="select your car..." selected disabled>select your car...</option>
                            {
                                carType && carType.map((ct)=>{
                                    return (
                                        <>
                                            <option value={ct.type}>{ct.type}</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                        {/* {
                            carType && carType.map((ct)=>{
                                return (
                                    <>
                                        <input type="radio" name="carType" value={ct.type} className="form-check-input" onChange={(e)=>{setUser({...user,selectedCarType:e.target.value})}}/>:<span className="p-2">{ct.type}</span> 
                                    </>
                                )
                            })
                        } */}
                    </div>
                </div>
            </div>
            <div className="m-2 d-flex justify-content-end">
                <button onClick={updateUser} className="btn btn-dark">Next</button>
            </div>
        </div>
    )
};
 
export default connect(store=>store)(Details);