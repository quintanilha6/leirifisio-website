import React, { Component } from 'react';
import Slider from "react-slick";

import graca from '../../../assets/img/testimonial/graca.jpg';
import eulalia from '../../../assets/img/testimonial/eulalia.jpg';
import mariacandida from '../../../assets/img/testimonial/mariacandida.jpg';
import nuno from '../../../assets/img/testimonial/nuno.jpg';

const testimonialPosts = [
  {
    photo: mariacandida,
    name: 'Maria Cândida Almeida',
    designation: 'Funcionária pública',
    desc: 'Recomendo! Excelentes profissionais, sempre a dar qualidade de vida aos que as solicitam a minorar as "dores".',
  },
  {
    photo: nuno,
    name: 'Nuno Dias',
    designation: 'Professor',
    desc: 'Obrigado por tratarem as minhas mazelas (uma fasceite plantar e uma fibrose). Sei onde voltar se precisar.',
  },
  {
    photo: eulalia,
    name: 'Eulália Coutinho',
    designation: 'Funcionária pública',
    desc: 'Parabéns Leirifisio! Por ser quem são! Por ser como são! Muito obrigado! Continuem o bom trabalho.',
  },
  {
    photo: graca,
    name: 'Graça Santos',
    designation: 'Professora',
    desc: 'Excelente! Parabéns! Continuem o óptimo trabalho da vossa parte para bem de todos nós.',
  },
];

class Testmonials extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  };
    return (
      <section className="testimonial-section pb-115 pt-115">
          <div className="container">
            <div className="section-title text-center mb-80">
              <span className="title-tag">testemunhos</span>
              <h2>Feedback dos Clientes</h2>
            </div>
            {/* testimonials loop  */}
            <Slider className="row testimonial-slider" {...settings}>
            {testimonialPosts.map((item, i) => (
              <div key={i} className="col-lg-12">
                <div className="testimonial-box">
                  <div className="client-img">
                    <img src={item.photo} alt="" />
                    <span className="check"><i className="fal fa-check" /></span>
                  </div>
                  <h3>{item.name}</h3>
                  <span className="clinet-post">{item.designation}</span>
                  <p>
                  {item.desc}
                  </p>
                </div>
              </div>
              ))}
            </Slider>
          </div>
        </section>
    );
  }
}

export default Testmonials;
