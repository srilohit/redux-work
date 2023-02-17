import {connect} from 'react-redux';
import React,{useState} from 'react';
import { addTodo,delTodo } from '../store/action';

var Todolist =(props)=>{
    //console.log(props);
    const [newTodo,setNewTodo] = useState('');

    var deltask =(i)=>{
        props.delprop(i);
    };  

    return (
        <div className='border border-2 m-2 p-2 border-success'>
            <h1>Todolist</h1>
            <input type="text" onChange={(z)=>{setNewTodo(z.target.value)}}/>
            <button onClick={()=>{props.handlenewtodo(newTodo)}}>Add Todo</button>
            <ul>
                {
                    props.alltodos.map((t,i)=>{
                        return (
                            <li>
                                {t}
                                <button onClick={()=>{deltask(i)}}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default connect(
        function(state){return state.todos},
        function(dispatch){
            return {
                handlenewtodo:(nt)=>{dispatch(addTodo(nt))},
                delprop:(de)=>{dispatch(delTodo(de))}
            }
        })
    (Todolist);