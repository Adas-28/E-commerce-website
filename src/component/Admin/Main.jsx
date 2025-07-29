import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";

const Main =()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-12">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-12">
                        <Body/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main