import React, { Component } from 'react';
import CountUp from 'react-countup';

class Counter extends Component {
  render() {
    return (
      
      <section className="counter-section pt-115">
      <div className="container">
        {/* Section Title */}
        <div className="section-title mb-80">
          <span className="title-tag">contador</span>
          <h2>Alguns factos</h2>
        </div>
        {/* Counter */}
        <div className="row justify-content-center">
          <div className="col-lg-4 col-6">
            <div className="counter-box counter-box-two">
              <div className="icon">
                <i className="flaticon-user-1" />
              </div>
              <h4><CountUp end={3548} duration={5}/></h4>
              <span className="title">Clientes satisfeitos</span>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <div className="counter-box counter-box-two">
              <div className="icon">
                <i className="flaticon-like" />
              </div>
              <h4><CountUp end={182} duration={5}/></h4>
              <span className="title">Comentários positivos</span>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <div className="counter-box counter-box-two">
              <div className="icon">
                <i className="flaticon-suitcase" />
              </div>
              <h4><CountUp end={0} duration={5}/></h4>
              <span className="title">Reclamações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Counter;
