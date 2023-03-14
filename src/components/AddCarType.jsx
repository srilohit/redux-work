import React, { useState } from "react";
import axios from "axios";

const AddCarType =()=>{

    const [newCarType, setNewCarType] = useState('');

    const addCarType =()=>{
        axios({
            method: 'post',
            url: 'http://localhost:4000/carTypes',
            data: {
                id:'',
                type: newCarType
            }
        }).then(()=>{
            alert('carType added')
        })
    }
    return (
        <div className="border border-2 border-white p-4 rounded">
            <div className="border border-white rounded" style={{backgroundColor:'rgb(155, 165, 201)'}}>
                <h1 className="mx-4">AddCarType</h1>
                <hr/>
                <div className="p-2 m-2">
                    <input className="rounded bg-white" type="text" onChange={(e)=>{setNewCarType(e.target.value)}}/>
                    <button className="ms-2 btn btn-outline-light" onClick={addCarType}>Add Car Type</button>
                </div>
            </div>
        </div>
    )
};

export default AddCarType;