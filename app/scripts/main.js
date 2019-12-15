document.addEventListener("DOMContentLoaded", () => {
	// Текущая дата в подвале сайта
	const htmlCurrentDate = document.querySelector('.currentDate');
	let currentDate = new Date().getFullYear();
	htmlCurrentDate.textContent = currentDate;

	// Меню

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
	},
		sectionOneOptions);

	sectionOneObserver.observe(sectionOne);

	// Smooth Scrolling

});