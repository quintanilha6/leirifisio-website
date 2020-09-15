import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
  render() {
    return (
      <section className="breadcrumb-area" style={{backgroundImage: 'url(assets/img/leirifisio/3.JPG)'}}>
          <div className="container">
            <div className="breadcrumb-text">
              <span>Centro de Fisioterapia e Movimento
              </span>
              <h2 className="page-title">Sobre nós</h2>
              <ul className="breadcrumb-nav">
                <li><Link to="/">Leirifisio</Link></li>
                <li className="active">Sobre nós</li>
              </ul>
            </div>
          </div>
        </section>
    );
  }
}

export default Breadcrumb;
