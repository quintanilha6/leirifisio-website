import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Mainbanner from '../sections/homepage-one/Banner';
import HomeAbout from '../sections/homepage-one/About';
import ServiceType from '../sections/homepage-one/ServiceType';
import Cta from '../sections/homepage-one/Cta';
import Testimonial from '../sections/homepage-one/Testimonials';
import News from '../sections/homepage-one/News';
import AboutBreadcrumb from '../sections/about/Breadcrumb';
import AboutSection from '../sections/about/About';
import Roomgallery from '../sections/homepage-one/Roomgallery';
import Corefeature from '../sections/about/Corefeature';
import Counter from '../sections/about/Counter';
import PartnershipsBreadcrumb from '../sections/partnerships/Breadcrumb';
import Textbox from '../sections/partnerships/Textbox';
import Partnerslider from '../sections/partnerships/Partnerslider';
import ContactSection from '../sections/contact/ContactSection';

function StaticPage() {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <Mainbanner />
          <HomeAbout />
          <ServiceType />
          <Cta />
          <Testimonial />
          <News />
        </section>

        <section id="about">
          <AboutBreadcrumb />
          <AboutSection />
          <Roomgallery />
          <Corefeature />
          <Counter />
        </section>

        <section id="partnerships">
          <PartnershipsBreadcrumb />
          <Textbox />
          <Partnerslider />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default StaticPage;
