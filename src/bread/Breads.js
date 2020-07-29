import React from "react";
import {PageTemplate} from "../components";

const breadsTypes ={REQUEST: 'breads/REQUEST', SUCCESS: 'breads/SUCCESS', FAIL: 'breads/FAIL'}
const breadsRequest = action =>({type: breadsTypes.REQUEST ,payload: action.payload})
const breadsReducer = (state, action)=>{
    switch (action.type) {
        case breadsTypes.REQUEST: return{
            ...state, payload: action.payload
        }
        default: return state

    }
}


export const Breads = () => <PageTemplate><section className="list">
        <h1> [빵 목록] </h1>
        <br/>
        <div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="">
            <div grid-col="4" grid-pad="1.5" className=""><h1><span style="color: #e2a40c;">B r e a d</span></h1><br/>
                <br/>
                <div style="text-align: left;">
                    <blockquote><i>No eggs, No milk, and No butter.</i><br/>The Bread Blue<br/>using all-natural
                        ingredients only.</blockquote>
                </div>
                <br/>
                <div style="text-align: left;">
                    <blockquote>The Bread Blue is for everyone;<br/>Locals, Visitors, and those who are Vegan
                    </blockquote>
                </div>

            </div>
            <div grid-col="8" grid-pad="1.5" className="">
                <div className="image-gallery" gid="6">
                    <a rel="history" href="Vessel-01" className="image-link"><img
                        src="../images/1544756943803l0 (1).jpg" width="344" height="441.6" alt=""/></a>
                    <a rel="history" href="Vessel-02" className="image-link"><img src="../images/1545012547642l0.jpg"
                                                                                  width="344" height="441.6" alt=""/></a>
                    <a rel="history" href="Vessel-03" className="image-link"><img
                        src="../images/1545012798993l0 (1).jpg" width="344" height="441.6" alt=""/></a>
                    <a rel="history" href="Vessel-04" className="image-link"><img src="../images/1574055808617l0.jpg"
                                                                                  width="344" height="441.6" alt=""/></a>
                    <a rel="history" href="Vessel-05" className="image-link"><img src="../images/1574057240346l0.jpg"
                                                                                  width="344" height="441.6" alt=""/></a>
                    <a rel="history" href="Vessel-06" className="image-link"><img src="../images/1574058299390l0.jpg"
                                                                                  width="344" height="441.6" alt=""/></a>
                    {/*<a rel="history" href="Vessel-07" className="image-link">{image 10 caption="Vessel 07"}</a>*/}
                    {/*<a rel="history" href="Vessel-08" className="image-link">{image 11 caption="Vessel 08"}</a>*/}
                    {/*<a rel="history" href="Vessel-09" className="image-link">{image 13 caption="Vessel 09"}</a>*/}
                    {/*<a rel="history" href="Vessel-10" className="image-link">{image 19 caption="Vessel 10"}</a>*/}
                    {/*<a rel="history" href="Vessel-11" className="image-link">{image 21 caption="Vessel 11"}</a>*/}
                    {/*<a rel="history" href="Vessel-12" className="image-link">{image 20 caption="Vessel 12"}</a>*/}
                </div>
                <br/><br/><a href="Page-Index" rel="history">︎ Index</a></div>
        </div>


</section>
        </PageTemplate>

export default breadsReducer










