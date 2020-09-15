import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
       redText: false
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({
          isTop: window.scrollY > 300
      });
  }, false);
  } 
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    const className = this.state.isTop ? 'active' : '';
    return (
      <div>
        {/*====== Back to Top ======*/}
        
        <Link to="#" className={`back-to-top ${className}`} id="backToTop" onClick={() => this.scrollToTop()}>
          <i className="fal fa-angle-double-up" />
        </Link>
        
        {/*====== FOOTER PART START ======*/}
        <footer>
          <div className="footer-subscibe-area pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="subscribe-text text-center">
                    <div className="footer-logo mb-45">
                      <img src="assets/img/leirifisio/logo-sem-texto.png" alt="" />
                    </div>
                    <p>
                    Com 18 anos de sucesso, a Leirifisio destaca-se pela disponibilização de diferentes serviços de Fisioterapia adaptados às necessidades particulares de cada um dos nossos clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*====== FOOTER PART END ======*/}
      </div>
    );
  }
}

export default Footer;