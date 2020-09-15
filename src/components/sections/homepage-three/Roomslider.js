import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import froomimg1 from '../../../assets/img/room-slider/06.jpg';
import froomimg2 from '../../../assets/img/room-slider/08.jpg';
import froomimg3 from '../../../assets/img/room-slider/07.jpg';

const featureroomPosts = [
  {
      photo: froomimg1,
      title: 'Minimal Duplex Room',
      url: '/room-details',
      price: '$345',
      time: 'Night',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
      photo: froomimg2,
      title: 'Minimal Duplex Room',
      url: '/room-details',
      price: '$345',
      time: 'Night',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    photo: froomimg3,
    title: 'Minimal Duplex Room',
    url: '/room-details',
    price: '$345',
    time: 'Night',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow next-arrow" onClick={onClick}><i className="fal fa-arrow-right"></i></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow prev-arrow" onClick={onClick}><i className="fal fa-arrow-left"></i></div>
  );
} 
class Roomslider extends Component {
  render() {
    const settings = {
      slidesToShow: 1,
				slidesToScroll: 1,
				fade: false,
				infinite: true,
				autoplay: false,
				autoplaySpeed: 4000,
				arrows: true,
				dots: false,
				centerMode: true,
        centerPadding: '28%',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
				responsive: [
					{
						breakpoint: 1600,
						settings: {
							centerPadding: '20%',
						},
					},
					{
						breakpoint: 992,
						settings: {
							centerPadding: '15%',
						},
					},
					{
						breakpoint: 768,
						settings: {
							centerPadding: '10%',
						},
					},
					{
						breakpoint: 576,
						settings: {
							centerPadding: '5%',
						},
					},
				],
  }; 
    return (
        <section className="room-slider bg-white pb-100 pt-115">
        <div className="container-fluid p-0">
          <div className="section-title mb-80 text-center">
            <span className="title-tag">Room</span>
            <h2>Hand Picked Rooms</h2>
          </div>
          <Slider className="row rooms-slider-two justify-content-center" {...settings}>
          {featureroomPosts.map((item, i) => (
            <div key={i} className="col-lg-12">
              <div className="single-rooms-box">
                <div className="room-img">
                  <div className="img" style={{backgroundImage: "url("+ item.photo + ")"}}>
                  </div>
                </div>
                <ul className="icons">
                  <li><i className="fal fa-bed" /></li>
                  <li><i className="fal fa-wifi" /></li>
                  <li><i className="fal fa-car" /></li>
                  <li><i className="fal fa-coffee" /></li>
                  <li><i className="fal fa-concierge-bell" /></li>
                  <li><i className="fal fa-swimmer" /></li>
                  <li><i className="fal fa-compress-arrows-alt" /></li>
                </ul>
                <div className="room-desc">
                  <div className="row align-items-center">
                    <div className="col-sm-8">
                      <h3><Link to={item.url}>{item.title}</Link></h3>
                      <p>
                      {item.desc}
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <div className="price">
                      {item.price}<span>/{item.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </section>
      
    );
  }
}

export default Roomslider;
