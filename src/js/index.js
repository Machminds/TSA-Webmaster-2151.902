const hero = document.querySelector(".hero-title");
const bottom = document.querySelector(".bottom-section");

const MIN_SCALE = 0.15;
const SCALE_DISTANCE = window.innerHeight ;

window.addEventListener("scroll", () => {
  const rect = bottom.getBoundingClientRect();
  let scale = 1 - window.scrollY / SCALE_DISTANCE;
  scale = Math.max(MIN_SCALE, scale);
  hero.style.transform = `scale(${scale})`;
});

window.addEventListener("DOMContentLoaded", () => {
      const rect = bottom.getBoundingClientRect();
  let scale = 1 - window.scrollY / SCALE_DISTANCE;
  scale = Math.max(MIN_SCALE, scale);
  hero.style.transform = `scale(${scale})`;
});

const h1flipper = document.getElementById('changer');
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #ffffff}';
  document.body.appendChild(css);
};
