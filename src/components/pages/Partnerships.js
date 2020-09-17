import React, { Component } from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumb from '../sections/partnerships/Breadcrumb';
import Partnerslider from '../sections/partnerships/Partnerslider';
import Textbox from '../sections/partnerships/Textbox';

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*====== BREADCRUMB PART START ======*/}
        <Breadcrumb/>
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== TEXTBOX PART START ======*/}
        <Textbox/>
        {/*====== TEXTBOX PART END ======*/}
        {/*====== PARTNERSHIPSLIDER PART START ======*/}
        <Partnerslider/>
        {/*====== PARTNERSHIPSLIDER PART END ======*/}
        {/*====== FOOTER START ======*/}
        <Footer />
      </div>
    );
  }
}

export default About;
