import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                  <h3><Link to="#">Boa classificação</Link></h3>
                  <p>
                    Ao longos dos anos, acumulamos feedbacks e comentários positivos de toda a diversidade dos nossos utentes 
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
                  <h3><Link to="#">Espaço calmo</Link></h3>
                  <p>
                    Durante qualquer sessão, oferecemos aos utentes um ambiente calmo e susceptível ao bem-estar do mesmo.
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
                  <h3><Link to="#">Boa localização</Link></h3>
                  <p>
                    Perto do Seminário Diocesano de Leiria. Várias opções para estacionamento de veículos. 
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
                  <h3><Link to="#">Cancelamento</Link></h3>
                  <p>
                    Estamos conscientes de que podem existir imprevistos. Por isso aceitamos cancelamentos com justa causa
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
                  <h3><Link to="#">Espaço amplo</Link></h3>
                  <p>
                    Com um grande espaço amplo e uma óptima exposição solar, garantimos o destanciamento social necessário
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
                  <h3><Link to="/partnerships">Parcerias</Link></h3>
                  <p>
                    Junto com os protocolos, a Leirifisio garante descontos legíveis nos tratamentos com parcerias
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
