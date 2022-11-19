import React from "react";
import "./Navbar.scss"
import {  Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Navbar() {
  
    return (
      <>
        <nav className="main-nav">
            {/* 1st logo part  */}
            <div className="logo">
               <Header/>
            </div>

           
        </nav>
<Outlet/>
     
    </>
  );
}

export default Navbar;
