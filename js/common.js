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

import AOS from 'aos';
import svg4everybody from "svg4everybody";
import LazyLoad from "vanilla-lazyload";
import customSelect from "custom-select/src";

import drawNav from "./modules/nav";
import { preventDefault, setContentMargin, disableAnimationRepeat, setCurrentYear } from "./modules/helpers";
import {applyDatepicker, validateForm} from "./modules/forms";

const pageHeader = document.querySelector('.header');


document.addEventListener('DOMContentLoaded', () => {
    setContentMargin();

    if (pageHeader !== null) {
        drawNav();
    }

    preventDefault();
    svg4everybody();
    const lazyload = new LazyLoad();

    AOS.init({
        offset: 60, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
    });
    disableAnimationRepeat();

    window.addEventListener('resize', setContentMargin);

    applyDatepicker();
    customSelect('select');
    validateForm('.footer_newsletter-form');
    validateForm('.post_main-reply_form');
    validateForm('.contacts_main-form');
    setCurrentYear();
})