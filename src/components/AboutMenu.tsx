import React from "react";
import {NavLink} from 'react-router-dom'


const selectedStyle = {
    backgroundColor: "white", color: "slategray"
}

const AboutMenu = ({match}) => <div className={"list-menu"}>
    <li>
        <NavLink to={"/list"} style={match.isExact && selectedStyle}>[회사]</NavLink>
    </li>
    <li>
        <NavLink to={"/list/history"} activeStyle={selectedStyle}>[연혁]</NavLink>
    </li>
    <li>
        <NavLink to={"/list/service"} activeStyle={selectedStyle}>[서비스]</NavLink>
    </li>
    <li>
        <NavLink to={"/list/location"} activeStyle={selectedStyle}>[위치]</NavLink>
    </li>
</div>
export default AboutMenu