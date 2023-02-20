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
        <div className="border border-2 border-success m-2 p-2 bg-black">
            <img src="https://img.etimg.com/thumb/msid-77515791,width-1070,height-580/photo.jpg" width={'150px'} height={'60px'} alt="" />
            <b>
                {
                    products && products.map((p)=>{
                        return <li className="text-success border border-1 border-success m-2 p-2">{p.title}</li>
                    })
                }
            </b>
        </div>
    )
}

export default Products;