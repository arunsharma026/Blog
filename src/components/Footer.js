import React from 'react'
import { Link } from 'react-router-dom' 
import  Subscribe from './Subscribe'

const Footer = () => {
  return (
    <>
    <footer className="fl-wrap main-footer">
         <div className="container">
            <div className="footer-widget-wrap fl-wrap">
               <div className="row">
                  <div className="col-md-4">
                     <div className="footer-widget">
                        <div className="footer-widget-content">
                           <Link to="/" className="footer-logo"><img src="assets/images/flogo.png" alt="" /></Link>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eaque ipsa quae ab illo inventore veritatis et quasi architecto. </p>
                           <div className="footer-social fl-wrap">
                              <ul>
                                 <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook-f"></i></a></li>
                                 <li><a href="https://twitter.com/home" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                 <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i></a></li> 
                                 <li><a href="https://in.pinterest.com/" target="_blank"><i className="fa fa-pinterest-p"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-2">
                     <div className="footer-widget">
                        <div className="footer-widget-title">Categories </div>
                        <div className="footer-widget-content">
                           <div className="footer-list footer-box fl-wrap">
                              <ul>
                                 <li> <Link to="/blog">Politics</Link></li>
                                 <li> <Link to="/Category">Technology</Link></li>
                                 <li> <Link to="/Category">Business</Link></li>
                                 <li> <Link to="/Category">Sports</Link></li>
                                 <li> <Link to="/Category">Science</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-2">
                     <div className="footer-widget">
                        <div className="footer-widget-title">Links</div>
                        <div className="footer-widget-content">
                           <div className="footer-list footer-box fl-wrap">
                              <ul>
                                 <li> <Link to="/">Home</Link></li>
                                 <li> <Link to="/about">About</Link></li>
                                 <li> <Link to="/contact">Contacts</Link></li>
                                 <li> <Link to="/blog">News</Link></li> 
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="footer-widget">
                        <div className="footer-widget-title">Subscribe</div>
                        <div className="footer-widget-content">
                           <div className="subcribe-form fl-wrap">
                              <p>Want to be notified when we launch a new template or an udpate. Just sign up and we'll send you a notification by email.</p>
                              <Subscribe />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer-bottom fl-wrap">
            <div className="container">
               <div className="copyright"><span>&#169; Blog X</span> . All rights reserved. </div>
               <div className="to-top"> <i className="fa fa-caret-up"></i></div>
               <div className="subfooter-nav">
                  <ul>
                     <li><Link to="#">Terms & Conditions</Link></li>
                     <li><Link to="#">Privacy Policy</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>

 
    
    </>
  )
}

export default Footer