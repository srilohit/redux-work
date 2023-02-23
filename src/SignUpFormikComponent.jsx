import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';

var SignUpFormikComponent = ()=>{

    return (
        <div className="border border-2 border-success m-2 p-2 text-center bg-secondary">
            <h1 className="text-white">Registration using FORMIK COMPONENT</h1>

            <Formik 
                initialValues={
                    {
                        firstname:'',
                        lastname:'',
                        email:'',
                        password:''
                    }
                }
                validationSchema={
                    Yup.object({
                        firstname:Yup.string().max(8).min(3,'*too small').required('*first name is mandatory'),
                        lastname:Yup.string().max(5).required('*last name is mandatory'),
                        email:Yup.string().email('*your email is not valid').required('*email is mandatory'),
                        password:Yup.string().required('*enter password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'*given password is not in the required format')
                    })
                }
                onSubmit={(values)=>{
                    console.log('form submit',values)
                }}
            >
                {
                    (myform)=>{
                        return (
                            <form onSubmit={myform.handleSubmit}>
                                <label htmlFor="firstname" className="text-white">FirstName</label>&nbsp;&nbsp;
                                <input className="border border-white rounded bg-secondary text-white" type="text" {...myform.getFieldProps('firstname')} value={myform.values.firstname}/>
                                <h6 className="text-danger">{myform.touched.firstname && myform.errors.firstname}</h6>
                                
                                <label htmlFor="lastname" className="text-white">LastName</label>&nbsp;&nbsp;
                                <input className="border border-white rounded bg-secondary text-white" type="text" {...myform.getFieldProps('lastname')} value={myform.values.lastname}/> 
                                <h6 className="text-danger">{myform.touched.lastname && myform.errors.lastname}</h6>
    
                                <label htmlFor="email" className="text-white">Email</label>&nbsp;&nbsp;
                                <input className="border border-white rounded bg-secondary text-white" type="email" {...myform.getFieldProps('email')} value={myform.values.email}/> 
                                <h6 className="text-danger">{myform.touched.email &&myform.errors.email}</h6>
                                
    
                                <label htmlFor="password" className="text-white">Password</label>&nbsp;&nbsp;
                                <input className="border border-white rounded bg-secondary text-white" type="password" {...myform.getFieldProps('password')} value={myform.values.password}/> 
                                <h6 className="text-danger">{myform.touched.password &&myform.errors.password}</h6>
                                
                                <button type="submit" className="btn btn-outline-light">Submit</button>
                            </form>
                        )
                    }
                }
            </Formik>

            
        </div>
    )
};

export default SignUpFormikComponent;