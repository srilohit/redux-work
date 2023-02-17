import React,{useEffect} from "react";
import { connect } from "react-redux";
import { initCountries } from "../store/action";

var Countries =(props)=>{
   //console.log(props)
    useEffect(()=>{
        props.loadCountries();
    },[]);
    return (
        <div className='border border-2 m-2 p-2 border-secondary'>
            <h1>Countries</h1>
            <ol className="d-flex flex-wrap border border-2 border-primary">
                {
                    props.countries.country.map((c)=>{
                        return (
                            <li className="w-25">{c.name}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

function mapStateToProps(state){return state};
function mapDispatchToProps(dispatch){return {
    loadCountries:()=>{dispatch(initCountries())}
}}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);