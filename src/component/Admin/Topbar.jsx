import React from "react";
 import './css/topbar.css'
import { NavLink } from "react-router-dom";



 const Topbar =() =>{
    return(
        <>
             <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0 m-0">
                        <div className="topbar">
                           <div className="topbar-top">
                              <form class="d-flex p-1 ml-2">
                                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                 <button className="btn btn-outline-success" type="submit">Search</button>
                              </form>
                           </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md 6 col-sm-12 p-0 m-0">
                        <div className="topbar">
                            <div className="topbar-top"></div>
                        </div>
                    </div>
                     <div className="col-lg-3 col-md 3 col-sm-12 p-0 m-0">
                        <div className="topbar">
                            <div className="topbar-right">
                            <nav>
                            <NavLink to={'/'} className={'nav'}><i class="fa-regular fa-circle-user"></i></NavLink>
                            <NavLink to={'/'} className={'nav'}><i class="fa-solid fa-bell"></i></NavLink>
                            
                            </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
 }

 export default Topbar