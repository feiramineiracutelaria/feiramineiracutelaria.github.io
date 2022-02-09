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

import baguetteBox from 'baguettebox.js';

function initGallery(container, options) {
    if (container !== null) {
        baguetteBox.run(container, options ? {...options} : {});
    }
}

export default initGallery;

