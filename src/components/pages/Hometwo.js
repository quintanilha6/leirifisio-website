import React, { Component } from 'react'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';
import Mainbanner from '../sections/homepage-two/Banner';
import Bookingform from '../sections/homepage-two/Bookingform';
import Textblock from '../sections/homepage-two/Textblock';
import Corefeature from '../sections/homepage-two/Corefeature';
import Featureroom from '../sections/homepage-two/Featureroom';
import Counter from '../sections/homepage-two/Counter';
import Testimonial from '../sections/homepage-one/Testimonials';
import Videowrap from '../sections/homepage-two/Videowrap';
import News from '../sections/homepage-one/News';
import Instagram from '../sections/homepage-two/Instagram';

class Hometwo extends Component {
  render() {
    return (
      <div>
        <Headertwo />
        {/*====== BANNER PART START ======*/}
        <Mainbanner/>
        {/*====== BANNER PART ENDS ======*/}
        {/*====== BOOKING FORM START ======*/}
        <Bookingform/>
        {/*====== BOOKING FORM END ======*/}
        {/*====== TEXT BLOCK START ======*/}
        <Textblock/>
        {/*====== TEXT BLOCK END ======*/}
        {/*====== CORE FEATURES START ======*/}
        <Corefeature/>
        {/*====== CORE FEATURES END ======*/}
        {/*====== FEATURE ROOM START ======*/}
        <Featureroom/>
        {/*====== FEATURE ROOM END ======*/}
        {/*====== COUNTER UP START ======*/}
        <Counter/>
        {/*====== COUNTER UP END ======*/}
        {/*====== TESTIMONIAL SLIDER START ======*/}
        <Testimonial/>
        {/*====== TESTIMONIAL SLIDER END ======*/}
        {/*====== VIDEO WRAP START ======*/}
        <Videowrap/>
        {/*====== VIDEO WRAP END ======*/}
        {/*====== LATEST NEWS START ======*/}
        <News/>
        {/*====== LATEST NEWS END ======*/}
        {/*====== INSTAGRAM FEED PART START ======*/}
        <Instagram/>
        {/*====== INSTAGRAM FEED PART END ======*/}
        <Footertwo />
      </div>
    );
  }
}

export default Hometwo;
