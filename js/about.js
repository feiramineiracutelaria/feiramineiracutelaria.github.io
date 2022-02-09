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

import initGallery from "./modules/gallery";
import { initSwiperSlider } from "./modules/slider";

document.addEventListener('DOMContentLoaded', () => {
    initGallery('.gallery_list');

    initSwiperSlider('.reviews_slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 70
            },
        },
        navigation: {
            nextEl: '.reviews_controls-control--next',
            prevEl: '.reviews_controls-control--prev',
        },
        autoplay: {
            delay: 3000
        },
        speed: 2000,
    })
})