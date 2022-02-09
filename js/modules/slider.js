/**
 * Cutelaria
 * benta.digital
 * 2022
 *
 * @encoding        UTF-8
 * 
 * 
 * 
 * 
 * 
 **/
'use strict';

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

export function initHeroSlider(parentEl, container, options) {
    const swiper = new Swiper(container, {...options});
    const parent = document.querySelector(parentEl);
    const swiperSlides = document.querySelectorAll(`${container} .swiper-slide`);
    swiper.on('activeIndexChange', function () {
        setHeroBg();
    });

    function setHeroBg() {
        const path = swiperSlides[swiper.activeIndex].dataset.bg;
        parent.style.backgroundImage = `url("${path}")`;
    }
    setHeroBg();
}

// basic swiper initialization
export function initSwiperSlider(container, options) {
    const swiper = new Swiper(container, {...options});
}
