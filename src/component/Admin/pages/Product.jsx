import React from "react";
import Sidebar from "../Sidebar";
import '../css/product.css'
import { NavLink } from "react-router-dom";
import AddProduct from "./AddProduct";

const Product = () => {
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
                                <div className="col-8 p">
                                    <h3>Dashboard</h3>
                                </div>
                                <div className="col-4 icons">
                                    <NavLink to={'/'}><span><i class="fa-solid fa-bell-concierge"></i></span></NavLink>
                                    <NavLink to={'/'}><span><i class="fa-solid fa-envelope"></i></span></NavLink>
                                </div>

                            </div>
                        </div>
                        <div className="row m">
                            <h3>Product</h3>
                        </div>
                        <div className="row">
                            <div className="col-12 ">
                                <div className="product-card d-flex justify-content-between">
                                    <h5>Product Details</h5>
                                    <NavLink to={'/pages/AddProduct'} className={'product-btn'}><button>Add Product</button></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="product-table">
                                    <div className="table-responsive">
                                        <table className="table table-bordered w-100">
                                            <thead >
                                                <tr>
                                                    <th>Sl. No.</th>
                                                    <th>Product Name</th>
                                                    <th>Price</th>
                                                    <th>Image</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Nike Shoe</td>
                                                    <td>1500</td>
                                                    <td></td>
                                                    <td><span class="badge text-bg-success">In Stock</span></td>
                                                    <td>
                                                        <NavLink to={'/'}><span class="badge text-bg-primary">Edit</span></NavLink>
                                                        <NavLink to={'/'}><span class="badge text-bg-danger">Delete</span></NavLink>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Product