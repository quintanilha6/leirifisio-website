import React from 'react';

function ContactSection() {
  return (
    <div>
      <section
        className="breadcrumb-area"
        style={{ backgroundImage: 'url(assets/img/leirifisio/12.JPG)' }}
      >
        <div className="container">
          <div className="breadcrumb-text">
            <span>Centro de Fisioterapia e Movimento</span>
            <h2 className="page-title">Contacte-nos</h2>
            <ul className="breadcrumb-nav">
              <li>
                <a href="#home">Leirifisio</a>
              </li>
              <li className="active">Contacto</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-part pt-115 pb-115">
        <div className="container">
          <div className="contact-info">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 col-10">
                <div className="info-box">
                  <div className="icon">
                    <i className="flaticon-home" />
                  </div>
                  <div className="desc">
                    <h4>Morada</h4>
                    <p>
                      R. Dom Horácio Coelho Cristino Lote 6, Nº8, 2410-036
                      Leiria
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-10">
                <div className="info-box">
                  <div className="icon">
                    <i className="flaticon-phone" />
                  </div>
                    <div className="desc">
                      <h4>Telefone</h4>
                      <p>
                        Chamada para a rede fixa nacional - 244 838 574 <br />
                        Chamada para a rede móvel nacional - 933 739 388
                      </p>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-10">
                <div className="info-box">
                  <div className="icon">
                    <i className="flaticon-message" />
                  </div>
                  <div className="desc">
                    <h4>E-mail</h4>
                    <p>leirifisio@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-maps mb-30">
            <iframe
              src="https://maps.google.com/maps?q=Leirifisio%20-%20Centro%20de%20Fisioterapia%20e%20Movimento%20Lda&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="Leirifisio map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
