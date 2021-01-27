import React from "react"
import "../styles/NavBar.css"
import logo from "../assets/star-wars.jpg"

const NavBar = () =>{

    return(
        <div className="container-navBar">
            <div className="container-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="container-link">
                <ul className="wrapper-link">
                    <li>People</li>
                    <li>Film</li>
                    <li>Starships</li>
                    <li>Vehicles</li>
                    <li>Species</li>
                    <li>Planets</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar