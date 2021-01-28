import React from "react"
import "../styles/NavBar.css"
import logo from "../assets/star-wars.jpg"

const NavBar = () =>{

    return(
        <div className="container-navBar">
            <div className="container-logo">
                <img src={logo} alt="logo"/>
            </div>
        </div>
    )
}

export default NavBar