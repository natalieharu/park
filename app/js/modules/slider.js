import Swiper, { Pagination, EffectFade, Autoplay, Parallax, Navigation } from 'swiper';

import '@css/swiper.css';

Swiper.use([Pagination, EffectFade, Autoplay, Parallax, Navigation]);

new Swiper('.slider-about', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 700,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

new Swiper('.slider-projects', {
    speed: 1200,
    parallax: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});