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
        if ( !$(ev.target).parents('.b-cart').length ) {
            $('.b-cart').removeClass('b-cart__active').find('.b-cart_bottom').slideUp();
        }

        if ( !$(ev.target).parents('.b-categories-dropdown__active_important').length ) {
            $('.b-categories-dropdown__active_important').removeClass('b-categories-dropdown__active_important');
        }
    });

    $('.js-change-count').click(function () {
        var target_input = $(this).parents('.b-product-price_count').find('input');
        if ($(this).data('changeCount') === 'up') {
            target_input.val(+target_input.val() + 1);
        } else if (target_input.val() > 0) {
            target_input.val(+target_input.val() - 1);
        }
    });

    $('.js-calendar').clndr({
        template: $('#clndr-template').html()
    });

    $('.b-poll-results_item_line div').width(function () {
        return $(this).siblings('span').text();
    });

    $('.b-poll_actions').click(function (ev) {
        if (ev.target.tagName === 'A' || $('.b-poll_answer input:checked').length) {
            if (ev.target.tagName === 'INPUT') {
                // here must be Ajax for polling. next code need to add to callback
            }

            $('.b-poll').toggleClass('b-poll__results-open');
            $('.b-poll-results_item_line div').width(function () {
                return $(this).siblings('span').text();
            });
        }

        return false;
    });


    (function () {
        var sett;
        $('.b-categories .nav > li')
            .hover(function (ev) {
                var $this = $(this);
                if (!$this.hasClass('b-categories-dropdown__active')) {
                    clearTimeout(sett);
                    $this.siblings('li').find('.b-categories-dropdown').removeClass('b-categories-dropdown__active');
                    $this.find('.b-categories-dropdown').addClass('b-categories-dropdown__active');
                }
            }, function (ev) {
                var $this = $(this),
                    hideEl = function () {
                        $this.find('.b-categories-dropdown').removeClass('b-categories-dropdown__active');
                    };
                sett = setTimeout(hideEl, 2000);
            }).click(function (ev) {
                var $this = $(this);
                var $this_drop = $this.children('.b-categories-dropdown');
                if ($this_drop.length && !$(ev.target).parents('.b-dropdown-list').length) {
                    $this.toggleClass('b-categories-dropdown__active_important');
                    return false;
                }
            });
    }());

    $('.js-heart-icon').click(function () {
        var $this = $(this);
        if ($this.hasClass('js-heart-icon--active')) {
            $this.removeClass('js-heart-icon--active');
        } else {
            $this.addClass('js-heart-icon--active');
        }
    });
});