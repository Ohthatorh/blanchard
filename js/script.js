$(function() {
	const choices = new Choices($('.js-select')[0], {
		searchEnabled: false,
		itemSelectText: '',
	});

	$(window).resize(function() {
		if(document.documentElement.clientWidth > 1024) {
			$('.hamburger--spring').removeClass('is-active');
		}
	});

	$('.hamburger--spring').click(function() {
		$(this).toggleClass('is-active');
	});

	$('.choices__list').click(function() {
		$('.choices__item').each(function() {
			if ($(this).hasClass('is-selected')) {
				$(this).css('display', 'none');
			}
		});
	});

	const gallerySwiper = new Swiper($('.swiper-container')[0], {
		slidesPerView: 3,
		slidesPerColumn: 2,
		slidesPerGroup: 3,
		
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },

		navigation: {
			nextEl: '.arrow-next',
			prevEl: '.arrow-prev',
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			type: 'fraction',
		},
	});
	
	const publicationsSwiper = new Swiper($('.swiper-container')[1], {
		slidesPerView: 3,
		slidesPerGroup: 3,

		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },

		navigation: {
			nextEl: '.arrow-next',
			prevEl: '.arrow-prev',
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			type: 'fraction',
		},
	});
	const projectsSwiper = new Swiper($('.swiper-container')[2], {
		slidesPerView: 3,
		slidesPerGroup: 3,

		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },

		navigation: {
			nextEl: '.arrow-next',
			prevEl: '.arrow-prev',
		}
	});

	$('.header__bot-item-button').click(function() {
		$(this).next('.header__bot-item-list').fadeToggle();
	});

	$(document).mouseup(function(e) {
		if (!$(e.target).closest('.header__bot-item-list').length) {
			$('.header__bot-item-list').fadeOut();
		}
	});

	const accordionSettings = {
		active: 0,
		heightStyle: 'content'
	};

	$('#accordion-rus').accordion(accordionSettings);
	$('#accordion-fr').accordion(accordionSettings);
	$('#accordion-ger').accordion(accordionSettings);
	$('#accordion-italy').accordion(accordionSettings);
	$('#accordion-rom').accordion(accordionSettings);

	$('.accordion__header').click(function() {
		$(this).hasClass('ui-accordion-header-active') ? $(this).children('.catalog__accordion-text').children().addClass('button-is-active') : $(this).children('.catalog__accordion-text').children().removeClass('button-is-active');
	});

	$('.catalog__accordion-list-item-button').click(function() {
		$('.catalog__accordion-list-item-button').removeClass('catalog__accordion-list-item-button-active');
		$(this).addClass('catalog__accordion-list-item-button-active');
		const path = $(this).data().path;
		$('.catalog__left-column-tab').each(function() {
			$(this).removeClass('catalog__left-column-tab-active');
		});
		$('[data-target="' + path + '"]').addClass('catalog__left-column-tab-active');
	});

	$('.catalog__header-button').click(function() {
		const path = $(this).data().path;
		$('.catalog__accordion').each(function() {
			$(this).removeClass('catalog__accordion-active');
		});
		$('[data-target="' + path + '"]').addClass('catalog__accordion-active');
		$('.catalog__header-button').removeClass('catalog__header-button-active');
		$(this).addClass('catalog__header-button-active');
	});

	$('.events__button').click(function(){
		$('.events__item:nth-child(n+4)').fadeToggle('slow');
		$(this).fadeOut();
	});

	$('a.scroll-to').click(function(e) {
		e.preventDefault();
		const anchor = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top
		}, 800);
	});
});