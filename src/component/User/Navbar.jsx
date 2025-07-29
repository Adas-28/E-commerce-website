import React from "react";
import { NavLink } from "react-router-dom";
import './css/navbar.css'
import Logo from '../Image/screenshot.png'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row first">
                    <div className=" col-lg-9 col-md-9 col-sm-6 offer">
                        <marquee class="text-center pt-4"> <NavLink to={'/'}><h5>EXTRA 5% DISCOUNT ON ONLINE PAYMENTS. FREE SHIPPING FREE RETURNS FREE EXCHANGE </h5></NavLink> </marquee>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 icon">
                        <NavLink to={'/User/Login'}>
                            <span><i class="fa-solid fa-right-to-bracket" style={{color:'black'}}></i></span>
                            <span><i class="fa-solid fa-user" style={{color:'black'}}></i></span>
                        </NavLink>
                    </div>
                </div>

                <div className="row second">
                    {/* Logo Section */}
                    <div className="col-lg-2 col-md-3 col-sm-3 logo">
                        <img src={Logo} alt={Logo} style={{height:'60px'}}></img>
                    </div>

                    {/* Category Navigation Icons */}
                    <div className="col-lg-6 col-md-5 cata d-flex align-items-center justify-content-between">
                        <NavLink to="/" className="icon-wrapper">
                            <i className="fa-solid fa-house"></i>
                            <span>Home</span>
                        </NavLink>
                        <NavLink to="/" className="icon-wrapper">
                            <i className="fa-solid fa-person"></i>
                            <span>Male</span>
                        </NavLink>
                        <NavLink to="/" className="icon-wrapper">
                            <i className="fa-solid fa-person-dress"></i>
                            <span>Female</span>
                        </NavLink>
                        <NavLink to="/" className="icon-wrapper">
                            <i className="fa-solid fa-volleyball"></i>
                            <span>Sport</span>
                        </NavLink>
                        <NavLink to="/" className="icon-wrapper">
                            <i className="fa-solid fa-file"></i>
                            <span>New</span>
                        </NavLink>
                    </div>


                    {/* Search and Cart Section */}
                    <div className="col-lg-4 col-md-4 col-sm-9">
                        <div className="row">
                            {/* Search Box */}
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <form>
                                    <div className="mb-1 mt-1">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search..."
                                        />
                                    </div>
                                </form>
                            </div>

                            {/* Search Button */}
                            <div className="col-lg-3 col-md-3 col-sm-3 d-flex align-items-center">
                                <NavLink to="/" className="search-btn w-100">
                                    <button type="button" className="btn btn-primary w-100">Search</button>
                                </NavLink>
                            </div>

                            {/* Cart Icon */}
                            <div className="col-lg-3 col-md-3 col-sm-3 d-flex align-items-center justify-content-center">
                                <i className="fa-solid fa-cart-shopping fa-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar