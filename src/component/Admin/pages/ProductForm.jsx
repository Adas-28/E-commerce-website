import React, { useState } from "react";
import '../css/product.css';
import { NavLink } from "react-router-dom";
import { addProduct } from "../../service/Api";

const ProductForm = () => {

    const [product, setProduct] = useState({
        pname: '',
        price: '',
        sprice: '',
        feature: '',
        offer: '',
        image: '',
    })

    const changeValue = (e) =>{
        setProduct({
            ...product, [e.target.name] : e.target.value
        })
        console.log(product);
        
    }

    const fileData = (e) =>{
        setProduct({
             ...product, image : e.target.files[0]
        })
    }

    const submitData = async(e) => {
        e.preventDefault()
        if (!product.pname) {
            alert("Please enter the product name")
        }else if(!product.price){
            alert("Please enter the price.")
        }else if(!product.sprice){
            alert("Please enter the selling price.")
        }else if(!product.feature){
            alert("Please enter the feature.")
        }else{
            const formData = new FormData
            formData.append('image', product.image, product.image.name)
            formData.append('pname', product.pname)
            formData.append('price', product.price)
            formData.append('sprice', product.sprice)
            formData.append('feature', product.feature)
            formData.append('offer', product.offer)

            try{
                const res = await addProduct(formData)
                if (res === 201) {
                    alert(res.data)
                }else{
                    alert("Something went wrong.")
                }
            }
            catch(err){
                console.log("Error while sending data", err);
                
            }
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="product-form mt-3">
                            <h5>fill product details</h5><hr></hr>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Product Name <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input type="text" name="pname" class="form-control" onChange={changeValue} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name..."></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Product Price <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input type="text" name="price" class="form-control" onChange={changeValue} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Price..."></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Product Selling Price <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input type="text" name="sprice" class="form-control" onChange={changeValue} id="exampleInputEmail1" aria-describedby="emailHelp"placeholder="Enter Product Name..."></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Product Feature <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input type="text" name="feature" class="form-control" onChange={changeValue} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Feature..."></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Offer <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input type="text" name="offer" class="form-control" onChange={changeValue} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Offer..."></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Product Image <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input type="file" name="image" class="form-control" onChange={fileData} id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <NavLink><button type="button" class="btn text-bg-success" onClick={submitData}>Submit</button></NavLink>
                                        <NavLink><button type="button" class="btn text-bg-danger">Reset</button></NavLink>
                                        <NavLink to={'/pages/product'}><button type="button" class="btn">Back</button></NavLink>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductForm