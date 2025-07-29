import React, { useState } from "react";
import './css/body.css'
import { NavLink } from "react-router-dom";
import CardArray from "./Cardarray";



const Body = () => {

    const [card] = useState(CardArray)



    return (
        <>
            <div className="container-fluid">
                <div className="row topbar">
                    <div className="col-4 title">
                        <h4>Dashboard</h4>
                    </div>
                    <div className="col-8 icons">
                        <span><i class="fa-solid fa-bell-concierge"></i></span>
                        <span><i class="fa-solid fa-envelope"></i></span>
                    </div>
                </div>
            </div>




            <div className="row">
                {
                    card.map((item) => {
                        return (
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="home-card" style={{ backgroundColor: `${item.bgcolor}` }}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card-top">
                                                <div className="row">
                                                    <div className="col-lg-8 col-md-8 c0l-sm-12">
                                                        {item.name}
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 c0l-sm-12">
                                                        <i class={item.icons}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-btm">
                                                {item.qua}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


                <div className="row">
                    <div className="col-12">
                        <div className="petron-card2">
                            <p className="sec2">Product sale</p>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="petron-card3">
                            <p className="sec2">Sales by product category</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="petron-card3">
                            <p className="sec2">Transaction History</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Body