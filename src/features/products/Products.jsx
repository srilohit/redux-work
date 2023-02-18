import React,{useEffect} from "react";
import { GetProducts } from "../../App/services";
import { useSelector, useDispatch } from "react-redux";

var Products =()=>{

    var dispatch = useDispatch();
    var products = useSelector(state=>state.products.products)
    useEffect(()=>{
        dispatch(GetProducts());
    },[])

    return (
        <div className="border border-2 border-success m-2 p-2">
            <h1 className="text-success">D-Mart</h1>
            <b>
                {
                    products && products.map((p)=>{
                        return <li>{p.title}</li>
                    })
                }
            </b>
        </div>
    )
}

export default Products;