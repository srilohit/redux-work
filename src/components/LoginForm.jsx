import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Field, Formik } from "formik";
import * as Yup from 'yup';

const LoginForm =()=>{

    const [user,setUser] = useState([]);
    console.log(user);

    useEffect(()=>{
        axios.get('http://localhost:4000/signup').then((res)=>{
            setUser([...res.data])
            //console.log(res.data);
        })
    },[]);


    return(
        <div className="login-text">
        <div className="w-75 mx-auto">
            <div>
                <Formik
                    initialValues={{
                        'username':'',
                        'password':''
                    }}

                    validationSchema={Yup.object({
                        username:Yup.string().required('*enter your username'),
                        password:Yup.string().required('*enter your password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
                    })}

                    onSubmit={(values)=>{
                        //console.log(values);
                        
                    }}
                >
                    {
                        (formik)=>{
                            return(
                                <form onSubmit={formik.handleSubmit} className="form-control" style={{backgroundColor: 'rgb(233,234,236)'}}>
                                    <h2 className="border-bottom">Login</h2>
                                    <label htmlFor="us" className="form-lable mt-2">Username</label>
                                    <Field name='username' className="form-control" placeholder='mail or mobile number'></Field>
                                    <div className="text-danger">{formik.touched.username && formik.errors.username}</div>

                                    <label htmlFor="ps" className="form-lable mt-2">Password</label>
                                    <Field name='password' className="form-control"></Field>
                                    <div className="text-danger">{formik.touched.password && formik.errors.password}</div>

                                    <div className="mt-1">
                                        <small>
                                            <Link to="">Forgot password?</Link>
                                        </small>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-dark w-25 mx-1 mt-2">Submit</button>
                                    </div>
                                    <div className="mt-3">
                                        <small>
                                            Don't have account? &nbsp;<Link to="/signup">Sign Up</Link>
                                        </small>
                                    </div>
                                </form>
                            )
                        }
                    }
                </Formik>

            

                {/* <form className="form-control" style={{backgroundColor: 'rgb(233,234,236)'}}>
                    <h2 className="border-bottom">Login</h2>
                    <label htmlFor="" className="form-lable mt-2">Username</label>
                    <input type="text" className="form-control" />
                    <label htmlFor="" className="form-lable mt-2">Password</label>
                    <input type="password" className="form-control" />
                    <div className="mt-1">
                        <small>
                            <Link to="">Forgot password?</Link>
                        </small>
                    </div>
                    <div>
                        <button className="btn btn-dark w-25 mx-1 mt-2">Submit</button>
                    </div>
                    <div className="mt-3">
                        <small>
                            Don't have account? &nbsp;<Link to="/signup">Sign Up</Link>
                        </small>
                    </div>
                    
                </form> */}
            </div>
        </div>
    </div>
    )
};

export default LoginForm;