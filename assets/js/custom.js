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
});