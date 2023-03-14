import React, { useEffect, useState } from "react";
import axios from "axios";

const AddService =()=>{

    const [serviceTypes,setServiceTypes] = useState([]);
    //const [serviceTitle,setServiceTitle] = useState('');
    const [carTypes,setCarTypes] = useState([]);
    const [newService,setNewService] = useState({
        "id": '',
        "serviceType": "",
        "serviceTitle": "",
        "serviceCost": {
            // "Hatchback": 0,
            // "Sedan": 0,
            // "CrossOver": 0, 
            // "XUV": 0,
            // "Tiago": 0

            //carTypes: 0
        }
    });


    useEffect(()=>{
        axios('http://localhost:4000/serviceTypes').then((res)=>{
            setServiceTypes([...res.data]);
            //console.log(res.data)
        });
        axios('http://localhost:4000/carTypes').then((res)=>{
            setCarTypes([...res.data]);
            //console.log(res.data)
        });
    },[]);

    const addService =()=>{
        axios({
            method: 'post',
            url: 'http://localhost:4000/services',
            data: newService
        }).then(()=>{
            alert('services added')
        })
    }
    
    return (
        <div className="border border-2 p-4 rounded">
            <div className="border border-white rounded" style={{backgroundColor:'rgb(155, 165, 201)'}}>
                <h1 className="mx-4">Add Service</h1>
                <hr />
                <div className="p-2 m-2">
                    <select className="me-3 border-dark rounded" name="serviceType" onChange={(st)=>{setNewService({...newService,serviceType:st.target.value})}}>
                        <option value={null} selected disabled>select serviceType</option>
                        {
                            serviceTypes && serviceTypes.map((st)=>{
                                return <option key={st.id} value={st.type}>{st.type}</option>
                            })
                        }                    
                    </select>
                    <input type="text" placeholder="Enter service title..." className="rounded" onChange={(e)=>{setNewService({...newService,serviceTitle:e.target.value})}}/>
                    <div className="mt-2">
                        <table className="table table-bordered border-dark mt-2 w-50">
                            <thead>
                                <tr>
                                    <td>Cartype</td>
                                    <td>ServiceCost</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carTypes.map((ct)=>{
                                        return (
                                            <tr key={ct.id}>
                                                <td>{ct.type}</td>
                                                <td> <input type="text" className="rounded" onChange={(sc)=>{setNewService({...newService,serviceCost:{...newService.serviceCost,[ct.type]:sc.target.value}})}} /></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr />
                <div className="p-2 m-2">
                    <button className="btn btn-outline-light" onClick={addService}>Add Service</button>
                </div>
            </div>
        </div>
    )
};

export default AddService;