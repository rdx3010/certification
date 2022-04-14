import React from 'react';
import "./payment.css"
import {Link} from 'react-router-dom'

function Payment() {
  return (
    <div className="container">
    <div className="page-header text-center">
        <h1>Credit Card Payment Gateway</h1>
    </div>
     {/* <!-- Credit Card Payment Form - START --> */}
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-md-6 col-md-offset-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <h3 className="text-center">Payment Details</h3>
                            <div className="inlineimage"> 
                            <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"/>
                             <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"/>
                              <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"/>
                               <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"/>
                                </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group"> <label>CARD NUMBER</label>
                                        <div className="input-group"> <input type="tel" className="form-control" placeholder="Valid Card Number" /> <span className="input-group-addon"><span className="fa fa-credit-card"></span></span> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-7 col-md-7">
                                    <div className="form-group"> <label><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label> <input type="tel" className="form-control" placeholder="MM / YY" /> </div>
                                </div>
                                <div className="col-xs-5 col-md-5 pull-right">
                                    <div className="form-group"> <label>CV CODE</label> <input type="tel" className="form-control" placeholder="CVC" /> </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group"> <label>CARD OWNER</label> <input type="text" className="form-control" placeholder="Card Owner Name" /> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="panel-footer">
                        <div className="row">
                            <div className="col-xs-12">
                                <Link to="/receipt"><button className="btn btn-success btn-lg btn-block">Confirm Payment</button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Payment