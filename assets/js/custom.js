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
    $('.js-more-adres').on('click', function () {
       $(this).parents('.contacts__block-contact').toggleClass('show');
        $(this).text(function (i, text) {
            return text === "Показать больше" ? "Скрыть" : "Показать больше";
        });
    });
});

function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 55.732478, lng: 37.582210},
        scrollwheel: false,
        zoom: 17
    });
    var marker = new google.maps.Marker({
        position: {lat: 55.732478, lng: 37.582210},
        map: map
    });
}
initMap();

$(window).on('resize load', function () {
    var heightCat = $('.work__item').outerHeight() / 2;
    heightCat = -heightCat;
    $('.work').css('margin-top',  heightCat );
});
