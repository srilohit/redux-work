import React from "react";
import { increment,decrement,reset } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";

var Counter =()=>{
     
    var count = useSelector((state)=>{return state.counter.count});
    var dispatch = useDispatch();
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
    )
}

export default Counter;