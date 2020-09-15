import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'


class Corefeature extends Component {
  render() {
    return (
        <section className="core-feature-section bg-white pt-115 pb-115">
        <div className="container">
          <div className="section-title text-center mb-50">
            <span className="title-tag"> facilities </span>
            <h2>Core Features</h2>
          </div>
          {/* Featre Loop */}
          <div className="row features-loop">
            <div className="col-lg-4 col-sm-6 order-1">
            <ReactWOW animation="fadeInLeft" data-wow-delay=".3s">
              <div className="feature-box">
                <div className="icon">
                  <i className="flaticon-rating" />
                </div>
                <h3><Link to="#">Have High Rating</Link></h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna..
                </p>
                <span className="count">01</span>
              </div>
              </ReactWOW>
            </div>
            <div className="col-lg-4 col-sm-6 order-2">
            <ReactWOW animation="fadeInDown" data-wow-delay=".4s">
              <div className="feature-box">
                <div className="icon">
                  <i className="flaticon-clock" />
                </div>
                <h3><Link to="#">Quiet Hours</Link></h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna..
                </p>
                <span className="count">02</span>
              </div>
              </ReactWOW>
            </div>
            <div className="col-lg-4 col-sm-6 order-3 order-sm-4 order-lg-3">
            <ReactWOW animation="fadeInRight" data-wow-delay=".5s">
              <div className="feature-box">
                <div className="icon">
                  <i className="flaticon-location-pin" />
                </div>
                <h3><Link to="#">Best Locations</Link></h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna..
                </p>
                <span className="count">03</span>
              </div>
              </ReactWOW>
            </div>
            <div className="col-lg-4 col-sm-6 order-4 order-sm-3 order-lg-4">
            <ReactWOW animation="fadeInLeft" data-wow-delay=".6s">
              <div className="feature-box">
                <div className="icon">
                  <i className="flaticon-clock-1" />
                </div>
                <h3><Link to="#">Free Cancellation</Link></h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna..
                </p>
                <span className="count">04</span>
              </div>
              </ReactWOW>
            </div>
            <div className="col-lg-4 col-sm-6 order-5">
            <ReactWOW animation="fadeInUp" data-wow-delay=".7s">
              <div className="feature-box">
                <div className="icon">
                  <i className="flaticon-credit-card" />
                </div>
                <h3><Link to="#">Payment Options</Link></h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna..
                </p>
                <span className="count">05</span>
              </div>
              </ReactWOW>
            </div>
            
            <div className="col-lg-4 col-sm-6 order-6">
            <ReactWOW animation="fadeInRight" data-wow-delay=".8s">
              <div className="feature-box">
                <div className="icon">
                  <i className="flaticon-discount" />
                </div>
                <h3><Link to="#">Special Offers</Link></h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna..
                </p>
                <span className="count">06</span>
              </div>
              </ReactWOW>
            </div>
            
          </div>
        </div>
      </section>
      
    );
  }
}

export default Corefeature;
