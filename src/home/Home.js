import React from "react";
import './home.css'; //Import here your file style
import { Link } from 'react-router-dom'

const Home = ()=>{
    return <>
        <div className="main">
            <img src={"https://garitonkids.com/wp-content/uploads/2020/03/2431_3.png"} width="256" height="180" alt="bread"/>
            <div className="nav">
                <div className="nav-item">
                    <h3> b r e a d </h3>
                    <br/>
                    <br/>
                    <nav>
                        <Link to={"breads"}> 빵 목록 &nbsp;</Link>
                        <Link to={"search"}> 내게 맞는 빵 찾기 &nbsp;&nbsp;&nbsp;</Link>
                        <Link to={"login"}> login &nbsp;</Link>
                        <Link to={"signUp"}> join &nbsp;</Link>
                    </nav>
                </div>
                </div>
            </div>

        <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="" className="">
            <div grid-col="4" grid-pad="1.5"></div>
            <div grid-col="8" grid-pad="1.5" className=""><a href="About" rel="history">About</a>&nbsp; &nbsp; <a
                href="contact-form" rel="history">Contact</a>&nbsp; &nbsp;&nbsp;<a
                href="https://www.instagram.com/thebreadblue_official/?hl=ko" rel="noopener noreferrer" target="_blank">Instagram</a></div>
        </div>

    </>
}
export default Home


