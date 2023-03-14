import React from "react";
import { Link } from "react-router-dom";

const EndPage =()=>{

    return (
        <div className="text-warning text-center" style={{marginTop:'15%'}}>
            <h1>THANK YOU</h1>
            <h2>VISIT AGAIN</h2>
            <Link to="/">Back to HomePage</Link>
        </div>
    )
};

export default EndPage;