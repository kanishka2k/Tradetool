import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCarousel = () => {
  return (
    <section id="hero">
      <Carousel interval={5000} fade={true}>
        <Carousel.Item>
          <div className="carousel-item active" style={{backgroundImage: "url(assets/Images/trade.jpg)"}}>
          <div className="carousel-container">
            <div className="container">
              <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Tradetool</span></h2>
              <p className="animate__animated animate__fadeInUp">We provide Strategies that will improve your earning</p>
              <a href="/AboutUs" className="btn-readmore animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-item active" style={{backgroundImage: "url(assets/Images/plans.jpg)"}}>
          <div className="carousel-container">
            <div className="container">
              <h2 className="animate__animated animate__fadeInDown">India’s leading provider</h2>
              <p className="animate__animated animate__fadeInUp">With our professional expertise and commitment to excellence, we are dedicated to helping traders succeed</p>
              <a href="/Products" className="btn-readmore animate__animated animate__fadeInUp scrollto">See Products</a>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-item active" style={{backgroundImage: "url(assets/Images/subscribe.jpg)"}}>
          <div className="carousel-container">
             <div className="container">
              <h2 className="animate__animated animate__fadeInDown">Subscription Details</h2>
              <p className="animate__animated animate__fadeInUp">We offer flexible pricing plans that work best for you and take your trading to the next level once you subscribe</p>
              <a href="/Register" className="btn-readmore animate__animated animate__fadeInUp scrollto">Subscribe</a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default MyCarousel;
