import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './home.css'; //Import here your file style
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="nav">
            <div className="nav-item">
                <h1> [홈] </h1>
                <nav>
                    <Link to={"about"}> [빵 목록] </Link>
                    <Link to={"events"}>[내게 맞는 빵 찾기]</Link>
                    <Link to={"products"}>[로그인]</Link>
                    <Link to={"contact"}>[회원가입]</Link>
                </nav>
            </div>
        </div>)
}

export default Home;