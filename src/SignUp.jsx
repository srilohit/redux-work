import React from "react";
import { useFormik } from "formik";

var SignUp = ()=>{

    var validate = (values)=>{
        var errors = {};
        if(values.firstname === null || values.firstname === ''){
            errors.firstname = '*first name is required field';
        }
        if(values.lastname === null || values.lastname === ''){
            errors.lastname = '*last name is required field';
        }
        if(!values.email){
            errors.email = '*email is mandatory';
        }
        if(!values.password){
            errors.password = '*enter your password';
        }
        return errors;
    };

    const myform = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:''
        },
        validate:validate,
        onSubmit:(values)=>{
            console.log('form submit',values)
        }
    });

    
    return (
        <div className="border border-2 border-primary m-2 p-2 text-center bg-info">
            <h1>Registration using FORMIK</h1>
            <form onSubmit={myform.handleSubmit}>
                <label htmlFor="firstname">FirstName</label>&nbsp;&nbsp;
                <input className="border border-white rounded bg-info" type="text" name="firstname" id="firstname" onChange={myform.handleChange} onBlur={myform.handleBlur} value={myform.values.firstname}/>
                <h6 className="text-danger">{myform.touched.firstname &&myform.errors.firstname}</h6>
                
                <label htmlFor="lastname">LastName</label>&nbsp;&nbsp;
                <input className="border border-white rounded bg-info" type="text" name="lastname" id="lastname" onChange={myform.handleChange} onBlur={myform.handleBlur} value={myform.values.lastname}/> 
                <h6 className="text-danger">{myform.touched.lastname &&myform.errors.lastname}</h6>
                

                <label htmlFor="email">Email</label>&nbsp;&nbsp;
                <input className="border border-white rounded bg-info" type="email" name="email" id="email" onChange={myform.handleChange} onBlur={myform.handleBlur} value={myform.values.email}/>
                <h6 className="text-danger">{myform.touched.email &&myform.errors.lastname}</h6>

                <label htmlFor="password">Password</label>&nbsp;&nbsp;
                <input className="border border-white rounded bg-info" type="password" name="password" id="password" onChange={myform.handleChange} onBlur={myform.handleBlur} value={myform.values.password}/>
                <h6 className="text-danger">{myform.touched.password &&myform.errors.lastname}</h6>
                <button type="submit" className="btn btn-outline-dark">Submit</button>
            </form>
        </div>
    )
};

export default SignUp;