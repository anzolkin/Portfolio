let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav-mobile__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});
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

serifFontButton.onclick = function () {
	document.body.classList.add('serif');
	serifFontButton.classList.add('active');
	sansSerifFontButton.classList.remove('active');
};

sansSerifFontButton.onclick = function () {
	document.body.classList.remove('serif');
	serifFontButton.classList.remove('active');
	sansSerifFontButton.classList.add('active');
};

let blogArticles = document.querySelectorAll('.blog-article.short');

for (let blogArticle of blogArticles) {
	let buttonMore = blogArticle.querySelector('.more');
	buttonMore.onclick = function () {
		blogArticle.classList.remove('short');
	};
};

let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');

cardViewButtonList.onclick = function () {
	cardsList.classList.add('list');
	cardViewButtonGrid.classList.remove('active');
	cardViewButtonList.classList.add('active');
}

cardViewButtonGrid.onclick = function () {
	cardsList.classList.remove('list');
	cardViewButtonGrid.classList.add('active');
	cardViewButtonList.classList.remove('active');
}

let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list li a');

//let currentImage = previews[0]
for (let currentImage of previews){
	currentImage.onclick = function (evt) {
		evt.preventDefault();
		activePhoto.src = currentImage.href;

		let tumbActive = document.querySelector('.preview-list li .active-item');
		tumbActive.classList.remove('active-item');
		currentImage.classList.add('active-item');
	};
}*/