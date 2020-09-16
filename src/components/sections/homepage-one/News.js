import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";


import corona from '../../../assets/img/latest-post/coronavirus1.jpg';
import reabertura from '../../../assets/img/latest-post/reabertura.jpg';
import diafisioterapia from '../../../assets/img/latest-post/diafisioterapia.jpg';

const blogPosts = [
  {
    photo: diafisioterapia,
    title: 'Hoje é Dia Mundial da Fisioterapia',
    date: ' 7 de Setembro, 2019',
    author: 'Manuela',
    desc: 'Hoje, é Dia Mundial da Fisioterapia. Como tal, a Leirifisio associa-se à data, desejando a todos um excelente dia. Cuide da sua saúde a cima de tudo!',
  },
  {
    photo: reabertura,
    title: 'Leirifisio abre as portas novamente',
    date: ' 4 de Maio, 2020',
    author: 'Manuela',
    desc: 'É com a maior felicidade que a Leirifisio anúncia que a porta estará novamente aberta a partir do dia 4 de Maio de 2020.',
  },
  {
    photo: corona,
    title: 'Leirifisio encerra devido ao COVID-19',
    date: ' 18 de Março, 2020',
    author: 'Manuela',
    desc: 'De acordo com o Decreto do Presidente da República n.º 14-A/2020, de 18 de Março, a Leirifisio é forçada a encerrar.',
  },
];


class News extends Component {
  render() {
    const settings = {
      
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
        dots: false,
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
      <section className="latest-news pt-115 pb-115">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-7">
              <div className="section-title">
                <span className="title-tag">Blog</span>
                <h2>Notícias</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-5 d-none d-sm-block">
              <div className="latest-post-arrow arrow-style text-right">
              </div>
            </div>
          </div>
          {/* Latest post loop */}
          <Slider className="row latest-post-slider mt-80" {...settings}>
          {blogPosts.map((item, i) => (
            <div key={i} className="col-lg-12">
              <div className="latest-post-box">
                <div className="post-img" style={{backgroundImage: "url("+ item.photo + ")"}} />
                <div className="post-desc">
                  <ul className="post-meta">
                    <li>
                      <i className="fal fa-calendar-alt" />{item.date}
                    </li>
                    <li>
                      <i className="fal fa-user" /> {item.author}
                    </li>
                  </ul>
                  <h4>{item.title}</h4>
                  <p>
                  {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </section>
    );
  }
}

export default News;
