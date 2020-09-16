import React, { Component } from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Mainbanner from '../sections/homepage-one/Banner';
import About from '../sections/homepage-one/About';
import ServiceType from '../sections/homepage-one/ServiceType';
import Cta from '../sections/homepage-one/Cta';
import Testimonial from '../sections/homepage-one/Testimonials';
import News from '../sections/homepage-one/News';


class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/*====== BANNER PART START ======*/}
        <Mainbanner />
        {/*====== BANNER PART ENDS ======*/}
        {/*====== ABOUT FORM START ======*/}
        <About />
        {/*====== ABOUT PART END ======*/}
        {/*====== SERVICE TYPE START ======*/}
        <ServiceType />
        {/*====== SERVICE TYPE END ======*/}
        {/*====== CALL TO ACTION STRAT ======*/}
        <Cta/>
        {/*====== CALL TO ACTION END ======*/}
        {/*====== TESTIMONIAL SLIDER START ======*/}
        <Testimonial/>
        {/*====== TESTIMONIAL SLIDER END ======*/}
        {/*====== LATEST NEWS START ======*/}
        <News/>
        {/*====== LATEST NEWS END ======*/}
        <Footer/>
      </div>
    );
  }
}

export default Home;
