import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';

class ServiceType extends Component {
  render() {
    return (
        <section className="room-type-section pt-115 pb-115" style={{backgroundImage: 'url(assets/img/leirifisio/7.JPG)'}}>
          <Tab.Container defaultActiveKey="reabilitacao">
              <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title text-lg-left text-center">
                  <h2>Alguns dos Serviços</h2>
                </div>
              </div>
              <div className="col-lg-6">
              <Nav variant="pills" className="room-filter nav nav-pills justify-content-center justify-content-lg-end">

                <Nav.Item>
                <Nav.Link eventKey="reabilitacao">Reabilitação</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <Nav.Link eventKey="cinesioterapia">Cinesioterapia</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <Nav.Link eventKey="electroterapia">Electroterapia</Nav.Link>
                </Nav.Item>

                </Nav>
                </div>
            </div>
            <Tab.Content className="mt-65">
                <Tab.Pane eventKey="reabilitacao">
                    <div className="room-items">
                    <div className="row">
                        <div className="col-lg-8">
                        <div className="row">
                            <div className="col-12">
                            <div className="room-box extra-wide">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/r_muscular.jpg)'}} />
                                <div className="room-content">
                                <h3><Link to="/room-details">Reabilitação Muscular</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/r_respiratoria.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <h3><Link to="/room-details">Reabilitação Respiratória</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/r_pediatrica.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <h3><Link to="/room-details">Reabilitação Pediátrica</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="room-box extra-height">
                            <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/r_neurologica.jpg)'}}>
                            </div>
                            <div className="room-content">
                            <h3><Link to="/room-details">Reabilitação Neurológica</Link></h3>
                            </div>
                            <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </Tab.Pane>

                <Tab.Pane eventKey="cinesioterapia">
                    <div className="room-items">
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="room-box extra-height">
                            <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/c_massagem_drenagem.jpg)'}}>
                            </div>
                            <div className="room-content">
                            <h3><Link to="/room-details">Massagem de drenagem linfática</Link></h3>
                            </div>
                            <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/c_massagem_local.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <h3><Link to="/room-details">Massagem manual local</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/c_respiratoria.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <h3><Link to="/room-details">Cinesioterapia respiratória</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-12">
                            <div className="room-box extra-wide">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/c_massagem_geral.jpg)'}} />
                                <div className="room-content">
                                <h3><Link to="/room-details">Massagem manual geral</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </Tab.Pane>

                <Tab.Pane eventKey="electroterapia">
                    <div className="room-items">
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="room-box extra-height">
                            <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/e_ultrasons.jpg)'}}>
                            </div>
                            <div className="room-content">
                            <h3><Link to="/room-details">Ultra-sons</Link></h3>
                            </div>
                            <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="row">
                            <div className="col-12">
                            <div className="room-box extra-wide">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/e_correntes.jpg)'}} />
                                <div className="room-content">
                                <h3><Link to="/room-details">Correntes galvânicas</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/e_laser.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <h3><Link to="/room-details">Laser</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/e_ondascurtas.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <h3><Link to="/room-details">Ondas curtas</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </Tab.Pane>
                

            </Tab.Content>
            </div>
            </Tab.Container>
        </section>
    );
  }
}

export default ServiceType;
