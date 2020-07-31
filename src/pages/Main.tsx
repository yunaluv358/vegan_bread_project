import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from "../home/Home";
import Breads from "../bread/Breads";
import Search from "../search/Search";
import About from "../about/About";
import Signin from "../member/Signin";
import Signup from "../member/Signup";
import Contact from "../contact/Contact";



const Main: React.FC = () => {
    return <div>
        <BrowserRouter>
            <div className="main">
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/about" component = {About}/>
                    <Route path="/breads" component = {Breads} />
                    <Route path="/search" component ={Search} />
                    <Route path="/signIn" component = {Signin} />
                    <Route path="/signUp" component = {Signup}/>
                    <Route path="/contact" component = {Contact}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
}
export default Main