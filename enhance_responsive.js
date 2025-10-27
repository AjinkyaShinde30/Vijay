// basic slider and simple enhancements
document.addEventListener('DOMContentLoaded', function(){
  // slider
  var slides = document.querySelectorAll('.hero-slider .slide');
  var idx = 0;
  if(slides.length > 0){
    setInterval(function(){
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 3500);
  }

  // add fade-in class to header and hero
  var h = document.querySelector('.site-header');
  if(h) { h.style.opacity = 0; h.style.transition = 'opacity 600ms ease'; setTimeout(function(){ h.style.opacity=1; }, 150); }
});
