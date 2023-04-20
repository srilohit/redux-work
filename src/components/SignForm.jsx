import React, { useEffect, useState } from "react";
import axios from "axios";
import { Field,Form, Formik } from "formik";
import * as Yup from 'yup';
//import { Link } from "react-router-dom";

const SignForm =()=>{

    const [newUser,setNewUser] = useState({});

    useEffect(()=>{
        axios({
            method: 'post',
            url: 'http://localhost:4000/signup',
            data: newUser
        }).then(()=>{
            alert('added successfully')
        });
    },[newUser]);

    return(
        <div className="sign-text">
        <div className="w-75 mx-auto">
            <div>
                <Formik
                    initialValues={{
                        'username':'',
                        'fullname':'',
                        'mobile':'',
                        'email':'',
                        'password':'',
                        'rePassword':''
                    }}
                    
                    validationSchema={Yup.object({
                        username:Yup.string().max(30).min(10).required('*Please enter your email or mobile number'),
                        fullname:Yup.string().max(20).min(10).required('*enter your name'),
                        mobile:Yup.string().max(10).required('*enter your 10 digits mobile number'),
                        email:Yup.string().required('*enter your email'),
                        password:Yup.string().required('*enter your password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
                        rePassword:Yup.string().oneOf([Yup.ref('password'),null],'*password must match')
                    })}

                    onSubmit={(values)=>{
                        setNewUser({...values});
                    }}
                >

                    {
                        (formik)=>{

                            return(
                                <Form onSubmit={formik.handleSubmit} className="form-control" style={{backgroundColor: 'rgb(233,234,236)'}}>
                                    <h2 className="border-bottom text-center">Sign-Up</h2>
                                    <label htmlFor="us" className="form-lable mt-1">Username</label>
                                    <Field className="form-control" name="username" placeholder="mail or mobile number"></Field>
                                    <div className="text-danger">{formik.touched.username && formik.errors.username}</div>

                                    <label htmlFor="" className="form-lable mt-1">Full Name</label>
                                    <Field className="form-control" name="fullname"></Field>
                                    <div className="text-danger">{formik.touched.fullname && formik.errors.fullname}</div>

                                    <label htmlFor="" className="form-lable mt-1">Mobile</label>
                                    <Field className="form-control" name='mobile'></Field>
                                    <div className="text-danger">{formik.touched.mobile && formik.errors.mobile}</div>

                                    <label htmlFor="" className="form-lable mt-1">Email ID</label>
                                    <Field className="form-control" name='email'></Field>
                                    <div className="text-danger">{formik.touched.email && formik.errors.email}</div>

                                    <label htmlFor="" className="form-lable mt-1">Password</label>
                                    <Field className="form-control" name='password'></Field>
                                    <div className="text-danger"><small>{formik.touched.password && formik.errors.password}</small></div>

                                    <label htmlFor="" className="form-lable mt-1">Re-type Password</label>
                                    <Field className="form-control" name='rePassword'></Field>
                                    <div className="text-danger"><small>{formik.touched.rePassword && formik.errors.rePassword}</small></div>
                                    <div style={{textAlign:'center'}}>
                                        <button type="submit"  className="btn btn-dark w-25 mx-1 mt-3">Submit</button>
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
        </div>
    </div>
    )
};

export default SignForm;