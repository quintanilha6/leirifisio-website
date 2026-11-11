import React, { Component } from 'react';
import ReactWOW from 'react-wow'

const especialidades = [
  {
    icon: 'fal fa-heart-broken',
    title: 'Luto e perda',
    desc: 'Acompanhamento na vivência da perda de alguém ou de algo significativo.',
  },
  {
    icon: 'fal fa-cloud-rain',
    title: 'Depressão',
    desc: 'Apoio para recuperar o equilíbrio emocional, a motivação e o bem-estar.',
  },
  {
    icon: 'fal fa-head-side-brain',
    title: 'Ansiedade',
    desc: 'Estratégias para compreender e gerir a preocupação, o medo e o nervosismo.',
  },
  {
    icon: 'fal fa-battery-quarter',
    title: 'Stress e Burnout',
    desc: 'Ajuda a lidar com a exaustão e a pressão do trabalho e do dia a dia.',
  },
  {
    icon: 'fal fa-user-friends',
    title: 'Dificuldades emocionais e relacionais',
    desc: 'Espaço para trabalhar emoções e melhorar a relação consigo e com os outros.',
  },
];

class Cta extends Component {
  render() {
    return (
        <section id="psicologiaSection" className="cta-section pt-115 pb-160">
          <div className="container">
            <div className="cta-inner">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8 col-sm-9 col-10 order-2 order-lg-1">
                  <div className="cta-text">
                    <div className="section-title mb-20">
                      <span className="title-tag">Novo serviço</span>
                      <h2>Psicologia Clínica</h2>
                    </div>
                    <p>
                      A Leirifisio tem agora consultas de Psicologia Clínica com a Dra. Carolina Caseiro,
                      psicóloga com cédula profissional nº 28860. Um espaço seguro e confidencial para
                      cuidar da sua saúde mental.
                    </p>
                    <p>Marcações: <a href="tel:919726119"><strong>919 726 119</strong></a></p>
                    <a href="tel:919726119" className="main-btn btn-filled">Marcar consulta</a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-10 col-sm-11 col-10 order-1 order-lg-2">
                  <div className="cta-features">
                    {especialidades.map((item, i) => (
                      <ReactWOW key={i} animation="fadeInUp" data-wow-delay={`.${3 + i}s`}>
                        <div className="single-feature">
                          <div className="icon">
                            <i className={item.icon} />
                          </div>
                          <div className="cta-desc">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <span className="count">{String(i + 1).padStart(2, '0')}</span>
                          </div>
                        </div>
                      </ReactWOW>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Cta;
