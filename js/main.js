let menuBtn = document.querySelector('.burger__span');
let menu = document.querySelector('.burger__list');
let burger = document.querySelector('.burger');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	// menu.classList.toggle('active');
	burger.classList.toggle('active');
})