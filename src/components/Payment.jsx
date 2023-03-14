import React from "react";
//import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Payment =()=>{

    var {amount} = useParams();
    const navigate = useNavigate();
    
    const confirmPayment =()=>{
        window.confirm('CONFIRM YOUR PAYMENT');
        navigate('/endpage');
    };

    return (
        <div className="m-4 border border-2 rounded">
            <div className="border-bottom">
                <h2 className="mx-3 text-primary">Payment Method</h2>
            </div>
            <div className="my-3 mx-3">
                <h3 className="text-danger">
                    Amount:  &#8377;{amount}
                </h3>
                <button className="w-25 btn btn-outline-success" onClick={confirmPayment}>Pay Now</button>
            </div>
            <div className="">
                <div class="d-flex align-items-start">
                    <div className="m-3">
                        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><i class="bi bi-credit-card"></i> Credit/Debit Card</button>
                            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="bi bi-bank"></i> Internet Banking</button>
                            <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="bi bi-wallet-fill"></i> UPI</button>
                            <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="bi bi-cash-coin"></i> Others</button>
                        </div>
                    </div>
                    <div className="m-3 w-50 mx-auto">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                                <form action="" className="form-control">
                                    <input type="text" className="form-control mb-3 mt-3" placeholder="Holder Name..."/>
                                    <input type="number" className="form-control my-3" placeholder="Enter Card Number..." />
                                    <div className="d-flex flex-wrap">
                                        <div className="w-50">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected disabled>Month</option>
                                                <option value="">January</option>
                                                <option value="">February</option>
                                                <option value="">March</option>
                                                <option value="">April</option>
                                                <option value="">May</option>
                                                <option value="">June</option>
                                                <option value="">July</option>
                                                <option value="">August</option>
                                                <option value="">September</option>
                                                <option value="">October</option>
                                                <option value="">November</option>
                                                <option value="">December</option>
                                            </select>
                                        </div>
                                        <div className="w-50">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected disabled>Year</option>
                                                <option value="">2023</option>
                                                <option value="">2024</option>
                                                <option value="">2025</option>
                                                <option value="">2026</option>
                                                <option value="">2027</option>
                                                <option value="">2028</option>
                                                <option value="">2029</option>
                                                <option value="">2030</option>
                                                <option value="">2031</option>
                                                <option value="">2032</option>
                                                <option value="">2033</option>
                                                <option value="">2034</option>
                                                <option value="">2035</option>
                                            </select>
                                        </div>
                                    </div>
                                    <input type="number" className="form-control w-50 my-3" placeholder="CVV" />
                                </form>
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                                <form action="" className="form-control">
                                    <div className="my-3">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected disabled>select your bank</option>
                                            <option value="">Axis</option>
                                            <option value="">BOB</option>
                                            <option value="">BOI</option>
                                            <option value="">Canara Bank</option>
                                            <option value="">Indian Bank</option>
                                            <option value="">IOB</option>
                                            <option value="">IDBI</option>
                                            <option value="">SBI</option>
                                            <option value="">UNION Bank</option>
                                        </select>
                                    </div>
                                    <input type="text" className="form-control my-3" placeholder="Username..." />
                                    <input type="text" className="form-control my-3" placeholder="Holder Name..." />
                                    <input type="number" className="form-control my-3" placeholder="Account Number..." />
                                    <input type="text" className="form-control my-3" placeholder="Branch..." />
                                    <input type="text" className="form-control my-3" placeholder="IFSC Code..." />
                                    <input type="number" className="form-control my-3" placeholder="Mobile Number..." />
                                </form>
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                                <form action="" className="form-control">
                                    <div className="my-3 mx-5">
                                        <img src="https://img.icons8.com/color/512/phone-pe.png" width={'30px'} height='30px' alt="" />
                                        <label htmlFor="" className="form-label">PhonePe</label>
                                        <input type="text" className="form-control w-75" placeholder="Example: 1234567890@ybl" />
                                    </div>
                                    <div className="my-3 mx-5">
                                        <img src="https://img.icons8.com/color/512/google-pay-india.png" width={'30px'} height='30px' alt="" />
                                        <label htmlFor="" className="form-label">GPay</label>
                                        <input type="text" className="form-control w-75" placeholder="Example: abc@oksbl" />
                                    </div>
                                    <div className="my-3 mx-5">
                                        <img src="https://cdn-icons-png.flaticon.com/512/825/825454.png" width={'30px'} height='30px' alt="" />&nbsp;
                                        <label htmlFor="" className="form-label">Paytm</label>
                                        <input type="text" className="form-control w-75" placeholder="Example: 1234567890@paytm" />
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                                <form action="" className="form-control">
                                    <h1>hi</h1>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Payment;