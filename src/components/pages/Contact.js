import React, { Component } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*====== BREADCRUMB PART START ======*/}
        <section
          className="breadcrumb-area"
          style={{ backgroundImage: "url(assets/img/leirifisio/12.JPG)" }}
        >
          <div className="container">
            <div className="breadcrumb-text">
              <span>Centro de Fisioterapia e Movimento</span>
              <h2 className="page-title">Contacte-nos</h2>
              <ul className="breadcrumb-nav">
                <li>
                  <Link to="/">Leirifisio</Link>
                </li>
                <li className="active">Contacto</li>
              </ul>
            </div>
          </div>
        </section>
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== CONTACT PART START ======*/}
        <section className="contact-part pt-115 pb-115">
          <div className="container">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="row justify-content-center">
                <div className="col-md-6 col-12 d-flex">
                  <div className="info-box w-100">
                    <div className="icon">
                      <i className="flaticon-phone" />
                    </div>
                    <div className="desc">
                      <h4>Telefone</h4>
                      <p>
                        Rede fixa: <a href="tel:244838574">244 838 574</a> <br />
                        Rede móvel: <a href="tel:933739388">933 739 388</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 d-flex">
                  <div className="info-box w-100">
                    <div className="icon">
                      <i className="flaticon-message" />
                    </div>
                    <div className="desc">
                      <h4>E-mail</h4>
                      <p>
                        <a href="mailto:leirifisio@gmail.com">leirifisio@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 d-flex">
                  <div className="info-box w-100">
                    <div className="icon">
                      <i className="flaticon-home" />
                    </div>
                    <div className="desc">
                      <h4>Morada</h4>
                      <p>
                        R. Dom Horácio Coelho Cristino Lote 6, Nº8 <br />
                        2410-036 Leiria
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 d-flex">
                  <div className="info-box w-100">
                    <div className="icon">
                      <i className="fal fa-brain" />
                    </div>
                    <div className="desc">
                      <h4>Psicologia Clínica</h4>
                      <p>
                        Dra. Carolina Caseiro (cédula nº 28860) <br />
                        Marcações: <a href="tel:919726119">919 726 119</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Mapts */}
            <div className="contact-maps mb-30">
              <iframe
                src="https://maps.google.com/maps?q=Leirifisio%20-%20Centro%20de%20Fisioterapia%20e%20Movimento%20Lda&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="title"
              />
            </div>
          </div>
        </section>
        {/*====== CONTACT PART END ======*/}
        <Footer />
      </div>
    );
  }
}

export default Contact;
