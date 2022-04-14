import React from 'react'
import "./vocher.css"
import {Link} from "react-router-dom"

function Vocher() {
  return (
    <div className="container mt-5">
    <div className="d-flex justify-content-center row">
        <div className="col-md-8">
            <div className="p-3 bg-white rounded">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-uppercase">Vocher</h1>
                        <div className="billed"><span className="font-weight-bold text-uppercase">Billed:</span><span className="ml-1">Chetan jain</span></div>
                        <div className="billed"><span className="font-weight-bold text-uppercase">Date:</span><span className="ml-1">apr 13, 2022</span></div>
                        <div className="billed"><span className="font-weight-bold text-uppercase">Order ID:</span><span className="ml-1">#1345345</span></div>
                    </div>
                    <div className="col-md-6 text-right mt-3">
                        <h4 className="text-danger mb-0">Alchemy</h4><span>abcd@alechmy.com</span>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Course</th>
                                    <th>Duration</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Full Stack Developer</td>
                                    <td>3 Month</td>
                                    <td>Rs. 50,000/-"</td>
                                    <td>50,000/-</td>
                                </tr>
                                <tr>
                                    <td>Practitioner. Certified Cloud Practitioner.</td>
                                    <td>3 Months</td>
                                    <td> Rs. 6888/-</td>
                                    <td> Rs. 6888/-</td>
                                </tr>
                                <tr>
                                    <td>MERN Stack Develope</td>
                                    <td>3 Months</td>
                                    <td> Rs. 24,237/-</td>
                                    <td> Rs. 24,237/-</td>
                                </tr>
                                <tr>
                                    <td>Overview of Managed PostgreSQL with Amazon RDS and Aurora</td>
                                    <td>3 Months</td>
                                    <td> Rs. 19,888/-</td>
                                    <td> Rs. 19,888/-</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Total</td>
                                    <td>56,888</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              
                <div className="text-right mb-3">
                <Link to = "/payment">
                    <button className="btn btn-danger btn-sm mr-5" type="button">Pay Now</button>
                </Link>
                <br></br>
               
                    </div>
                    <div className="text-right mb-3">
                    <Link to = "/details">
                    <button className="btn btn-danger btn-sm mr-5" type="button">Pay Later</button>
                </Link>
                </div>
                    
            </div>

        </div>
    </div>
</div>
  )
}

export default Vocher