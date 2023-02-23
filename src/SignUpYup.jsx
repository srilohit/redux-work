import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

var SignUpYup = ()=>{

    

    const myform = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            firstname:Yup.string().max(8).min(3,'*too small').required('*first name is mandatory'),
            lastname:Yup.string().max(5).required('*last name is mandatory'),
            email:Yup.string().email('*your email is not valid').required('*email is mandatory'),
            password:Yup.string().required('*enter password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'*given password is not in the required format')
        }),
        onSubmit:(values)=>{
            console.log('form submit',values)
        }
    });

    
    return (
        <div className="border border-2 border-success m-2 p-2 text-center bg-warning">
            <h1>Registration using YUP</h1>
            <form onSubmit={myform.handleSubmit}>
                <label htmlFor="firstname">FirstName</label>&nbsp;&nbsp;
                <input className="border border-dark rounded bg-warning" type="text" name="firstname" id="firstname" onChange={myform.handleChange} onBlur={myform.handleBlur} value={myform.values.firstname}/>
                <h6 className="text-danger">{myform.touched.firstname && myform.errors.firstname}</h6>
                 
                
                <label htmlFor="lastname">LastName</label>&nbsp;&nbsp;
                <input className="border border-dark rounded bg-warning" type="text" name="lastname" id="lastname" onChange={myform.handleChange} onBlur={myform.handleBlur} value={myform.values.lastname}/> 
                <h6 className="text-danger">{myform.touched.lastname && myform.errors.lastname}</h6>
                

                <label htmlFor="email">Email</label>&nbsp;&nbsp;
                <input className="border border-dark rounded bg-warning" type="email" name="email" id="email" onChange={myform.handleChange} onBlur={myform.handleBlur} value={myform.values.email}/> 
                <h6 className="text-danger">{myform.touched.email &&myform.errors.email}</h6>
                

                <label htmlFor="password">Password</label>&nbsp;&nbsp;
                <input className="border border-dark rounded bg-warning" type="password" name="password" id="password" onChange={myform.handleChange} onBlur={myform.handleBlur} value={myform.values.password}/> 
                <h6 className="text-danger">{myform.touched.password &&myform.errors.password}</h6>
                
                <button type="submit" className="btn btn-outline-dark">Submit</button>
            </form>
        </div>
    )
};

export default SignUpYup;