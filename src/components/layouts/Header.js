import React, { Component } from 'react';
import classNames from 'classnames';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

const navigationmenu = [
  {
    id: 1,
    linkText: 'Leirifisio',
    link: '#home',
    child: false,
  },
  {
    id: 2,
    linkText: 'Sobre nós',
    child: false,
    link: '#about',
  },
  {
    id: 3,
    linkText: 'Parcerias',
    child: false,
    link: '#partnerships',
  },
  {
    id: 4,
    link: '#contact',
    linkText: 'Contacto',
    child: false,
  },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redText: false,
      isMobile: false,
      isTop: false,
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }

  componentDidMount() {
    const setResponsiveState = () => {
      this.setState({
        isMobile: window.innerWidth < 1020,
      });
    };

    const setStickyState = () => {
      this.setState({
        isTop: window.scrollY > 150,
      });
    };

    setResponsiveState();
    setStickyState();

    window.addEventListener('resize', setResponsiveState, false);
    window.addEventListener('load', setResponsiveState, false);
    window.addEventListener('scroll', setStickyState, false);
  }

  addClass() {
    this.setState({
      redText: true,
    });
  }

  removeClass() {
    this.setState({
      redText: false,
    });
  }

  removeAll() {
    this.setState({
      redText: false,
    });
  }

  navToggle = () => {
    const nv = findDOMNode(this.refs.navmenu);
    const nvb = findDOMNode(this.refs.navbtn);
    $(nv).toggleClass('menu-on');
    $(nvb).toggleClass('active');
  };

  removenavToggle = () => {
    const nv = findDOMNode(this.refs.navmenu);
    const nvb = findDOMNode(this.refs.navbtn);
    $(nv).removeClass('menu-on');
    $(nvb).removeClass('active');
  };

  getNextSibling = function (elem, selector) {
    let sibling = elem.nextElementSibling;

    if (!selector) return sibling;

    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.nextElementSibling;
    }
  };

  triggerChild = (e) => {
    let subMenu = '';

    subMenu =
      this.getNextSibling(e.target, '.submenu') !== undefined
        ? this.getNextSibling(e.target, '.submenu')
        : null;

    if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
      subMenu.classList = subMenu.classList.contains('open')
        ? 'submenu'
        : 'submenu open';
    }
  };

  render() {
    const className = this.state.isMobile ? 'breakpoint-on' : '';
    const classNamess = this.state.isMobile ? 'd-none' : '';
    const classNamesss = this.state.isTop ? 'sticky-active' : '';

    return (
      <div>
        <header className={`header-absolute sticky-header ${classNamesss}`}>
          <div className="container container-custom-one">
            <div
              className={`nav-container d-flex align-items-center justify-content-between ${className}`}
            >
              <div className="nav-menu d-lg-flex align-items-center" ref="navmenu">
                <div className="navbar-close" onClick={this.removenavToggle}>
                  <div className="cross-wrap">
                    <span className="top" />
                    <span className="bottom" />
                  </div>
                </div>

                <div className="toggle" onClick={this.addClass}>
                  <a
                    href="#menu"
                    id="offCanvasBtn"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fal fa-bars" />
                  </a>
                </div>

                <div className="menu-items">
                  <ul>
                    {navigationmenu.length > 0
                      ? navigationmenu.map((item, i) => (
                          <li
                            key={i}
                            className={` ${item.child ? 'menu-item-has-children' : ''} `}
                            onClick={this.triggerChild}
                          >
                            {item.child ? (
                              <a href="#submenu" onClick={(e) => e.preventDefault()}>
                                {item.linkText}
                              </a>
                            ) : (
                              <a href={item.link} onClick={this.removenavToggle}>
                                {item.linkText}
                              </a>
                            )}
                            {item.child
                              ? (
                                  <ul className="submenu" role="menu">
                                    {item.submenu.map((sub_item, j) => (
                                      <li
                                        key={j}
                                        className={`${sub_item.child ? 'menu-item-has-child' : ''} `}
                                      >
                                        {sub_item.child ? (
                                          <a href="#submenu" onClick={(e) => e.preventDefault()}>
                                            {sub_item.linkText}
                                          </a>
                                        ) : (
                                          <a href={sub_item.link}>{sub_item.linkText}</a>
                                        )}
                                        {sub_item.third_menu
                                          ? (
                                              <ul className="submenu">
                                                {sub_item.third_menu.map((third_item, k) => (
                                                  <li key={k}>
                                                    <a href={third_item.link}>
                                                      {third_item.linkText}
                                                    </a>
                                                  </li>
                                                ))}
                                              </ul>
                                            )
                                          : null}
                                      </li>
                                    ))}
                                  </ul>
                                )
                              : null}
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
                <div className="nav-pushed-item" />
              </div>

              <div className="site-logo">
                <a href="#home">
                  <img
                    src="assets/img/leirifisio/logo-sem-texto-lado.png"
                    alt="Leirifisio"
                  />
                </a>
              </div>

              <div className={`nav-push-item ${classNamess}`}>
                <div className="header-info d-lg-flex align-items-center">
                  <div className="item">
                    <i className="fas fa-phone" />
                    <span>Telefone</span>
                    <a href="tel:244838574">
                      <h5 className="title">244 838 574</h5>
                    </a>
                  </div>
                  <div className="item">
                    <i className="fas fa-envelope" />
                    <span>E-mail</span>
                    <a href="mailto:leirifisio@gmail.com">
                      <h5 className="title">leirifisio@gmail.com</h5>
                    </a>
                  </div>
                </div>
              </div>

              <div className="navbar-toggler" onClick={this.navToggle} ref="navbtn">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </header>

        <div
          className={classNames('offcanvas-wrapper', {
            'show-offcanvas': this.state.redText,
          })}
        >
          <div
            className={classNames('offcanvas-overly', {
              'show-overly': this.state.redText,
            })}
            onClick={this.removeAll}
          />
          <div className="offcanvas-widget">
            <a
              href="#close"
              className="offcanvas-close"
              onClick={(e) => {
                e.preventDefault();
                this.removeClass();
              }}
            >
              <i className="fal fa-times" />
            </a>
            <div className="widget about-widget">
              <h5 className="widget-title">Sobre nós</h5>
              <p>
                A Leirifisio é um centro de Fisioterapia e Movimento privado
                fundado em 2002. Atualmente gerido por Manuela Silva, Licenciada
                em Fisioterapia, a Leirifisio está situada no centro de Leiria,
                junto ao Seminário Diocesano de Leiria. Venha conhecer-nos.
              </p>
            </div>
            <div className="widget nav-widget">
              <h5 className="widget-title">Páginas</h5>
              <ul>
                <li>
                  <a href="#home" onClick={this.removeClass}>Leirifisio</a>
                </li>
                <li>
                  <a href="#about" onClick={this.removeClass}>Sobre nós</a>
                </li>
                <li>
                  <a href="#partnerships" onClick={this.removeClass}>Parcerias</a>
                </li>
                <li>
                  <a href="#contact" onClick={this.removeClass}>Contacto</a>
                </li>
              </ul>
            </div>
            <div className="widget social-link">
              <h5 className="widget-title">Contacte-nos</h5>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/leirifisio/"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="mailto:leirifisio@gmail.com">
                    <i className="fab fa-google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
