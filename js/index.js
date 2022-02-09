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

import {initHeroSlider} from "./modules/slider";
import drawNotification from "./modules/notification";

let isShown = false;

document.addEventListener('DOMContentLoaded', () => {
    // Popoup
    //window.addEventListener('scroll', openPromoModal);

    initHeroSlider('.hero', '.hero_slider', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: "progressbar",
        },
        navigation: {
            nextEl: '.hero_slider-control--next',
            prevEl: '.hero_slider-control--prev',
        },
        autoplay: {
            delay: 5000
        },

    })
})

function openPromoModal() {
    if (window.pageYOffset > 1000 && !isShown) {
        drawNotification({
            title: 'Bring a friend and get a 10% discount card',
            showCloseButton: true,
            closeButtonHtml: `
                <i class="icon-close"></i>
            `,
            html: `
                    <p class="main text">Vitae nunc, dolor, blandit eget eleifend etiam id.
                        <span class="linebreak">Amet arcu lobortis sed pulvinar cursus pretium sit pretium.</span>
                    </p>
                    <a class="btn theme-element" href="#">Book now</a>
                `,
            customClass: {
                popup: 'promo_popup',
                title: 'promo_popup-title',
                htmlContainer: 'promo_popup-content',
                closeButton: 'promo_popup-close',
                container: 'promo_popup-container'
            },
        })
        isShown = true;
    }
}