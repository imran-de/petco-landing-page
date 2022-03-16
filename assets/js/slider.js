var slideIndex = 0;
petcoShowSlides();

function petcoShowSlides() {
  var i;
  var slides = document.getElementsByClassName("petco_slides");
  var dots = document.getElementsByClassName("petco-slider-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slider-dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-slider-dot";
  setTimeout(petcoShowSlides, 3000); // Change image every 2 seconds
}