import React, { useState } from "react";
import axios from "axios";

const AddServiceType =()=>{

    const [newServiceType,setNewServiceType] = useState('');

    const addServiceType =()=>{
        axios({
            method: 'post',
            url: 'http://localhost:4000/serviceTypes',
            data: {
                id:'',
                type: newServiceType
            }
        }).then(()=>{
            alert('serviceType added')
        })
    }
    return (
        <div className="border border-2 p-4 rounded">
            <div className="border border-white rounded" style={{backgroundColor:'rgb(155, 165, 201)'}}>
                <h1 className="mx-4">AddServiceType</h1>
                <hr />
                <div className="p-2 m-2">
                    <input className="rounded" type="text" onChange={(e)=>{setNewServiceType(e.target.value)}}/>
                    <button className="ms-2 btn btn-outline-light" onClick={addServiceType}>Add Service Type</button>
                </div>
            </div>
        </div>
    )
};

export default AddServiceType