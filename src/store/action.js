import { ADDTODO,DELETE,INC,DEC,RESET,LIKE,DISLIKE,INITCOUNTRIES } from "./actionTypes"
import axios from "axios";

export function addTodo(newtodo){
    return {type:ADDTODO,playload:newtodo}
}
export function delTodo(index){
    return {type:DELETE,playload:index}
}
export function incCounter(){
    return {type:INC}
}
export function decCounter(){
    return {type:DEC}
}
export function resCounter(){
    return {type:RESET}
}
export function likeCount(){
    return {type:LIKE}
}
export function dislikeCount(){
    return {type:DISLIKE}
}
export function initCountries(){
    return (dispatch)=>{
        axios.get('https://restcountries.com/v2/all').then((res)=>{
        dispatch({type:INITCOUNTRIES,playload:res.data});
    })
    }
}
