import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-modal/styles.css';

class About extends Component {
  state = {
    open: false,
    };
    onOpenModal = () => {
    this.setState({ open: true });
    };
    
    onCloseModal = () => {
    this.setState({ open: false });
    };
    render() { 
    const { open } = this.state;
    return (
      <section className="about-section pt-115 pb-115">
          <div className="container">
            {/*<div className="video-wrap video-wrap-two video-about mb-60" style={{backgroundImage: 'url(assets/img/text-block/04.jpg)'}}>*/}
            <div className="video-wrap video-wrap-two video-about mb-60" style={{backgroundImage: 'url(assets/img/leirifisio/14.JPG)'}}>
            </div>
            <div className="section-title about-title text-center">
              <span className="title-tag">desde <span>2002</span></span>
              <h2>A Leirifisio cuida de si, cuida de todos. Venha conhecer-nos.</h2>
            </div>
            <div className="about-text-box">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about-img">
                    <img src="assets/img/leirifisio/3.JPG" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-text">
                    <span>instalações</span>
                    <h3>Conheça o nosso estabelecimento</h3>
                    <p>
                    Um grande open-space que permite o atendimento ao balcão, respeitando a distância mínima de 1m e sala de espera com distância mínima de 1m.
                    Permite o período de tempo necessário entre utentes para higienizar o espaço e o material utilizado e evitar cruzamento entre utentes bem como 
                    a higienização das mãos à entrada e à saída do estabelecimento, e antes de colocar e após a remoção dos Equipamentos de Proteção Individual.
                    <p>Para mais informações, não hesite em <Link to="/contact" >contactar-nos</Link>.</p>
                    </p>
                    <Link to="/contact" className="main-btn btn-filled">Contacte-nos</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
    );
  }
}

export default About;
