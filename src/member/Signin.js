import React from "react";
import {MainHeader, PageTemplate} from "../components";
import './signin.css'

const signinTypes= {REQUEST: 'signin/REQUEST', SUCCESS: 'success/REQUEST', FAIL: 'signin/FAIL'}
const signinRequest = action => ({types: signinTypes.REQUEST, payload: action.payload})
const signinSuccess = action => ({types: signinTypes.SUCCESS, payload: action.payload})
const signinFail = action => ({types: signinTypes.FAIL, payload: action.payload})

const signinReducer = (state, action) =>{
    switch (action.type) {
        case signinTypes.REQUEST:
            return{
                ...state,payload: action.payload
            }
        default: return state
    }
}

const Signin = () => <PageTemplate> <section className="signin">
    <MainHeader/>
    <div className="main">
        id<input/><br />
        password <input/><br />
        <button>login</button>
            </div>
</section></PageTemplate>

export default Signin