import React, { Component } from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumb from '../sections/about/Breadcrumb';
import Aboutpage from '../sections/about/About';
import Corefeature from '../sections/about/Corefeature';
import Counter from '../sections/about/Counter';
import News from '../sections/about/News';
import Roomgallery from '../sections/homepage-one/Roomgallery';


class About extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*====== BREADCRUMB PART START ======*/}
        <Breadcrumb/>
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== ABOUT PART START ======*/}
        <Aboutpage/>
        <Roomgallery/>
        {/*====== ABOUT PART END ======*/}
        {/*====== CORE FEATURES START ======*/}
        <Corefeature/>
        {/*====== CORE FEATURES END ======*/}
        {/*====== COUNTER UP START ======*/}
        <Counter/>
        {/*====== COUNTER UP END ======*/}
        {/*====== LATEST NEWS START ======*/}
        <News/>
        {/*====== LATEST NEWS END ======*/}
        <Footer />
      </div>
    );
  }
}

export default About;
