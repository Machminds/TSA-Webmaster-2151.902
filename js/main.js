document.addEventListener('DOMContentLoaded', function() {
  const TRANSITION_TIME = 450;

  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');

    if (dropdownToggle) {
      dropdownToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelectorAll('.dropdown').forEach(d => {
          if (d !== dropdown) d.classList.remove('active');
        });
        dropdown.classList.toggle('active');
      });

      dropdown.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', function() {
          dropdown.classList.remove('active');
        });
      });
    }
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown').forEach(d => {
        d.classList.remove('active');
      });
    }
  });

  (function pageTransitions() {
    const body = document.getElementsByTagName('main')[0];
    body.style.display = 'none';

    const overlay = document.createElement('div');
    overlay.className = 'page-transition';

    overlay.style.transform = 'translateX(-100%) scale(0.92)';
    overlay.style.pointerEvents = 'none';
    document.body.appendChild(overlay);

    const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';
    const popTime = 180;
    const swellTime = 250;
    const swipeTime = TRANSITION_TIME;



    void overlay.offsetWidth;
    overlay.style.transition = `transform ${popTime}ms ${easing}`;
    overlay.style.transform = 'translateX(0) scale(1)';


    setTimeout(() => {
      overlay.style.transition = `transform ${swellTime}ms ${easing}`;
      overlay.style.transform = 'translateX(0) scale(1.06)';
    }, popTime + 30);


    setTimeout(() => {
      overlay.style.transition = `transform ${swipeTime}ms ${easing}`;
      overlay.style.transform = 'translateX(100%) scale(1.06)';
    }, popTime + 30 + swellTime + 30);


    setTimeout(() => {
      if (overlay && overlay.parentNode)

        overlay.parentNode.removeChild(overlay);
    }, popTime + 30 + swellTime + 30 + swipeTime);
    setTimeout(() => {
      body.style.display = 'block';

    },  swipeTime );


    document.querySelectorAll('a').forEach(a => {
      if (a.target === '_blank' || a.hasAttribute('download')) return;
      a.addEventListener('click', function(e) {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        try {
          const url = new URL(href, location.href);
          if (url.origin !== location.origin) return;
        } catch (err) {
          return;
        }
        e.preventDefault();


        // const exitOverlay = document.createElement('div');
        // exitOverlay.className = 'page-transition';
        // exitOverlay.style.transform = 'translateX(-100%) scale(0.92)';
        // exitOverlay.style.pointerEvents = 'auto';
        // document.body.appendChild(exitOverlay);

        // void exitOverlay.offsetWidth;

        // exitOverlay.style.transition = `transform ${swipeTime}ms ${easing}`;
        // exitOverlay.style.transform = 'translateX(100%) scale(1.06)';

        setTimeout(() => {
          location.href = href;
        }, swipeTime);
      });
    });
  })();


  const parallaxElements = document.querySelectorAll('.hero');

  function updateParallax() {
    parallaxElements.forEach(element => {
      const scrollPosition = window.scrollY;
      const elementOffset = element.offsetTop;
      const distance = scrollPosition - elementOffset;

      if (elementOffset < scrollPosition + window.innerHeight &&
          element.offsetTop + element.offsetHeight > scrollPosition) {
        const parallaxValue = distance * 0.5;
        element.style.backgroundPosition = `center ${parallaxValue}px`;
      }
    });
  }

  window.addEventListener('scroll', updateParallax, false);
  updateParallax();
});
