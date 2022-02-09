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
import initFilter from "./modules/filter";

document.addEventListener('DOMContentLoaded', () => {
    initGallery('.gallery_content-media');
    initFilter('.gallery_content-media', '.gallery_content-filters_filter', {
        itemSelector: '.gallery_content-media_item'
    });
})