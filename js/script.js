$(document).ready(function() {
    $('.banner__item-button').click(function(){
        $(this).next('.banner__item-list').fadeToggle();
    })

    $(document).click(function(e) {
        if (!$(e.target).closest('.banner__item-button').length) {
            $('.banner__item-list').fadeOut();
        }
    });
});