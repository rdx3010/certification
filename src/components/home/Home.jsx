import React from 'react'
import './home.css';
import {Link} from "react-router-dom"

export default function Home() {
  return (
      <>
    <section class="header">
        
    <div class="text-box">
        <h1>Alchemy Training Certification</h1>
        <p>
            Established in the year 2014, Alchemy Techsol delivers a complete suite of disruptive technologies that bring about true transformation - industry-pioneering Infrastructure Managed Services powered by AI, Machine Learning and Deep Learning; Information Security and Digital Engineering. </p>
        <a href="" class="Hero-btn">Visit us to know more</a>
    
    </div>

</section>



<section class="course">
    <h1>Certification We Offer</h1>
    <p>Lorem ipsum dolor sit  veritatis velit, cum necessitatibus blanditiis.</p>
    <div class="row">
        <div class="course-col">
            <h3>Certification platform development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore repudiandae fugit expedita veritatis necessitatibus tenetur nisi itaque, earum deleniti, nam, id ea quisquam eius modi provident tempore culpa qui?</p>
            <button className='topheader'>Buy Now</button>
        </div>
        <div class="course-col">
            <h3>Certification platform maintenance</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore repudiandae fugit expedita veritatis necessitatibus tenetur nisi itaque, earum deleniti, nam, id ea quisquam eius modi provident tempore culpa qui?</p>
            <button className='topheader'>Buy Now</button>
        </div>
        <div class="course-col">
            <h3>Certification of IBM Cloud</h3>
            <br/>      
             
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore repudiandae fugit expedita veritatis necessitatibus tenetur nisi itaque, earum deleniti, nam, id ea quisquam eius modi provident tempore culpa qui?</p>
            <Link to="details">
            <button className='topheader'>Buy Now</button>
            </Link>
        </div>
    </div>
</section>

<section class="campus">
    <h1>Our Global Campus</h1>
    <p>Lorem ipsum dolor sit  veritatis velit, cum necessitatibus blanditiis.</p>
    <div class="row">
        <div class="campus-col">
            <img src="https://www.google.com/maps/vt/data=4jbePPsrBjzsK8UJFKi6pFrZxnXiUuCl0kyU_rNYTviDy0x640PgnpPHt4f0WidXqFEm6G9g-rcvNBTPRWOjxnJD5P04XEJMw2ykLXWCJ80POCKreKzDUZX30PPrkHraTg33f5aJL_C6ZpskEDxEvygXIamkCgqjv9ExBVPi17NZgl2MRf39" height="95%" /> 
            <div class="layer">
                <h3>BANGALORE</h3>
            </div>
        </div>
        
    </div>
</section>



<section class="testinomial">
   <h1>What Our Student Says</h1>
   <p>Lorem ipsum dolor sit  veritatis velit, cum necessitatibus blanditiis.</p>
   <div class="row">
       <div class="testinomial-col">
           <img src="https://media.istockphoto.com/photos/handsome-bearded-young-businessman-using-laptop-at-workplace-picture-id1059550972?k=20&m=1059550972&s=612x612&w=0&h=dDs7OB40Ci4nEOMwNZJRTapPV7Xsqd2q-jyostptQA4="/>
           <div>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quam amet aut, reiciendssdfgddgi</p>
               <h3>Chetan</h3>
               <i class="fa fa-star"></i>
               <i class="fa fa-star"></i>
               <i class="fa fa-star"></i>
               <i class="fa fa-star"></i>
               <i class="fa fa-star-half-o"></i>

           </div>
       </div>
       <div class="testinomial-col">
          <img src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quam amet aut, reiciendssdfgddgi</p>
            <h3>Rohit</h3>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
          </div>
       </div>
   </div>

</section>

<section class="cnt">
   <h1>Enroll for Online Certification <br/>Anywhere From World </h1>
   <a href="" class="Hero-btn">Enroll Now</a>

</section>

<section class="footer">
<h4>About Us</h4>
<p>Lorem ipsum dolor sit, amet consectetur adipisicusantium corrupti rerum quod officia consequuntur.<br/> electus atque qui vel minus numquam commodi unde laudantium.</p>
<div>
    <i class="fa fa-facebook"></i>
    <i class="fa fa-twitter"></i>
    <i class="fa fa-instagram"></i>
    <i class="fa fa-linkedin"></i>
</div>
<p>Made with <i class="fa fa-heart-o" ></i> by easy way</p>
</section>
<script src="https://use.fontawesome.com/0f4bd21158.js"></script>


</>
  )
}
