'use strict';

svg4everybody();

$(function () {
    $('.js-search').on('click', function () {
       $('.menu__search-field').toggleClass('show');
    });
    $('.burger').on('click', function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('show');
    });
    $('.js-slide-control').slick({
        prevArrow: $('.js-prev-control'),
        nextArrow: $('.js-next-control'),
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.js-slick-technologies').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.js-prev-video'),
        nextArrow: $('.js-next-video'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.js-slide-objects').slick({
        prevArrow: $('.js-prev-objects'),
        nextArrow: $('.js-next-objects'),
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.js-review-slider').slick({
        prevArrow: $('.js-prev-review'),
        nextArrow: $('.js-next-review'),
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});