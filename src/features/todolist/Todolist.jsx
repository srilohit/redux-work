import React from "react";
import { initial } from "./todolistSlice";
import { useSelector,useDispatch } from "react-redux";

var Todolist =()=>{

    var alltodolist = useSelector((state)=>{return state.todolist.alltodos});
    var dispatch = useDispatch();
    return (
        <div className="border border-2 border-success m-2 p-2">
            <h1>Todolist</h1> 
            <ul>
                {
                    alltodolist.map((t)=>{
                        return <li>t.{dispatch(initial())}</li>
                    })
                }
            </ul>
        </div>
    )
};

export default Todolist;