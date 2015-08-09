$(function () {
    $('.index-slider').bxSlider({
        pager: false,
        nextText: '',
        prevText: ''
    });


    $('.b-cart').mouseenter(function () {
        $(this).addClass('b-cart__active').find('.b-cart_bottom').slideDown('fast');
    });

    $('body').on('click', function (ev) {
        if (!$(ev.target).parents('.b-cart').length) {
            $('.b-cart').removeClass('b-cart__active').find('.b-cart_bottom').slideUp();
        }
    });

    (function () {
        var sett;
        $('.b-categories .nav > li')
            .hover(function (ev) {
                if (!$(this).hasClass('b-categories-dropdown__acive')) {
                    $(this).find('.b-categories-dropdown').addClass('b-categories-dropdown__acive');
                    clearTimeout(sett);
                }
            }, function (ev) {
                var $this = $(this),
                    hideEl = function () {
                        $this.find('.b-categories-dropdown').removeClass('b-categories-dropdown__acive');
                        clearTimeout(sett);
                    };
                sett = setTimeout(hideEl, 1000);
            });
    }());
});