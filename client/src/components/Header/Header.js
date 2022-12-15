import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <>
      <header id="header">
         <div className="Nav_main">
            <div className="nav_bar">
               <div className="logo">
                  <h1>Tommato</h1>
               </div>
               <div className="menu_list">
                  <ul>
                     <li><a href='/'>Log in</a></li>
                     <li><a href='/'>Sign Up</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </header>
    </>
  )
}
