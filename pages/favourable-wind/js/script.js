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
let darkAnchor = document.querySelector('.hero__wrapper .end-decor img');

darkThemeButton.onclick = function () {
	if (document.body.classList.contains('dark')) {
		document.body.classList.remove('dark');
		darkAnchor.src = 'img/anchor.svg';
	} else {
		document.body.classList.add('dark');
		darkAnchor.src = "img/anchor-dark.svg"
	}
	/*document.body.classList.toggle('dark');
	darkAnchor.src = "img/anchor-dark.svg";*/
}