import React, { Component } from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Mainbanner from '../sections/homepage-one/Banner';
import About from '../sections/homepage-one/About';
import ServiceType from '../sections/homepage-one/ServiceType';
import Cta from '../sections/homepage-one/Cta';
import Roomslider from '../sections/homepage-one/Roomslider';
import Textblock from '../sections/homepage-one/Textblock';
import Testimonial from '../sections/homepage-one/Testimonials';
import Roomgallery from '../sections/homepage-one/Roomgallery';
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
        {/*====== ROOM SLIDER START ======*/}
        {/*<Roomslider/>*/}
        {/*====== ROOM SLIDER END ======*/}
        {/*====== TEXT BLOCK START ======*/}
        {/*<Textblock/>*/}
        {/*====== TEXT BLOCK END ======*/}
        {/*====== TESTIMONIAL SLIDER START ======*/}
        <Testimonial/>
        {/*====== TESTIMONIAL SLIDER END ======*/}
        {/*====== ROOM Gallery CTA START ======*/}
        {/*<Roomgallery/> */}
        {/*====== ROOM Gallery CTA END ======*/}
        {/*====== LATEST NEWS START ======*/}
        <News/>
        {/*====== LATEST NEWS END ======*/}
        <Footer/>
      </div>
    );
  }
}

export default Home;
