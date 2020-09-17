import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

import adse from '../../../assets/img/partnership-slider/adse.jpg';
import cgd from '../../../assets/img/partnership-slider/cgd.png';
import ctt from '../../../assets/img/partnership-slider/ctt.png';
import samssib from '../../../assets/img/partnership-slider/samssib.png';
import samsquadros from '../../../assets/img/partnership-slider/samsquadros.png';
import medicare from '../../../assets/img/partnership-slider/medicare.png';
import ipl from '../../../assets/img/partnership-slider/ipl.jpg';
import acp from '../../../assets/img/partnership-slider/acp.jpg';

const roomimgPosts = [
  {
    photo: adse,
  },
  {
    photo: cgd,
  },
  {
    photo: samssib,
  },
  {
    photo: samsquadros,
  },
  {
    photo: ctt,
  },
  {
    photo: medicare,
  },
  {
    photo: acp,
  },
  {
    photo: ipl,
  },
];
const roomPosts = [
  {
    name: 'ADSE',
    icon: 'flaticon-handshake',
  },
  {
    name: 'Caixa Geral de Depósitos',
    icon: 'flaticon-handshake',
  },
  {
    name: 'SAMS SIB',
    icon: 'flaticon-handshake',
  },
  {
    name: 'SAMS Quadros',
    icon: 'flaticon-handshake',
  },
  {
    name: 'CTT',
    icon: 'flaticon-handshake',
  },
  {
    name: 'Medicare',
    icon: 'flaticon-handshake',
  },
  {
    name: 'ACP',
    icon: 'flaticon-handshake',
  },
  {
    name: 'IPL',
    icon: 'flaticon-handshake',
  },
];

class Partnerslider extends Component {
    constructor(props) {
    super(props);
    this.state = {
        nav1: null,
        nav2: null
    };
    }

    componentDidMount() {
    this.setState({
        nav1: this.slider1,
        nav2: this.slider2
    });
    }
  render() {
   
    return (
        <section className="room-slider">
        <div className="container-fluid p-0">
          <Slider className="row rooms-slider-one" asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          slidesToShow={3}
            slidesToScroll={1}
            fade={false}
            infinite={true}
            autoplay={true}
            autoplaySpeed={4000}
            arrows={false}
            dots={false}
            centerMode={true}
            centerPadding={'6%'}
            responsive={ [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '15%',
                    },
                },
            ]
          }
          >
            {roomimgPosts.map((item, i) => (
            <div key={i} className="col">
              <div className="slider-img" style={{backgroundImage: "url("+ item.photo + ")"}}>
              </div>
            </div>
            ))}
          </Slider>
        </div>
        <div className="rooms-content-wrap">
          <div className="container">
            <div className="row justify-content-center justify-content-md-start">
              <div className="col-xl-4 col-lg-5 col-sm-8">
                <div className="room-content-box">
                  <div className="slider-count" />
                  <div className="slider-count-big" />
                  <Slider className="room-content-slider"
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={1}
                    slidesToScroll={1}
                    fade={false}
                    infinite={true}
                    autoplay={true}
                    autoplaySpeed={4000}
                    arrows={false}
                    dots={true}
                    >
                    {roomPosts.map((item, i) => (
                    <div key={i} className="single-content">
                      <div className="icon">
                      <i className={item.icon}/>
                      </div>
                      <h3>{item.name}</h3>
                    </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partnerslider;