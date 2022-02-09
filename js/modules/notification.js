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

import Swal from 'sweetalert2/dist/sweetalert2.js'

function drawNotification(settings, alertText) {
    Swal.fire({
        showClass: {
            popup: 'fadeIn'
        },
        hideClass: {
            popup: 'fadeOut'
        },
        showConfirmButton: false,
        showCloseButton: true,
        closeButtonHtml: `
                <i class="icon-close"></i>
            `,
        html: `
            <p class="main">${alertText ? alertText : ''}</p>`,
        ...settings
    })
}

export default drawNotification;

