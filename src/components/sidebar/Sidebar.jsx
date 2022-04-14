import React from 'react'
import "./sidebar.css";
import {Link} from "react-router-dom"

export default function Sidebar() {
  return (
    
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
         
            <ul className='sidebarList'>
            <Link to='./' className='link'>    <li className='sidebarListItem active'>
                
                Home
            </li>
            </Link >
             
        <Link to='./details' className='link'>    <li className='sidebarListItems active'>
                
                Enrollment
            </li>
            </Link >
                <li className='sidebarListItems active'>
                
                    Payment
                </li>
              
                <Link to="/vocher" className='link'>
                <li className='sidebarListItems active'>
           
                  Reports
                </li>
                </Link>
              
            </ul>
        </div>
       
       

       </div>
      
    
  )
}