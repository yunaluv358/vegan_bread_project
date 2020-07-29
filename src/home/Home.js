import React from "react";
// eslint-disable-next-line import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './home.css'; //Import here your file style
import { Link } from 'react-router-dom'

const Home = ()=>{
    return <>
        <div className="main">
            <img src="https://garitonkids.com/wp-content/uploads/2020/03/2431_3.png" width="256" height="180"/>
            <div className="nav">
                <div className="nav-item">
                    <h3> home </h3>
                    <nav>
                        <Link to={"about"}> about </Link>
                        <Link to={"list"}> 빵 목록 </Link>
                        <Link to={"search"}> 내게 맞는 빵 찾기 </Link>
                        <Link to={"login"}> 로그인 </Link>
                        <Link to={"signUp"}> 회원가입 </Link>
                    </nav>

                </div>
                </div>
            </div>



    </>
}
export default Home


