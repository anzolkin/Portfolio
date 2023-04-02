/* Slider */
let prevArrow = document.querySelector(".prev");
let nextArrow = document.querySelector(".next");

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

prevArrow.onclick = function (e) {
	e.preventDefault();
	showSlides(slideIndex += -1);
};
nextArrow.onclick = function (e) {
	e.preventDefault();
	showSlides(slideIndex += 1);
}; 
/* End slider */

/* Mobile menu */
let mobMenu = document.querySelector(".mobmenu-list");
let mobMenuBtn = document.querySelector(".mobmenu__btn");
let mobMenuBtnClose = document.querySelector(".mobmenu__btn-close");

/* Set the width of the sidebar to 250px (show it) */
mobMenuBtn.onclick = function () {
mobMenu.style.width = "100%";
mobMenu.style.maxWidth = "576px";
}

/* Set the width of the sidebar to 0 (hide it) */
mobMenuBtnClose.onclick = function (e) {
  e.preventDefault();
  mobMenu.style.width = "0";
}

/* Кнопка наверх*/
let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 600) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove("shown");
  }

};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};

let darkThemeButton = document.querySelector('.toggle-light-dark');

darkThemeButton.onclick = function () {
	document.body.classList.toggle('dark');
}