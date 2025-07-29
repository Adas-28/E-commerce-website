import React from "react";
import { NavLink } from "react-router-dom";
import './css/sidebar.css'


const Sidebar = () => {
    return (
        <>
           <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0 m-0">
                        <div className="sidebar">
                           <div className="sidebar-top">
                              <h4>ADMIN PANEL</h4>
                           </div>
                           <div className="sidebar-mid">
                               <nav>
                               <NavLink to={'/'} className={'nav'} style={{backgroundColor:'#F564A9', color:'black'}}><i class="fa-solid fa-gauge"></i> Dashboard</NavLink>
                               <NavLink to={'/pages/Login'} className={'nav'}><i class="fa-solid fa-user-plus"></i> Log in</NavLink>
                               <NavLink to={'/pages/Product'} className={'nav'}><i class="fa-brands fa-product-hunt"></i> Product <i id="drop" class="fa-solid fa-angle-right"></i></NavLink>
                               <NavLink to={'/pages/Order'} className={'nav'}><i class="fa-brands fa-first-order"></i> Order <i id="drop" class="fa-solid fa-angle-right"></i></NavLink>
                               <NavLink to={'/'} className={'nav'}><i class="fa-solid fa-signal"></i> Status <i id="drop" class="fa-solid fa-angle-right"></i></NavLink>
                               <NavLink to={'/'} className={'nav'}><i class="fa-solid fa-users"></i> Customer <i id="drop" class="fa-solid fa-angle-right"></i></NavLink>
                               <NavLink to={'/'} className={'nav'}><i class="fa-solid fa-indian-rupee-sign"></i> Transaction <i id="drop" class="fa-solid fa-angle-right"></i></NavLink>
                               <NavLink to={'/pages/Contact'} className={'nav'}><i class="fa-solid fa-book"></i> Contact</NavLink>
                               <NavLink to={'/'} className={'nav'}><i class="fa-regular fa-question"></i> Help</NavLink>
                               </nav>
                           </div>
                           <div className="sidebar-botm">
                             <nav> 
                             <NavLink to={'/'} className={'nav1'}> Log Out <i class="fa-solid fa-arrow-right-to-bracket"></i></NavLink>
                             </nav>
                           </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar