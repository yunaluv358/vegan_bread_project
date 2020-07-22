import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './home.css'; //Import here your file style
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="nav">
            <div className="nav-item"> 메뉴
                <h1> [홈] </h1>
                <nav>
                    <Link to={"about"}> [회사소개] </Link>
                    <Link to={"events"}>[이벤트]</Link>
                    <Link to={"products"}>[제품]</Link>
                    <Link to={"contact"}>[고객 지원]</Link>
                </nav>


            </div>
        </div>)
}

export default Home;