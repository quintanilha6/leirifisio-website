import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

import adse from '../../../assets/img/partnership-slider/adse.png';
import cgd from '../../../assets/img/partnership-slider/cgd.png';
import ctt from '../../../assets/img/partnership-slider/ctt.png';
import samssib from '../../../assets/img/partnership-slider/samssib.png';
import samsquadros from '../../../assets/img/partnership-slider/samsquadros.png';
import medicare from '../../../assets/img/partnership-slider/medicare.png';
import ipl from '../../../assets/img/partnership-slider/ipl.jpg';
import acp from '../../../assets/img/partnership-slider/acp.jpg';
import sbc from '../../../assets/img/partnership-slider/SBC.jpg';

const roomimgPosts = [
  {
    photo: cgd,
  },
  {
    photo: adse,
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
  {
    photo: sbc,
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
      </section>
    );
  }
}

export default Partnerslider;