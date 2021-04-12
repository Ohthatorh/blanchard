$(function(){
	function initializeSwipers() {
        const widthWindow = document.documentElement.clientWidth;
		const gallerySwiper = new Swiper($('.swiper-container')[1], {	
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
	
			pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
			  type: 'fraction',
			},
	
			navigation: {
				nextEl: '.gallery__arrow-next',
				prevEl: '.gallery__arrow-prev',
			},
	
			breakpoints: {
				321: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 0,
				},
	
				641: {
					slidesPerView: 2,
					slidesPerColumn: 2,
					slidesPerGroup: 1,
					spaceBetween: 45,
				},
	
				1367: {
					slidesPerView: 3,
					slidesPerColumn: 2,
					slidesPerGroup: 3,
					spaceBetween: 55,
				}
			}
		});
		const projectsSwiper = new Swiper($('.swiper-container')[4], {
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
	
			pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
			  type: 'fraction',
			},
	
			navigation: {
				nextEl: '.projects__arrow-next',
				prevEl: '.projects__arrow-prev',
			},
	
			breakpoints: {
				641: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 34,
				},
	
				1100: {
					slidesPerView: 3,
					spaceBetween: 50,
				}
			}
		});
		const backgroundSwiper = new Swiper($('.swiper-container')[0], {
			autoplay: {
				delay: 10000,
			}
		});
		if (widthWindow <= 560) {
			const eventSwiper = new Swiper($('.swiper-container')[2], {
				slidesPerView: 1,
				spaceBetween: 15,

				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				}
			});
		} else {
			const publicationsSwiper = new Swiper($('.swiper-container')[3], {
				// autoplay: {
				// 	delay: 3000,
				// 	disableOnInteraction: false,
				// },
		
				pagination: {
				  el: '.swiper-pagination',
				  clickable: true,
				  type: 'fraction',
				},
		
				navigation: {
					nextEl: '.publications__arrow-next',
					prevEl: '.publications__arrow-prev',
				},
		
				breakpoints: {
					769: {
						slidesPerView: 2,
						slidesPerGroup: 1,
						spaceBetween: 34,
					},
		
					1367: {
						slidesPerView: 3,
						slidesPerGroup: 3,
						spaceBetween: 50,
					}
				}
			});
		}
	}
    window.initializeSwipers = initializeSwipers;
});