$(document).ready(function() {
    const choices = new Choices ($('.js-select')[0], {
        searchEnabled: false,
        itemSelectText: '',
    });

    const mySwiper = new Swiper($('.swiper-container')[0], {
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.arrow-next',
          prevEl: '.arrow-prev',
        }
    });

    $('.header__bot-item-button').click(function(){
        $(this).next('.header__bot-item-list').fadeToggle();
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.header__bot-item-button').length) {
            $('.header__bot-item-list').fadeOut();
        }
    });

    $('.choices__list').click(function(){
        $('.choices__item').each(function() {
            if ($(this).hasClass('is-selected')) {
                $(this).css('display', 'none');
            }
        });
    });
});