import React from "react";
import {About, Contact, Events, Home, Products, Error} from "../components";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Main: React.FC = () => {
    return <div>
        <BrowserRouter>
            <div className="main">
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/contact" component = {Contact}/>
                    <Route path="/events" component = {Events} />
                    <Route path="/products" component = {Products} />
                    <Route path="/about" component ={About} />
                    <Route component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
}
export default Main