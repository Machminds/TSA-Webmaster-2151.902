document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');

  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    document.querySelectorAll('.dropdown-menu a').forEach(link => {
      link.addEventListener('click', function() {
        dropdown.classList.remove('active');
      });
    });

    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  }

  // Parallax effect for hero sections
  const parallaxElements = document.querySelectorAll('.hero');
  
  function updateParallax() {
    parallaxElements.forEach(element => {
      const scrollPosition = window.scrollY;
      const elementOffset = element.offsetTop;
      const distance = scrollPosition - elementOffset;
      
      // Only apply parallax if element is in viewport
      if (elementOffset < scrollPosition + window.innerHeight && element.offsetTop + element.offsetHeight > scrollPosition) {
        const parallaxValue = distance * 0.5;
        element.style.backgroundPosition = `center ${parallaxValue}px`;
      }
    });
  }

  window.addEventListener('scroll', updateParallax, false);
  updateParallax();
});
