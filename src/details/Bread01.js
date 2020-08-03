import React from "react";
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {MainHeader, PageTemplate} from "../components";
import './breads.css'



export const Bread01 = () =>
     <PageTemplate> <section className="Bread01">
          <>

        <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="" className="">
            <div grid-col="4" grid-pad="1.5"><h1>01</h1></div>
            <div grid-col="8" grid-pad="1.5"><h1>Fig Campagne</h1></div>
            <div grid-col="8" grid-pad="1.5"><h1>무화과 깜빠뉴</h1></div>
        </div>
        <br/>
        <br/><br/>

        <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="">
            <div grid-col="x10" grid-pad="1.5">
                <blockquote><i>톡톡 씹히는 무화과가 매력적인 무화과 깜빠뉴<br/>
                                <br/>판매가격	7,900원<br/></i></blockquote>
                <div grid-col="x10" grid-pad="1.5"> <img src={'https://thebreadblue.com/data/editor/2007/ce5e7872b2037bb54992c26397bf2350_1595490076_5124.png'}/> </div>
                <div grid-col="x10" grid-pad="1.5" className="">{'/images/fig_campagne.jpg'}</div>
            </div>
        </div>
         <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="">
             <div grid-col="4" grid-pad="1.5"></div>
             <div grid-col="8" grid-pad="1.5" className=""><a href="breads" rel="next_page">prev ︎</a> &nbsp; &nbsp; &nbsp;&nbsp;
                 <a href="#" rel="next_page">Next ︎</a></div>
         </div>
    </>
    </section></PageTemplate>



export default Bread01