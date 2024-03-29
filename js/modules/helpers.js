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

export function preventDefault() {
    const emptyLinks = document.querySelectorAll('a[href="#"]');
    const forms = document.querySelectorAll('form');

    emptyLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
        })
    })

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
        })
    })
}

export function setContentMargin() {
    const pageContent = document.querySelector('main');
    const header = document.querySelector('header');
    const exception = document.querySelector('.hero');

    if (header) {
        if (header.dataset.page === 'home') {
            exception.style.height = `calc(100vh - ${parseFloat(window.getComputedStyle(header).height)}px)`;
            pageContent.style.marginTop = window.getComputedStyle(header).height;
        } else {
            pageContent.style.marginTop = window.getComputedStyle(header).height;
        }
    }
}

export function disableAnimationRepeat() {
    const animatedElems = document.querySelectorAll("[data-aos]");

    animatedElems.forEach(el => {
        if (!el.dataset.aosOnce) {
            el.setAttribute('data-aos-once', 'true');
        }
    })
}

export function setEdgePadding() {
    const container = document.querySelector('.container');

    let offsetLeft = parseFloat(window.getComputedStyle(container).marginLeft) + parseFloat(window.getComputedStyle(container).paddingLeft);
    let offsetRight = parseFloat(window.getComputedStyle(container).marginRight) + parseFloat(window.getComputedStyle(container).paddingRight);

    return { left: offsetLeft, right: offsetRight }
}

export function setCurrentYear() {
    const container = document.getElementById('currentYear');

    if (container) {
        container.textContent = String(new Date().getFullYear());
    }
}