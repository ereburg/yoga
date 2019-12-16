document.addEventListener("DOMContentLoaded", () => {
	// Текущая дата в подвале сайта
	const htmlCurrentDate = document.querySelector('.currentDate');
	let currentDate = new Date().getFullYear();
	htmlCurrentDate.textContent = currentDate;

	// Smooth Scrolling и scrollspy
	const menu = document.querySelector('.menu');
	const scrollspy = new VanillaScrollspy(menu);

	scrollspy.init();

	// Фон для шапки
	const header = document.querySelector('.header');
	const sectionOne = document.querySelector(".hero");

	const sectionOneOptions = {
		rootMargin: "-100px 0px 0px 0px"
	};
	const sectionOneObserver = new IntersectionObserver(function (
		entries,
		sectionOneObserver
	) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				header.classList.add("scroll");
			} else {
				header.classList.remove("scroll");
			}
		});
	}, sectionOneOptions);
	sectionOneObserver.observe(sectionOne);

	// Меню
	const buttonMenu = document.querySelector('.button-menu');
	const buttonMenuToggler = () => {
		buttonMenu.classList.toggle('active');
	};
	const menuToggler = () => {
		menu.classList.toggle('active');
	};
	const menuBackground = document.querySelector('.menu-background');
	const menuBackgroundToggler = () => {
		menuBackground.classList.toggle('active');
	};

	buttonMenu.addEventListener('click', e => {
		e.preventDefault();

		buttonMenuToggler();
		menuToggler();
		menuBackgroundToggler();
	});


	// при клике на пустую область
	document.addEventListener('click', e => {
		let target = e.target;
		let its_menu = target == menu || menu.contains(target);
		let its_buttonClose = target == buttonMenu.classList.contains('active');
		let its_buttonMenu = target == buttonMenu;
		let menu_is_active = menu.classList.contains('active');

		if (!its_menu && !its_buttonMenu && !its_buttonClose && menu_is_active) {
			buttonMenuToggler();
			menuToggler();
			menuBackgroundToggler();
		}
	});

	// Прячем меню, если кликнули по ссылке
	const menuLinks = document.querySelectorAll('.menu__link');

	menuLinks.forEach((trigger) => {
		trigger.addEventListener('click', function () {
			buttonMenuToggler();
			menuToggler();
			menuBackgroundToggler();
		});
	});


	// Вкладки
	const tabProducts = document.querySelectorAll('.tabbutton--products');

	tabProducts.forEach((trigger) => {
		trigger.addEventListener('click', function () {

			let id = this.getAttribute('data-tab'),
				content = document.querySelector('.tabcontent--products[data-tab="' + id + '"]'),
				activeTrigger = document.querySelector('.tabbutton--products.active'),
				activeContent = document.querySelector('.tabcontent--products.active');

			activeTrigger.classList.remove('active');
			trigger.classList.add('active');

			activeContent.classList.remove('active');
			content.classList.add('active');
		});
	});

	const tabMembers = document.querySelectorAll('.tabbutton--members');

	tabMembers.forEach((trigger) => {
		trigger.addEventListener('click', function () {

			let id = this.getAttribute('data-tab'),
				content = document.querySelector('.tabcontent--members[data-tab="' + id + '"]'),
				activeTrigger = document.querySelector('.tabbutton--members.active'),
				activeContent = document.querySelector('.tabcontent--members.active');

			activeTrigger.classList.remove('active');
			trigger.classList.add('active');

			activeContent.classList.remove('active');
			content.classList.add('active');
		});
	});

});