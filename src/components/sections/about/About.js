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
              <h2>A vontade de ajudar e a simpatia reinam nesta casa, pois a Leirifisio dá tudo pelos seus clientes e a sua saúde.</h2>
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
                    Um grande open-space capaz de fornecer não só o respeito ao devido distânciamento social mas também a privacidade de cada utente. Mantemos os espaços limpos e desinfetados com a regularidade máxima. Temos vários locais de espera e refrigeração perto da recepção e outros locais de descanso ao longo das instalações. Não hesite em contactar para mais informações. 
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
