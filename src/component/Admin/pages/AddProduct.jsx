import React from "react";
import Sidebar from "../Sidebar";
import { NavLink } from "react-router-dom";
import ProductForm from "./ProductForm";

const AddProduct = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-12">
                        <Sidebar />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-12">
                        <div className="container-fluid">
                            <div className="row topbar">
                                <div className="col-4 title">
                                    <h4>Product</h4>
                                </div>
                                <div className="col-8 icons">
                                    <span><i class="fa-solid fa-bell-concierge"></i></span>
                                    <span><i class="fa-solid fa-envelope"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="row m">
                            <div className="col-12 p">
                                <h3>Add Product</h3>
                            </div>
                            <ProductForm />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AddProduct