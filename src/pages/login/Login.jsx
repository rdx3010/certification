import React from 'react'
import './login.css';
import {Link } from "react-router-dom"
     
export default function Login () {
  return (
    
    <div className="con">
            <div className="main active">
            <div className="top-div">
                <div className="msg-img"> 
                <h3>Alchemy Infotech </h3>
                </div>
                <h2>LOGIN</h2>  
            </div>
            <div className="input-text"> <input type="text" placeholder="Email" require/> </div>
            <div className="input-text"> <input type="password" placeholder="Password" require/> </div>
            <div className="buttons">
            <Link to="/details">
            <button className='topheader'>Login</button>
               </Link>
                </div>
            <div className="sign-in">
              <Link to="/register">
          <a  href='/register' > Register Here</a>
          </Link>
        </div> 
        </div>
       
    </div>

  )
}






