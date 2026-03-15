import React, { Component } from 'react';
import 'react-responsive-modal/styles.css';

class About extends Component {
  render() {
    return (
      <section className="about-section pt-115 pb-115">
        <div className="container">
          <div
            className="video-wrap video-wrap-two video-about mb-60"
            style={{ backgroundImage: 'url(assets/img/leirifisio/14_1.JPG)' }}
          />
          <div className="section-title about-title text-center">
            <span className="title-tag">
              desde <span>2002</span>
            </span>
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
                    Um grande open-space que permite o atendimento ao balcão,
                    respeitando a distância mínima de 1m e sala de espera com
                    distância mínima de 1m. Permite o período de tempo
                    necessário entre utentes para higienizar o espaço e o
                    material utilizado e evitar cruzamento entre utentes bem
                    como a higienização das mãos à entrada e à saída do
                    estabelecimento, e antes de colocar e após a remoção dos
                    Equipamentos de Proteção Individual.
                  </p>
                  <p>
                    Para mais informações, não hesite em{' '}
                    <a href="#contact">contactar-nos</a>.
                  </p>
                  <a href="#contact" className="main-btn btn-filled">
                    Contacte-nos
                  </a>
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
