let darkThemeButton = document.querySelector('.toggle-light-dark');

darkThemeButton.onclick = function () {
	document.body.classList.toggle('dark');
}