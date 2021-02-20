$(function() {
	const choices = new Choices($('.js-select')[0], {
		searchEnabled: false,
		itemSelectText: '',
	});

	$('.choices__list').click(function() {
		$('.choices__item').each(function() {
			if ($(this).hasClass('is-selected')) {
				$(this).css('display', 'none');
			}
		});
	});

	const swiperSettings = {
		direction: 'horizontal',
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.arrow-next',
			prevEl: '.arrow-prev',
		}
	};

	const gallerySwiper = new Swiper($('.swiper-container')[0], swiperSettings);
	const publicationsSwiper = new Swiper($('.swiper-container')[1], swiperSettings);
	const projectsSwiper = new Swiper($('.swiper-container')[2], swiperSettings);

	$('.header__bot-item-button').click(function() {
		$(this).next('.header__bot-item-list').fadeToggle();
	});

	$(document).mouseup(function(e) {
		if (!$(e.target).closest('.header__bot-item-list').length) {
			$('.header__bot-item-list').fadeOut();
		}
	});

	const accordionSettings = {
		active: true,
		collapsible: true,
		heightStyle: 'content'
	};

	$('#accordion-rus').accordion(accordionSettings);
	$('#accordion-fr').accordion(accordionSettings);
	$('#accordion-ger').accordion(accordionSettings);
	$('#accordion-italy').accordion(accordionSettings);
	$('#accordion-rom').accordion(accordionSettings);

	$('.accordion__header').click(function() {
		$('.accordion__header').hasClass('ui-accordion-header-active') ? $('.catalog__tabs').addClass('catalog__tabs-active') : $('.catalog__tabs').removeClass('catalog__tabs-active');
		$(this).children('.catalog__accordion-text').children().toggleClass('button-is-active');
	});

	$('.tab-btn').click(function() {
		const path = $(this).data().path;
		$('.catalog__left-column-tab').each(function() {
			$(this).removeClass('catalog__left-column-tab-active');
		});
		$('[data-target="' + path + '"]').addClass('catalog__left-column-tab-active');
	});

	$('.tab-btn-flag').click(function() {
		const path = $(this).data().path;
		$('.catalog__columns').each(function() {
			$(this).removeClass('catalog__columns-active');
		});
		$('[data-target="' + path + '"]').addClass('catalog__columns-active');
	});

	$('.events__button').click(function() {
		$('.events__list').toggleClass('events__list-active');
		$('.invisible').toggleClass('visible');
	});

	$('.catalog__header-button').click(function() {
		$('.catalog__header-button').removeClass('catalog__header-button-active');
		$(this).addClass('catalog__header-button-active');
	});

	$('a.scroll-to').click(function(e) {
		e.preventDefault();
		const anchor = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top
		}, 800);
	});
});