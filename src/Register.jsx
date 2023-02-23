import React from "react";
import { Formik, Field } from "formik";
import * as Yup from 'yup';

const Register = ()=>{
    
    return (
        <div className="border border-2 border-secondary m-2 p-2 bg-danger">
            <h2>Registration Form</h2>
            <div>
                <Formik
                    initialValues={
                        {
                            firstname:'',
                            lastname:'',
                            dob:'',
                            gender:'',
                            email:'',
                            mobile:'',
                            city:'',
                            state:'',
                            sports:[]
                        }
                    }
                    validationSchema={
                        Yup.object({
                            firstname:Yup.string().max(5).min(3,'*more than 3 letters').required('*first name is mandatory'),
                            lastname:Yup.string().max(4).required('*last name is mandatory'),
                            dob:Yup.string().required('*type your date of birth'),
                            gender:Yup.string().required('*choose your gender'),
                            email:Yup.string().email('*enter valid email').required('*email is mandatory'),
                            mobile:Yup.string().min(10,'*should contain 10 number').required('*enter your contact no'),
                            city:Yup.string().required('*select your city'),
                            state:Yup.string().required('*select your state'),
                            sports:Yup.string().required('*select your game'),
                        })
                    }
                    onSubmit={(values)=>{
                            console.log(values);
                        }
                    }
                >
                    {
                        (filldetails )=>{
                            return (
                                <div className="d-flex justify-content-center text-center">
                                    <form onSubmit={filldetails.handleSubmit} className="form-control bg-dark border border-2 p-3" style={{width:'30%'}}>
                                        <label htmlFor="fn" className="text-white">FirstName</label> &nbsp;&nbsp;
                                        <Field name="firstname" className="bg-white border border-white rounded"></Field> 
                                        <h6 className="text-danger">{filldetails.touched.firstname && filldetails.errors.firstname}</h6>

                                        <label htmlFor="ln" className="text-white">LastName</label> &nbsp;&nbsp;
                                        <Field name="lastname" className="bg-white border border-white rounded"></Field>
                                        <h6 className="text-danger">{filldetails.touched.lastname && filldetails.errors.fastname}</h6>

                                        <label htmlFor="fn" className="text-white">Date of birth</label> &nbsp;&nbsp;
                                        <Field name="dob" type="date" className="bg-white border border-white rounded"></Field>
                                        <h6 className="text-danger">{filldetails.touched.dob && filldetails.errors.dob}</h6>

                                        <label htmlFor="gdr" className="text-white">Gender</label> &nbsp;&nbsp;
                                            <Field name="gender" type="radio" value="male" /><small className="text-white">male</small> &nbsp;
                                            <Field name="gender" type="radio" value="female" /><small className="text-white">female</small> &nbsp;
                                            <Field name="gender" type="radio" value="others" /><small className="text-white">others</small>
                                        <h6 className="text-danger">{filldetails.touched.gender && filldetails.errors.gender}</h6>

                                        <label htmlFor="ed" className="text-white">Email-Id</label> &nbsp;&nbsp;
                                        <Field name="email" type="email" className="bg-white border border-white rounded"></Field>
                                        <h6 className="text-danger">{filldetails.touched.email && filldetails.errors.email}</h6>

                                        <label htmlFor="cn" className="text-white">Contact-No</label> &nbsp;&nbsp;
                                        <Field name="mobile" type="number" className="bg-white border border-white rounded"></Field>
                                        <h6 className="text-danger">{filldetails.touched.mobile && filldetails.errors.mobile}</h6>

                                        <label htmlFor="city" className="text-white">City</label> &nbsp;&nbsp;
                                        <Field name="city" as="select" className="bg-white border border-white rounded">
                                            <option>select one</option>
                                            <option>Anantapur</option>
                                            <option>Bobili</option>
                                            <option>chitoor</option>
                                            <option>Duvada</option>
                                            <option>Guntur</option>
                                            <option>Visakhapatnam</option>
                                        </Field>
                                        <h6 className="text-danger">{filldetails.touched.city && filldetails.errors.city}</h6>

                                        <label htmlFor="state" className="text-white">State</label> &nbsp;&nbsp;
                                        <Field name="state" as="select" className="bg-white border border-white rounded">
                                            <option>select one</option>
                                            <option>Andhra Pradesh</option>
                                            <option>Bihar</option>
                                            <option>Chatthisgarh</option>
                                            <option>Delhi</option>
                                            <option>GOA</option>
                                            <option>Kerala</option>
                                            <option>Tamil Nadu</option>
                                        </Field>
                                        <h6 className="text-danger">{filldetails.touched.state && filldetails.errors.state}</h6>

                                        <label htmlFor="spt" className="text-white">Sports</label> &nbsp;&nbsp;
                                        <Field type="checkbox" name="sports" value="BasketBall"/><small className="text-white">BasketBall</small>&nbsp;&nbsp;
                                        <Field type="checkbox" name="sports" value="Cricket"/><small className="text-white">Cricket</small>&nbsp;&nbsp;
                                        <Field type="checkbox" name="sports" value="FootBall"/><small className="text-white">FootBall</small><br />
                                        <Field type="checkbox" name="sports" value="Kho-Kho"/><small className="text-white">Kho-Kho</small>&nbsp;&nbsp;
                                        <Field type="checkbox" name="sports" value="ThrowBall"/><small className="text-white">ThrowBall</small>&nbsp;&nbsp;
                                        <Field type="checkbox" name="sports" value="VolleyBall"/><small className="text-white">VolleyBall</small>
                                        <h6 className="text-danger">{filldetails.touched.sports && filldetails.errors.sports}</h6>

                                        <button type="submit" className="btn btn-outline-light">Confirm</button>
                                    </form>
                                </div>
                            )
                        }
                    }
                </Formik>
            </div>
        </div>
    )
} 

export default Register;