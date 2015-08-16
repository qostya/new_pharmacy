/**
 * Created by Constantine on 15.08.2015.
 */
$(function () {

    var slideUpAndDownByClick = function (elSub, elObj) {
        var $elSub = $('.' + elSub),
            $elObj = $('.' + elObj);

        $elSub.click(function () {
            if (!$elSub.hasClass(elSub + '__active')) {
                $elObj.slideDown('fast');
            } else {
                $elObj.slideUp('fast');
            }
            $elSub.toggleClass(elSub + '__active');
            return false;
        });

    };

    slideUpAndDownByClick('js-show-reviews', 'js-reviews');
    slideUpAndDownByClick('js-show-reviews-form', 'js-reviews-form');


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
            $('.b-cart').removeClass('b-cart__active').find('.b-cart_bottom').slideUp('fast');
        }

        if ( !$(ev.target).parents('.b-categories-dropdown__active_important').length ) {
            $('.b-categories-dropdown__active_important').removeClass('b-categories-dropdown__active_important');
        }
    });

    $('.js-change-count').click(function () {
        var target_input = $(this).parents('.js-change-count_parent').find('input');
        if ($(this).data('changeCount') === 'up') {
            target_input.val(+target_input.val() + 1);
        } else if (target_input.val() > 0) {
            target_input.val(+target_input.val() - 1);
        }
    });

    $('.js-calendar').clndr({
        template: $('#clndr-template').html(),
        events: [
            {
                date: '2015-08-18',
                title: 'В продажу поступило новое эффективное средство от простуды - “Hamsherlife”'
            },
            {
                date: '2015-08-28',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi corporis, dolorem eum facere in itaque.'
            },
            {
                date: '2015-08-05',
                title: 'Aspernatur commodi corporis, dolorem eum facere in itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            }
        ]

    });

    $('.b-calendar_days').on('click', function (ev) {
        var $this_target = $(ev.target),
            sett, sett2;
        if ($this_target.hasClass('event')) {
            sett = setTimeout(function () {
                $('.b-calendar_event').slideDown('fast');
                $('.b-calendar_event_icon').removeClass('b-calendar_event_icon__active');
                sett2 = setTimeout(function () {
                    clearTimeout(sett2);
                    clearTimeout(sett);

                    $('.b-calendar_event_text').html($this_target.data('title'));
                }, 300);

            }, 400);

            $('.b-calendar_event_icon').addClass('b-calendar_event_icon__active');

            $this_target.siblings('.js-event_is-active').removeClass('js-event_is-active');
            $this_target.addClass('js-event_is-active');
        }
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
        $('.b-nav_top_has-dropdown').hover(function (ev) {
            clearTimeout(sett);
            $(this).find('.b-nav_top_dropdown').slideDown('fast');
        }, function () {
            var $this = $(this);
            sett = setTimeout(function () {
                $this.find('.b-nav_top_dropdown').slideUp('fast');
            }, 2000);
        });
    }());

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
                if ($this_drop.length && !$(ev.target).parents('.b-categories-dropdown').length) {
                    $this.toggleClass('b-categories-dropdown__active_important');
                    return false;
                }
            });
    }());
    (function () {
        var sett;
        $('.js-add-to-favorites').click(function () {
            var $this = $(this),
                $popup_block = $('.js-in-cart-popup'),
                $product_title = $this.parents('.js-product-in-cart').find('.js-product-title').text();
            $this.toggleClass('js-add-to-favorites--active');

            clearTimeout(sett);

            $popup_block.fadeIn();

            if ($this.hasClass('js-add-to-favorites--active')) {
                $popup_block.html('Товар <span class="text-green">«' + $product_title + '»</span> <u>добавлен</u> в избранное.');
            } else {
                $popup_block.html('Товар <span class="text-green">«' + $product_title + '»</span> <u>удалён</u> из избранного.');
            }

            sett = setTimeout(function () {
                $popup_block.fadeOut();
            }, 2000);
        });
    }());
});