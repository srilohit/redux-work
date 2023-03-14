import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Billing =(props)=>{
    const navigate = useNavigate();
    const [total,setTotal] = useState(0);

    useEffect(()=>{
        var temp = 0;
        for(var k in props.bill){
            for(var j in props.bill[k]){
                temp = temp+Number(props.bill[k][j])
            };
        };
        setTotal(temp);
    },[props.bill]);

    return (
        <div className=" border border-2 rounded">
            <div className="border-bottom">
                <h1 className="mx-2">Billing</h1>
            </div>
            <div className="m-2">
                {
                    Object.keys(props.bill).map((st)=>{
                        return (
                            <div className="p-2">
                                <h4>{st}</h4>
                                {
                                    props.bill && Object.keys(props.bill[st]).map((s)=>{
                                        return (
                                            <div className="p-2">
                                                <b>{s}:{props.bill[st][s]}</b>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                <h1>Total:{total}</h1>
                {
                    total!== 0 && <button className="btn btn-outline-success" onClick={()=>{navigate(`/booking/payment/${total}`)}}>Proceed For Payment</button>
                }
            </div>
        </div>
    )
};

export default Billing;