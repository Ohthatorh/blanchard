$(document).ready(function() {
    $('.header__bot-item-button').click(function(){
        $(this).next('.header__bot-item-list').fadeToggle();
    })

    $(document).click(function(e) {
        if (!$(e.target).closest('.header__bot-item-button').length) {
            $('.header__bot-item-list').fadeOut();
        }
    });
});