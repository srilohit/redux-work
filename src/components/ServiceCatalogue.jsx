import axios from "axios";
import React, { useEffect, useState } from "react";
import * as _ from 'lodash';

var ServiceCatalogue =()=>{

    const [services,setServices] = useState({});

    useEffect(()=>{
        axios('http://localhost:4000/services').then((res)=>{
            var x = _.groupBy(res.data,'serviceType');
            setServices({...x});
            //console.log(res.data)
        })
    },[]);

    return (
        <div className="border border-2 p-4 rounded" style={{backgroundColor:'rgb(155, 165, 201)'}}>
            <div>
                <h1>ServiceCatalogue</h1>
            </div>
            <div className="mx-4">
                <ul type="none">
                    {
                        Object.keys(services).map((st)=>{
                            return <li>
                                <h5 className="text-danger mt-1">{st}</h5>
                                <ol>
                                    {
                                        services[st].map((s)=>{
                                            return <li>
                                                {/* {JSON.stringify(s)} */}
                                                <h4 style={{color:'rgb(1, 3, 103)'}}>{s.serviceTitle}</h4>
                                                <ol>
                                                    {
                                                        Object.keys(s.serviceCost).map((sc)=>{
                                                            return <li>{sc}: &#8377;{s.serviceCost[sc]}</li>
                                                        })
                                                    }
                                                </ol>
                                            </li>
                                        })
                                    }
                                </ol>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
};

export default ServiceCatalogue;