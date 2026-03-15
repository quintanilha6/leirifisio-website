import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redText: false,
      isTop: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({
        isTop: window.scrollY > 300,
      });
    }, false);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    const className = this.state.isTop ? 'active' : '';

    return (
      <div>
        <a
          href="#home"
          className={`back-to-top ${className}`}
          id="backToTop"
          onClick={(e) => {
            e.preventDefault();
            this.scrollToTop();
          }}
        >
          <i className="fal fa-angle-double-up" />
        </a>

        <footer>
          <div className="footer-subscibe-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="subscribe-text text-center">
                    <div className="footer-logo mb-45">
                      <img src="assets/img/leirifisio/logo-sem-texto.png" alt="" />
                    </div>
                    <p>
                      Com {new Date().getFullYear() - 2002} anos de sucesso, a
                      Leirifisio destaca-se pela disponibilização de diferentes
                      serviços de Fisioterapia adaptados às necessidades de cada
                      um dos nossos utentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
