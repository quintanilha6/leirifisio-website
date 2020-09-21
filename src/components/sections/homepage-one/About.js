import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'

class About extends Component {
  scrollToAbout() {
    window.scrollTo({
      top: 950,
      behavior: "smooth"
    });
  }
  
  render() {
    return (
        <section className="about-section pt-115 pb-115">
        <div className="container">
          <div className="down-arrow-wrap text-center">
            <Link className="down-arrow" onClick={e => e.preventDefault()}>
              <i className="fal fa-arrow-down" />
            </Link>
          </div>
          <div className="section-title about-title text-center mb-20">
            <span className="title-tag">Desde <span>2002</span></span>
            <h2>Situada no coração da Cidade de Leiria, a Leirifisio fornece vários serviços de Fisioterapia e Movimento.</h2>
          </div>
          <ul className="about-features masonry-layout">
            <ReactWOW animation='fadeInUp' data-wow-delay=".3s">
            <li>
              <Link to="#" onClick={e => e.preventDefault()}>
                <i className="flaticon-benefit" />
                <i className="hover-icon flaticon-benefit" />
                <span className="title">Bem estar</span>
              </Link>
            </li>
            </ReactWOW>
            <ReactWOW animation='fadeInUp' data-wow-delay=".5s">
            <li >
              <Link to="#" onClick={e => e.preventDefault()}>
                <i className="flaticon-healthcare" />
                <i className="hover-icon flaticon-healthcare" />
                <span className="title">Atendimento personalizado</span>
              </Link>
            </li>
            </ReactWOW>
            <ReactWOW animation='fadeInUp' data-wow-delay=".7s">
            <li>
              <Link to="#" onClick={e => e.preventDefault()}>
                <i className="flaticon-home-1" />
                <i className="hover-icon flaticon-home-1" />
                <span className="title">Boa localização</span>
              </Link>
            </li>
            </ReactWOW>
            <ReactWOW animation='fadeInUp' data-wow-delay=".9s">
            <li>
              <Link to="#" onClick={e => e.preventDefault()}>
                <i className="flaticon-gymnast" />
                <i className="hover-icon flaticon-gymnast" />
                <span className="title">Aulas de ginástica</span>
              </Link>
            </li>
            </ReactWOW>
            <ReactWOW animation='fadeInUp' data-wow-delay="1.1s">
            <li>
              <Link to="#" onClick={e => e.preventDefault()}>
                <i className="flaticon-doctor" />
                <i className="hover-icon flaticon-doctor" />
                <span className="title">Médicos Especialistas</span>
              </Link>
            </li>
            </ReactWOW>
          </ul>
        </div>
      </section>
    );
  }
}

export default About;
