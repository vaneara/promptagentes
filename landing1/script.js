(function () {
  var header = document.querySelector('.header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  var links = document.querySelectorAll('.nav__link');
  var form = document.querySelector('.contact__form');
  var feedback = document.querySelector('.form__feedback');

  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open');
      document.body.classList.toggle('nav-open', !open);
    });
  }

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      if (toggle && nav) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        document.body.classList.remove('nav-open');
      }
    });
  });

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (feedback) {
        feedback.classList.add('visible');
        feedback.textContent = 'Gracias por escribirnos. Te responderemos pronto.';
      }

      form.reset();
    });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }
})();
