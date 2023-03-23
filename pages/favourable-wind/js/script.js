/* Slider */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("main-slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
} 
/* End slider */

/* Mobile menu */
let mobMenu = document.querySelector(".mobmenu-list");
let mobMenuBtn = document.querySelector(".mobmenu__btn");
let mobMenuBtnClose = document.querySelector(".mobmenu__btn-close");

/* Set the width of the sidebar to 250px (show it) */
mobMenuBtn.onclick = function () {
mobMenu.style.width = "300px";
}

/* Set the width of the sidebar to 0 (hide it) */
mobMenuBtnClose.onclick = function () {
  mobMenu.style.width = "0";
}

/*let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let serifFontButton = document.querySelector('.font-button-serif');

darkThemeButton.onclick = function () {
	document.body.classList.add('dark');
	darkThemeButton.classList.add('active');
	lightThemeButton.classList.remove('active');
}

lightThemeButton.onclick = function () {
	document.body.classList.remove('dark');
	darkThemeButton.classList.remove('active');
	lightThemeButton.classList.add('active');
}
}*/