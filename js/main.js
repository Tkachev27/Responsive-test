//mobile menu button
const navSlide = () => {
	const burger = document.querySelector('.nav__burger');
	const nav = document.querySelector('.nav__wrapper1');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		burger.classList.toggle('burger-menu__btn-active');
	});
}

navSlide();







$(function () {
    $(document).scroll(function () {
        if($(this).scrollTop() > $(".nav__wrapper").height()) {
            $(".nav__wrapper").addClass('scrolled');
        }
         if($(this).scrollTop() < $(".nav__wrapper").height()) {
            $(".nav__wrapper").removeClass('scrolled');
        }
    });
});