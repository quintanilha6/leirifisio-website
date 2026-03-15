import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class Roomgallery extends Component {
  render() {
    return (
      <section
        className="room-gallery-cta"
        style={{ backgroundImage: 'url(assets/img/leirifisio/13.JPG)' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cta-text text-center">
                <span>instalações</span>
                <h2>Espaços amplos e salas privadas para tratamentos. Venha conhecê-los.</h2>
                <ul className="mt-50">
                  <ReactWOW animation="fadeInUp" data-wow-delay=".3s">
                    <li>
                      <a className="main-btn btn-filled" href="#home">
                        Leirifisio
                      </a>
                    </li>
                  </ReactWOW>
                  <ReactWOW animation="fadeInUp" data-wow-delay=".5s">
                    <li>
                      <a className="main-btn btn-border" href="#contact">
                        Contacte-nos
                      </a>
                    </li>
                  </ReactWOW>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="rotate-images">
          <img src="assets/img/leirifisio/2.JPG" className="rotate-image-one" alt="" />
          <img src="assets/img/leirifisio/12.JPG" className="rotate-image-two" alt="" />
          <img src="assets/img/leirifisio/7.JPG" className="rotate-image-three" alt="" />
        </div>
      </section>
    );
  }
}

export default Roomgallery;
