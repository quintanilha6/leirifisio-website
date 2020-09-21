import React, { Component } from 'react';
import { Tab, Nav } from 'react-bootstrap';

class ServiceType extends Component {
  render() {
    return (
        <section id="serviceTypeSection" className="room-type-section pt-115 pb-115" style={{backgroundImage: 'url(assets/img/leirifisio/7.JPG)'}}>
          <Tab.Container defaultActiveKey="reabilitacao">
              <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title text-lg-left text-center">
                  <h2>Alguns dos nossos Serviços</h2>
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
                                <h3 class="whiteTextOverride">Reabilitação Muscular</h3>
                                </div>
                                <i className="fal fa-arrow-right" />
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/r_respiratoria.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <h3 class="whiteTextOverride">Reabilitação Respiratória</h3>
                                </div>
                                <i className="fal fa-arrow-right" />
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/r_pediatrica.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <h3 class="whiteTextOverride">Reabilitação Pediátrica</h3>
                                </div>
                                <i className="fal fa-arrow-right" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="room-box extra-height">
                            <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/r_neurologica.jpg)'}}>
                            </div>
                            <div className="room-content">
                            <h3 class="whiteTextOverride">Reabilitação Neurológica</h3>
                            </div>
                            <i className="fal fa-arrow-right" />
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
                            <h3 class="whiteTextOverride">Massagem de drenagem linfática</h3>
                            </div>
                            <i className="fal fa-arrow-right" />
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/c_massagem_local.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <h3 class="whiteTextOverride">Massagem manual local</h3>
                                </div>
                                <i className="fal fa-arrow-right" />
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/c_respiratoria.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <h3 class="whiteTextOverride">Cinesioterapia respiratória</h3>
                                </div>
                                <i className="fal fa-arrow-right" />
                            </div>
                            </div>
                            <div className="col-12">
                            <div className="room-box extra-wide">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/c_massagem_geral.jpg)'}} />
                                <div className="room-content">
                                <h3 class="whiteTextOverride">Massagem manual geral</h3>
                                </div>
                                <i className="fal fa-arrow-right" />
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
                            <h3 class="whiteTextOverride">Ultra-sons</h3>
                            </div>
                            <i className="fal fa-arrow-right" />
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="row">
                            <div className="col-12">
                            <div className="room-box extra-wide">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/e_correntes.jpg)'}} />
                                <div className="room-content">
                                <h3 class="whiteTextOverride">Correntes galvânicas</h3>
                                </div>
                                <i className="fal fa-arrow-right" />
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/e_laser.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <h3 class="whiteTextOverride">Laser</h3>
                                </div>
                                <i className="fal fa-arrow-right" />
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/fisio/e_ondascurtas.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <h3 class="whiteTextOverride">Ondas curtas</h3>
                                </div>
                                <i className="fal fa-arrow-right" />
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
