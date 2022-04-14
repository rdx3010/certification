import React from 'react'
import "./topbar.css"
import { Link } from "react-router-dom";


export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>Alchemy Techsol</span>
                </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                    <Link to="/login" className="link">
                 <button className='topheader'>Login</button>
                 
                 </Link>
                 <div className='topbarIconContainer'>
                 <Link to="/register" className="link">
                 <button className='topheader'>Register</button>
                 </Link>
                 </div>
             
                </div>
                
                </div>
        </div>
    </div>
  )
}
