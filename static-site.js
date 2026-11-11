(function () {
  var navMenu = document.getElementById('navmenu');
  var navToggle = document.getElementById('nav-toggle');
  var navClose = document.getElementById('nav-close');
  var offcanvasWrapper = document.getElementById('offcanvas-wrapper');
  var offcanvasOverlay = document.getElementById('offcanvas-overlay');
  var offcanvasOpen = document.getElementById('offcanvas-open');
  var offcanvasClose = document.getElementById('offcanvas-close');
  var backToTop = document.getElementById('backToTop');
  var yearsInBusiness = document.getElementById('years-in-business');
  var servicesScroll = document.getElementById('services-scroll');
  var pageGroups = document.querySelectorAll('.page-group');

  function resolvePageFromHash() {
    var hash = window.location.hash.replace('#', '');

    if (hash === 'about' || hash === 'partnerships' || hash === 'contact' || hash === 'home') {
      return hash;
    }

    return 'home';
  }

  function showPage(page) {
    pageGroups.forEach(function (group) {
      group.classList.toggle('is-active', group.getAttribute('data-page') === page);
    });

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function openMobileMenu() {
    navMenu.classList.add('menu-on');
    navToggle.classList.add('active');
  }

  function closeMobileMenu() {
    navMenu.classList.remove('menu-on');
    navToggle.classList.remove('active');
  }

  function openOffcanvas(event) {
    event.preventDefault();
    offcanvasWrapper.classList.add('show-offcanvas');
    offcanvasOverlay.classList.add('show-overly');
  }

  function closeOffcanvas(event) {
    if (event) {
      event.preventDefault();
    }
    offcanvasWrapper.classList.remove('show-offcanvas');
    offcanvasOverlay.classList.remove('show-overly');
  }

  function onScroll() {
    var header = document.querySelector('.sticky-header');
    if (window.scrollY > 150) {
      header.classList.add('sticky-active');
    } else {
      header.classList.remove('sticky-active');
    }

    if (window.scrollY > 300) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  }

  function initTabs() {
    var links = document.querySelectorAll('.room-filter .nav-link');
    var panes = document.querySelectorAll('.tab-pane');

    links.forEach(function (link) {
      link.addEventListener('click', function () {
        var target = link.getAttribute('data-target');
        links.forEach(function (item) { item.classList.remove('active'); });
        panes.forEach(function (pane) { pane.classList.remove('active'); });
        link.classList.add('active');
        document.getElementById(target).classList.add('active');
      });
    });
  }

  function initCounters() {
    var counters = document.querySelectorAll('[data-counter]');
    if (!('IntersectionObserver' in window)) {
      counters.forEach(function (counter) {
        counter.textContent = counter.getAttribute('data-counter');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        var el = entry.target;
        var end = parseInt(el.getAttribute('data-counter'), 10);
        var startTime = null;

        function step(timestamp) {
          if (!startTime) {
            startTime = timestamp;
          }

          var progress = Math.min((timestamp - startTime) / 1200, 1);
          el.textContent = Math.floor(progress * end);

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            el.textContent = end;
          }
        }

        window.requestAnimationFrame(step);
        obs.unobserve(el);
      });
    }, { threshold: 0.4 });

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  }

  function initSliders() {
    if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.slick) {
      return;
    }

    window.jQuery('.hero-slider-one').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: false
    });

    window.jQuery('.testimonial-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } }
      ]
    });

    window.jQuery('.latest-post-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: false,
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } }
      ]
    });

    window.jQuery('.rooms-slider-one').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: false,
      centerMode: true,
      centerPadding: '6%',
      responsive: [
        { breakpoint: 1600, settings: { slidesToShow: 2 } },
        { breakpoint: 992, settings: { slidesToShow: 1, centerPadding: '15%' } }
      ]
    });
  }

  navToggle.addEventListener('click', openMobileMenu);
  navClose.addEventListener('click', closeMobileMenu);
  offcanvasOpen.addEventListener('click', openOffcanvas);
  offcanvasClose.addEventListener('click', closeOffcanvas);
  offcanvasOverlay.addEventListener('click', closeOffcanvas);

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileMenu();
      closeOffcanvas();
    });
  });

  document.querySelectorAll('[data-scroll-to]').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      var section = document.getElementById(el.getAttribute('data-scroll-to'));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  servicesScroll.addEventListener('click', function () {
    var section = document.getElementById('serviceTypeSection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });

  backToTop.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  yearsInBusiness.textContent = new Date().getFullYear() - 2002;
  showPage(resolvePageFromHash());
  initTabs();
  initCounters();
  initSliders();
  onScroll();
  window.addEventListener('scroll', onScroll, false);
  window.addEventListener('hashchange', function () {
    showPage(resolvePageFromHash());
    onScroll();
  });
})();
