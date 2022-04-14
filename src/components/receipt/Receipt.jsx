import React from 'react'
import "./receipt.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Receipt() {
     
     const diffToast = () => {
        toast("reciept sent to your email",{
            position:"top-center"
        })
        
     }

    return (
        <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
            <div className="col-md-10">
                <div className="receipt bg-white p-3 rounded">
                    <img src="data:image/jpeg;base64,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" width="120"/>
                    <h4 className="mt-2 mb-3">Your Training is confirmed!</h4>
                    <h6 className="name">Hello Chetan Jain,</h6><span className="fs-12 text-black-50">your Training has been confirmed </span>
                    <hr/>
                    <div className="d-flex flex-row justify-content-between align-items-center order-details">
                        <div><span className="d-block fs-12">Date of activiate</span><span className="font-weight-bold">12 April 2022</span></div>
                        <div><span className="d-block fs-12">Id number</span><span className="font-weight-bold">OD44434324</span></div>
                        <div><span className="d-block fs-12">Payment method</span><span className="font-weight-bold">Credit card</span>
                        <img className="ml-1 mb-1" src="https://i.imgur.com/ZZr3Yqj.png" width="20"/></div>
                        <div><span className="d-block fs-12">Timg of classNamees</span><span className="font-weight-bold text-success">10:30 AM</span></div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center product-details">
                        <div className="d-flex flex-row product-name-image">
                            <img className="rounded" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png" width="80"/>
                            <div className="d-flex flex-column justify-content-between ml-2">
                                <div><span className="d-block font-weight-bold p-name"> Full Stack Developer</span><span className="fs-12"></span></div><span className="fs-12">month: 3</span>
                            </div>
                        </div>
                        <div className="product-price">
                            <h5>Rs. 50,000/-</h5>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center product-details">
                        <div className="d-flex flex-row product-name-image">
                            <img className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCJreUGOMTzEFA2JWZzcf5o60g95Lcv_9Ig&usqp=CAU" width="80"/>
                            <div className="d-flex flex-column justify-content-between ml-2">
                                <div><span className="d-block font-weight-bold p-name">Overview of Managed PostgreSQL with Amazon RDS and Aurora</span><span className="fs-12"></span></div><span className="fs-12">month: 3</span>
                            </div>
                        </div>
                        <div className="product-price">
                            <h6>Rs. 19,888/-</h6>
                        </div>
                    </div>
                    <div className="mt-5 amount row">
                        <div className="d-flex justify-content-center col-md-6">
                            <img src="https://i.imgur.com/AXdWCWr.gif" width="250" height="100"/></div>
                        <div className="col-md-6">
                            <div className="billing">
                                <div className="d-flex justify-content-between"><span>Subtotal</span><span className="font-weight-bold">69,888</span></div>
                               
                                <div className="d-flex justify-content-between mt-2"><span>Tax</span><span className="font-weight-bold">1155</span></div>
                                <div className="d-flex justify-content-between mt-2"><span className="text-success">Discount</span><span className="font-weight-bold text-success">2250</span></div>
                                <hr/>
                                <div className="d-flex justify-content-between mt-1"><span className="font-weight-bold">Total</span><span className="font-weight-bold text-success">57.698</span></div>
                            </div>
                        </div>
                    </div><span className="d-block">Expire date</span><span className="font-weight-bold text-success">12 jun 2022</span><span className="d-block mt-3 text-black-50 fs-15"></span>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center footer">
                        <div className="thanks"><span className="d-block font-weight-bold">Thank you</span><span>Alchemy team</span></div>
                        <div className="d-flex flex-column justify-content-end align-items-end"><span className="d-block font-weight-bold">Need Help?</span><span>Call - 974493933</span></div>
                    </div>
                    <div>
                        <button  onClick={diffToast} className='submit'>Sumbit</button>
                        <ToastContainer />
                         
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
                )
}

                export default Receipt;