import React from "react";
import Navbar from "./User/Navbar";
import { NavLink } from "react-router-dom";
import './User/css/home.css'
import Productp from "./User/Productp";
import Carousel from "./User/Carousel";
import Offer from './Image/fashion.jpg'
import Offer2 from './Image/offer2.jpg'
import Kurti from './Image/kurti.webp'
import Baggy from './Image/baggy.webp'
import Sneaker from './Image/sneaker.webp'
import Jeans from './Image/jeans.webp'
import Shirt from './Image/shirt.webp'
import Tshirt from './Image/tshirt.webp'
import Mjeans from './Image/mjeans.webp'
import Mshoe from './Image/msneaker.webp'
import Freeoff from './Image/deal3.jpg'
import Shoeoff from './Image/deal5.jpg'
import Deal6 from './Image/deal6.jpg'
import Deal7 from './Image/deal7.jpg'

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Navbar />
                    </div>
                </div>

                {/* crousel */}

                <div className="row">
                    <div className="col-12">
                        <div className="crousel">
                            <Carousel/>
                        </div>
                    </div>
                </div>

                {/* card section */}
                <div className="row mt-4">
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-flex justify-content-center">
                        <NavLink to={'/User/Productp'} className="category-card" style={{ backgroundColor: 'black'}}>
                            <div className="card-content">
                                <h4>Men</h4>
                            </div>
                        </NavLink>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-flex justify-content-center">
                        <NavLink to={'/'} className="category-card" style={{ backgroundColor: 'pink' }}>
                            <div className="card-content">
                                <h4>Women</h4>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-flex justify-content-center">
                        <NavLink to={'/'} className="category-card" style={{ backgroundColor: 'violet' }}>
                            <div className="card-content">
                                <h4>Kid</h4>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-flex justify-content-center">
                        <NavLink to={'/'} className="category-card" style={{ backgroundColor: 'green' }}>
                            <div className="card-content">
                                <h4>Sports</h4>
                            </div>
                        </NavLink>
                    </div>
                </div>

                {/* Deals */}

                <div className="row">
                    <div className="col-12 o-card">
                        <div className="offer-image mb-3">
                            <NavLink to={'/'}><img src={Offer} alt={Offer} width={'100%'} height={'120px'}></img></NavLink>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="row detitel">
                            <div className="col-12" style={{ textAlign: 'center', textTransform: 'uppercase', borderTop: '2px solid #FFB823', borderRadius: '7px' }}>
                                <h4>exclusive deals</h4>
                            </div>
                        </div>
                        <div className="row deal-card">
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/User'} className="image-card">
                                    <div className=" ">
                                        <img src={Freeoff} alt={Freeoff} width={'100%'}></img>
                                        <h5>get free watch and wallet</h5>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/'} className="image-card">
                                    <div className=" ">
                                        <img src={Shoeoff} alt={Shoeoff} width={'100%'}></img>
                                        <h5>discount on nivia shoe</h5>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/'} className="image-card">
                                    <div className=" ">
                                        <img src={Deal6} alt={Deal6} width={'100%'}></img>
                                        <h5>Flat 75% off</h5>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/'} className="image-card">
                                    <div className=" ">
                                        <img src={Deal7} alt={Deal7} width={'100%'}></img>
                                        <h5>20% off on spring sale</h5>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* men product section */}
                <div className="row">
                    <div className="col-12 o-card">
                        <div className="offer-image mb-3 pt-3">
                            <NavLink to={'/'}><img src={Offer2} alt={Offer2} width={'100%'} height={'120px'}></img></NavLink>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="row detitel">
                        <div className="col-12" style={{ textAlign: 'center', textTransform: 'uppercase', paddingTop:'10px' }}>
                            <h4>Men's Collection</h4>
                        </div>
                    </div>
                    <div className="row dealm-card">
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/'} className="man-card">
                                    <div className=" ">
                                        <img src={Tshirt} height={'250px'}></img>
                                        <h5>Polo T-shirt</h5>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/'} className="man-card">
                                    <div className=" ">
                                        <img src={Shirt} height={'250px'}></img>
                                        <h5>Shirt</h5>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/'} className="man-card">
                                    <div className=" ">
                                        <img src={Mshoe} height={'250px'}></img>
                                        <h5>Shoe</h5>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/'} className="man-card">
                                    <div className=" ">
                                        <img src={Mjeans} height={'250px'}></img>
                                        <h5>Jeans</h5>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                </div>

                {/* women product section */}
                <div className="row women">
                    <div className="row detitel">
                        <div className="col-12" style={{ textAlign: 'center', textTransform: 'uppercase', paddingTop:'10px' }}>
                            <h4>Women's Collection</h4>
                        </div>
                    </div>
                    <div className="row dealm-card">
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/User'} className="w-card">
                                    <div className=" ">
                                        <img src={Kurti} height={'250px'}></img>
                                        <h5>Kurti</h5>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/'} className="w-card">
                                    <div className=" ">
                                        <img src={Baggy} height={'250px'}></img>
                                        <h5>Baggy Jeans</h5>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/'} className="w-card">
                                    <div className=" ">
                                        <img src={Sneaker} height={'250px'}></img>
                                        <h5>Shoe</h5>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/'} className="w-card">
                                    <div className=" ">
                                        <img src={Jeans} height={'250px'}></img>
                                        <h5>Jeans</h5>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                </div>

                {/* kid product section */}
                <div className="row mt-5">
                    <div className="row detitel">
                        <div className="col-12" style={{ textAlign: 'center', textTransform: 'uppercase', borderTop: '2px solid #FFB823', borderRadius: '7px' }}>
                            <h4>Kids's Collection</h4>
                        </div>
                    </div>
                    <div className="row dealm-card">
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/User'} className="k-card">
                                    <div className=" ">
                                        <h3>Image</h3>
                                        <h5>Polo T-shirt</h5>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/'} className="k-card">
                                    <div className=" ">
                                        <h3>Image</h3>
                                        <h5>Shirt</h5>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/'} className="k-card">
                                    <div className=" ">
                                        <h3>Image</h3>
                                        <h5>T-Shirt</h5>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <NavLink to={'/'} className="k-card">
                                    <div className=" ">
                                        <h3>Image</h3>
                                        <h5>Shoe</h5>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                </div>

                {/* about section */}
                <div className="row mt-2 about-sec">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 class="mt-4">STORIES, STYLES</h2>
                        <p><h4>Sport keeps us fit. Keeps you mindful. Brings us together. Through sport we have the power to change lives.
                            Whether it is through stories of inspiring athletes. Helping you to get up and get moving. Sportswear featuring the latest technologies, to up your performance.
                            Beat your PB. This offers a home to the runner, the basketball player, the soccer kid, the fitness enthusiast. The weekend hiker that loves to escape the city. The yoga teacher that spreads the moves.
                            The 3-Stripes are seen in the music scene. On stage, at festivals. Our sports clothing keeps you focused before that whistle blows. During the race. And at the finish lines. We’re here to support creators. Improve their game. Their lives. And change the world.</h4></p>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <h2 class="mt-4">WORKOUT CLOTHES, FOR ANY SPORT</h2>
                        <p class=""><h4>Creators, who love to change the game. Challenge conventions. Break the rules and define new ones. Then break them again.
                            We supply teams and individuals with athletic clothing pre-match. To stay focussed. We design sports apparel that get you to the finish line.
                            To win the match. We support women, with bras and tights made for purpose. From low to high support. Maximum comfort. We design, innovate and itterate. Testing new technologies in action. On the pitch, the tracks, the court, the pool.
                            Retro workout clothes inspire new streetwear essentials. Like NMD, Ozweego and our Firebird tracksuits. Classic sports models are brought back to life. Like Stan Smith. And Superstar. Now seen on the streets and the stages</h4></p>
                    </div>
                </div>

                {/* footer section */}

                <div className="row footer-sec">
                    <div className="col-12">
                        <div className="footer">
                            <div className="col-3 foot">
                                <h4>Product</h4>
                                <NavLink to={'/'}><p>Footware</p></NavLink>
                                <NavLink to={'/'}><p>Men's Ware</p></NavLink>
                                <NavLink to={'/'}><p>Women's Ware</p></NavLink>
                                <NavLink to={'/'}><p>Kid's Ware</p></NavLink>
                                <NavLink to={'/'}><p>New Arrivals</p></NavLink>
                                <NavLink to={'/'}><p>Spacial Offers</p></NavLink>
                                <NavLink to={'/'}><p>50% Discount</p></NavLink>
                            </div>
                            <div className="col-3 foot">
                                <h4>Support</h4>
                                <NavLink to={'/'}><p>Help</p></NavLink>
                                <NavLink to={'/'}><p>Customer Service</p></NavLink>
                                <NavLink to={'/'}><p>Return & Exchanges</p></NavLink>
                                <NavLink to={'/'}><p>News Bulletin</p></NavLink>
                                <NavLink to={'/'}><p>Shipping</p></NavLink>
                                <NavLink to={'/'}><p>Order Track</p></NavLink>
                                <NavLink to={'/'}><p>Store Finder</p></NavLink>
                            </div>
                            <div className="col-3 foot">
                                <h4>Company Info</h4>
                                <NavLink to={'/'}><p>About Us</p></NavLink>
                                <NavLink to={'/'}><p>Careers</p></NavLink>
                                <NavLink to={'/'}><p>Press</p></NavLink>
                                <NavLink to={'/'}><p>Stories</p></NavLink>
                            </div>
                            <div className="col-3 foot">
                                <h4>Follow Us</h4>
                                <NavLink to={'/'}>Facebook</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row lower-pt">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-12"></div>
                            <div class="col-md-4 col-sm-12">
                                <NavLink to={'/'}>Privacy Policy <span style={{ paddingLeft: '10px' }}>Terms and conditions</span> <span style={{ paddingLeft: '10px' }}>Cookies</span></NavLink>
                                <br></br>
                                <p class="text-center">@E-commerce India Pvt Ltd</p>
                            </div>
                            <div class="col-md-4 col-sm-12"></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home