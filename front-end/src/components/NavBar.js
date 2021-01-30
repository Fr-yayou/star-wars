import React from "react"
import logo from "../assets/star-wars.jpg"
import NavbarCss from "../styles/NavBar.module.css"

const NavBar = () =>{

    return(
        <div className={NavbarCss.containerNavBar}>
            <div className={NavbarCss.containerLogo}>
                <img className={NavbarCss.imageLogo} src={logo} alt="logo"/>
            </div>
        </div>
    )
}

export default NavBar