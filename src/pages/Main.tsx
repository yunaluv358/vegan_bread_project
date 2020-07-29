import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from "../home/Home";
import Breads from "../bread/Breads";
import Search from "../search/Search";
import About from "../about/About";
import Login from "../member/Login";
import SignUp from "../member/SignUp";



const Main: React.FC = () => {
    return <div>
        <BrowserRouter>
            <div className="main">
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/about" component = {About}/>
                    <Route path="/breads" component = {Breads} />
                    <Route path="/search" component ={Search} />
                    <Route path="/login" component = {Login} />
                    <Route path="/signUp" component = {SignUp}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
}
export default Main