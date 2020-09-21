import React, { Component } from 'react';
import ReactWOW from 'react-wow'

class Corefeature extends Component {
  render() {
    return (
      <section className="core-feature-section bg-black pt-115 pb-115">
          <div className="container">
            <div className="section-title white-color text-center mb-50">
              <span className="title-tag"> núcleo </span>
              <h2>Características</h2>
            </div>
            {/* Featre Loop */}
            <div className="row features-loop">
              <div className="col-lg-4 col-sm-6 order-1">
                <ReactWOW animation="fadeInLeft" data-wow-delay=".3s">
                <div className="feature-box dark-box">
                  <div className="icon">
                    <i className="flaticon-quality" />
                  </div>
                  <h3><a>Boa classificação</a></h3>
                  <p>
                    Ao longos dos anos, acumulamos feedbacks e comentários positivos de todos os  nossos utentes.
                  </p>
                  <span className="count">01</span>
                </div>
                </ReactWOW>
              </div>
              <div className="col-lg-4 col-sm-6 order-2">
              <ReactWOW animation="fadeInDown" data-wow-delay=".4s">
                <div className="feature-box dark-box">
                  <div className="icon">
                    <i className="flaticon-meditation" />
                  </div>
                  <h3><a>Espaço calmo</a></h3>
                  <p>
                    Durante as  sessões, oferecemos um ambiente calmo propício ao bem-estar dos nossos utentes.
                  </p>
                  <span className="count">02</span>
                </div>
                </ReactWOW>
              </div>
              <div className="col-lg-4 col-sm-6 order-3 order-sm-4 order-lg-3">
              <ReactWOW animation="fadeInRight" data-wow-delay=".5s">
                <div className="feature-box dark-box">
                  <div className="icon">
                    <i className="flaticon-parking" />
                  </div>
                  <h3><a>Boa Localização</a></h3>
                  <p> 
                    Bem localizada. Perto do Seminário Diocesano de Leiria, numa rua residencial, de fácil estacionamento.
                  </p>
                  <span className="count">03</span>
                </div>
                </ReactWOW>
              </div>
              <div className="col-lg-4 col-sm-6 order-4 order-sm-3 order-lg-4">
              <ReactWOW animation="fadeInLeft" data-wow-delay=".6s">
                <div className="feature-box dark-box">
                  <div className="icon">
                    <i className="flaticon-error" />
                  </div>
                  <h3><a>Cancelamentos</a></h3>
                  <p>
                  Podem existir imprevistos. Por isso, aceitamos cancelamentos com justa causa, devidamente fundamentados.
                  </p>
                  <span className="count">04</span>
                </div>
                </ReactWOW>
              </div>
              <div className="col-lg-4 col-sm-6 order-5">
              <ReactWOW animation="fadeInUp" data-wow-delay=".7s">
                <div className="feature-box dark-box">
                  <div className="icon">
                    <i className="flaticon-home" />
                  </div>
                  <h3><a>Espaço</a></h3>
                  <p>
                  Grande espaço amplo, envidraçado e com ótima exposição solar. 
                  Receção, 2 salas de tratamentos privadas e 1 WC.
                  </p>
                  <span className="count">05</span>
                </div>
                </ReactWOW>
              </div>
              <div className="col-lg-4 col-sm-6 order-6">
              <ReactWOW animation="fadeInRight" data-wow-delay=".8s">
                <div className="feature-box dark-box">
                  <div className="icon">
                    <i className="flaticon-handshake" />
                  </div>
                  <h3><a to="/partnerships">Parcerias</a></h3>
                  <p>
                    Fale connosco e saiba de que forma pode aceder a descontos e outras vantagens.
                  </p>
                  <span className="count">06</span>
                </div>
                </ReactWOW>
              </div>
            </div>
          </div>
        </section>
        
    );
  }
}

export default Corefeature;
