import React from "react";
import Sidebar1 from "./Sidebar1";
import Navbar from "./Navbar";
import './css/productp.css'

const Productp = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                 <div className="col-lg-3 col-md-3 col-sm-6 m-0 p-0" style={{float:'left'}}>
                        <Sidebar1 />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-6 m-0 p-0" style={{ float:'right'}}>
                        <Navbar />
                        <div className="row pc">
                            <div className="col-lg-3 col-md-4 c0l-sm-6">
                                <div className="sc">
                                    <p>hi</p>
                                    <h5>Adidas Hyperbeast</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 c0l-sm-6">
                                <div className="sc">
                                    <p>hi</p>
                                    <h5>Adidas Hyperbeast</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 c0l-sm-6">
                                <div className="sc">
                                    <p>hi</p>
                                    <h5>Adidas Hyperbeast</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 c0l-sm-6">
                                <div className="sc">
                                    <p>hi</p>
                                    <h5>Adidas Hyperbeast</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    
                </div>
                
                {/* </div> */}

            </div>
        </>
    )
}

export default Productp