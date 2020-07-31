import React from "react";
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const selectedStyle = {
    backgroundColor: "white", color: "slategray"
}

const MainMenu = () => <nav className={"main-menu"}>
    <NavLink to={"/"}><FaHome/></NavLink>
    <NavLink to={"/bread"} activeStyle={selectedStyle}>bread</NavLink>
    <NavLink to={"/events"} activeStyle={selectedStyle}>events</NavLink>
    <NavLink to={"/about"} activeStyle={selectedStyle}>about</NavLink>
    <NavLink to={"/contact"} activeStyle={selectedStyle}>contact</NavLink>
</nav>

export default MainMenu