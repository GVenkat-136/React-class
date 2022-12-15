import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <>
      <footer id="footer">
         <div className="footer_border ">
            <div className=" footer_header">
               <h1>TOMMATO</h1>
            </div>
            <div className="footer_detalis">
               <div className="menu1">
                  <ul>
                     <li>
                        <h1>ABOUT ZOMATO</h1>
                     </li>
                     <li>Who We Are</li>
                     <li>Blog</li>
                     <li>Work With Us</li>
                     <li>Investor Relations</li>
                     <li>Report Fraud</li>
                     <li>Contact Us</li>
                  </ul>
               </div>
               <div className="menu1">
                  <ul>
                     <li>
                        <h1>TOMAVERSE</h1>
                     </li>
                     <li>TOMMATO</li>
                     <li>Blinkit</li>
                     <li>Feeding India</li>
                     <li>Hyperpure</li>
                     <li>Tomaland</li>
                  </ul>
               </div>
               <div className="menu1">
                  <ul>
                     <li>
                        <h1>FOR RESTAURANTS</h1>
                     </li>
                     <li>Partner with us</li>
                     <li>App for you</li>
                  </ul>
                  <ul className="margin-top">
                     <li>
                        <h1>FOR ENTERPRISES</h1>
                     </li>
                     <li>TOMMATO For Work</li>
                  </ul>
               </div>
               <div className="menu1">
                  <ul>
                     <li>
                        <h1>LEARN MORE</h1>
                     </li>
                     <li>Privacy</li>
                     <li>Security</li>
                     <li>Terms</li>
                     <li>Sitemap</li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
    </>
  )
}
