import React, { Component } from 'react';
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
            <div className="section-title about-title text-center">
              <h2>A Leirifisio apresenta protocolos com as seguintes entidades parceiras:</h2>
            </div>
          </div>
        </section>
        
    );
  }
}

export default About;
