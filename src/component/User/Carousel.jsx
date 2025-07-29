import React from 'react';
import fashion1 from "../Image/fashion1.png"
import fashion2 from "../Image/fashion2.jpg"
import fashion3 from "../Image/fashion3.png"
import fashion4 from "../Image/fashion4.jpg"
import offerGif from "../Image/offer1.gif";



const Carousel = () => {
  return (
    <div className="row slider-area">
      <div className="col-md-12 col-sm-12 m-0 p-0">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={fashion1} className="d-block w-100" alt="Slide 1" height="400" />
              <div className="carousel-caption d-none d-md-block">
                <h5></h5>
                <p></p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={fashion2}className="d-block w-100" alt="Slide 2" height="400" />
              <div className="carousel-caption d-none d-md-block">
                <p></p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={fashion3} className="d-block w-100" alt="Slide 3" height="400" />
              <div className="carousel-caption d-none d-md-block">
                <h5 id="hed">Up to 75% off</h5>
              </div>
            </div>

            <div className="carousel-item">
              <img src={fashion4} className="d-block w-100" alt="Slide 4" height="400" />
              <div className="carousel-caption d-none d-md-block">
                <h1 id="hed">Top deals of the week</h1>
                <p>
                  <img src={offerGif} alt="Offer" width="100%" height="110" />
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;