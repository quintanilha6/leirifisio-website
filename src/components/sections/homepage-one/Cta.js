import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'

class Cta extends Component {
  render() {
    return (
      
        <section className="cta-section pt-115 pb-160">
          <div className="container">
            <div className="cta-inner">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8 col-sm-9 col-10 order-2 order-lg-1">
                  <div className="cta-text">
                    <div className="section-title mb-20">
                      <span className="title-tag">chamada para a acção</span>
                      <h2>Covid-19</h2>
                    </div>
                    <p>A Leirifisio oferece-lhe a segurança e o bem-estar que necessita, como espaço ventilado, 
                      número limitado de pessoas no interior, desinfação regular, entre outros.</p>
                    <Link to="/contact" className="main-btn btn-filled">Contacte-nos</Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-10 col-sm-11 col-10 order-1 order-lg-2">
                  {/* feature loop */}
                  <div className="cta-features">
                    {/* feature box */}
                    <ReactWOW animation="fadeInUp" data-wow-delay=".3s">
                    <div className="single-feature ">
                      <div className="icon">
                        <i className="flaticon-virus" />
                      </div>
                      <div className="cta-desc">
                        <h3><Link to="#"  onClick={e => e.preventDefault()} >Máscara &amp; Higiene </Link></h3>
                        <p>
                          O uso de máscara é obrigatório no interior da Leirifisio, bem como 
                          higienização/lavagem das mãos, com água e sabão ou solução alcoólica, à entrada e à saída do estabelecimento.
                        </p>
                        <span className="count">01</span>
                      </div>
                    </div>
                    </ReactWOW>
                    {/* feature box */}
                    <ReactWOW animation="fadeInUp" data-wow-delay=".4s">
                    <div className="single-feature">
                      <div className="icon">
                        <i className="flaticon-handwash" />
                      </div>
                      <div className="cta-desc">
                        <h3><Link to="#"  onClick={e => e.preventDefault()}>Segurança no tratamento</Link></h3>
                        <p>
                        Durante qualquer um dos tratamentos, são cumpridas as recomendações da Direção-Geral da Saúde (DGS)
                        </p>
                        <span className="count">02</span>
                      </div>
                    </div>
                    </ReactWOW>
                    {/* feature box */}
                    <ReactWOW animation="fadeInUp" data-wow-delay=".5s">
                    <div className="single-feature">
                      <div className="icon">
                        <i className="flaticon-temperature" />
                      </div>
                      <div className="cta-desc">
                        <h3><Link to="#"  onClick={e => e.preventDefault()}>Medição da temperatura</Link></h3>
                        <p>
                        Embora não obrigatório, encorajamos os nossos utentes a medir a temperatura com o nosso termómetro digital.
                        </p>
                        <span className="count">03</span>
                      </div>
                    </div>
                    </ReactWOW>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Cta;
