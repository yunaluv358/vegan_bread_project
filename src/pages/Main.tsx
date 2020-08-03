import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from "../home/Home";
import Breads from "../bread/Breads";
import Search from "../search/Search";
import About from "../about/About";
import Signin from "../member/Signin";
import Signup from "../member/Signup";
import Contact from "../contact/Contact";
import {Bread01, Bread02, Bread03, Bread04, Bread05, Bread06} from "../details";



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
                    <Route path="/bread01" component = {Bread01}/>
                    <Route path="/bread02" component = {Bread02}/>
                    <Route path="/bread03" component = {Bread03}/>
                    <Route path="/bread04" component = {Bread04}/>
                    <Route path="/bread05" component = {Bread05}/>
                    <Route path="/bread06" component = {Bread06}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
}
export default Main