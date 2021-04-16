$(function() {
	let disableScroll = (e) => {
		let paddingOffset = $(window).outerWidth() - $('body').outerWidth() + 'px';
		let pagePosition = $(window).scrollTop();
		$('body').css({'padding-right': paddingOffset, 'top': -pagePosition+'px'});
		$('.fixed').css('padding-right', paddingOffset);
		$('body').addClass('disable-scroll');
		$('body').attr('data-position', pagePosition);
	}

	let enableScroll = (e) => {
		let paddingOffset = '0px';
		let pagePosition = parseInt($('body').attr('data-position'));
		$('body').css({'padding-right': paddingOffset, 'top': 'auto'});
		$('.fixed').css('padding-right', paddingOffset);
		$('body').removeClass('disable-scroll');
		window.scroll({top: pagePosition, left: 0});
		$('body').removeAttr('data-position');
	}

	const widthWindow = document.documentElement.clientWidth;
	checkWidth();
	initializeSwipers();

	const choices = new Choices($('.js-select')[0], {
		searchEnabled: false,
		itemSelectText: '',
	});

	$(window).resize(function() {
		checkWidth();
		initializeSwipers();
	});

	$('.hamburger--spring').click(function() {
		$(this).toggleClass('is-active');
		$('.header__menu').toggleClass('header__menu-active');
		($('.header__menu').hasClass('header__menu-active')) ? $('.header__menu').css('visibility', 'visible') : $('.header__menu').css('visibility', 'hidden');
		($('.hamburger--spring').hasClass('is-active')) ? disableScroll() : enableScroll();
	});

	$('.choices__list').click(function() {
		$('.choices__item').each(function() {
			if ($(this).hasClass('is-selected')) {
				$(this).css('display', 'none');
			}
		});
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
		$('.catalog__accordion-button').each(function(){
			$(this).removeClass('button-is-active');
		});

		if ($(this).hasClass('ui-accordion-header-active')) {
			$(this).children('.catalog__accordion-text').children().addClass('button-is-active');
		}
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
		$('.events__item:nth-child(n+3)').fadeIn('slow');
		$(this).fadeOut();
	});

	$('a.scroll-to').click(function(e) {
		e.preventDefault();
		const anchor = $(this).attr('href');
		$('.hamburger--spring').removeClass('is-active');
		$('.header__menu').removeClass('header__menu-active');
		($('.hamburger--spring').is(':visible')) ? $('.header__menu').css('visibility', 'hidden')  : [];
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top
		}, 800);
		enableScroll();
	});

	$('.publications__item').each(function(){
		if ($(this).hasClass('visually-hidden') && widthWindow < 560) {
			$(this).css('display', 'none');
		} else {
			$(this).css('display', 'block');
		}
	});

	$('.gallery__item').click(function(){
		$('.form-modal-overlay').fadeIn();
		$('.form-modal__window').fadeIn();
		disableScroll();
	});

	$('.modal-close').click(function(){
		$('.form-modal-overlay').fadeOut();
		$('.form-modal__window').fadeOut();
		enableScroll();
	});

	$('.form-modal-overlay').click(function(){
		$('.modal-close').click();
	});

	$('.publications__left-column-text').click(function(){
		$(this).toggleClass('publications--active');
		$('.checkbox-container__label').each(function(){
			if (!$(this).is(':visible')) {
				$(this).fadeIn();
				$('.checkbox-button').addClass('visually-hidden');
			} else if ($(this).is(':visible') && $(this).children().is(':checked')) {
				$(this).fadeIn();
				$(this).children().each(function(index){
					(index === 2) ? $(this).removeClass('visually-hidden') : [];
				});
			} else {
				$(this).fadeOut();
			}
		});
	});

	$('.checkbox-button').click(function(){
		$(this).parent().fadeOut();
		$(this).addClass('visually-hidden');
		$(this).siblings().each(function(index){
			(index === 0) ? $(this).prop('checked', false) : [];
		});
	});

	$('.checkbox-container__label').click(function() {
		(!$('.publications__left-column-text').hasClass('publications--active')) ? $(this).children()[2].click() : [];
	});

	function checkWidth() {
		if (widthWindow > 1024) {
			$('.hamburger--spring').removeClass('is-active');
			$('.header__menu').removeClass('header__menu-active');
			// enableScroll();
		}
	};
});