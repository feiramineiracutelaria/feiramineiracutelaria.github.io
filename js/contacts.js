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

import {validateForm} from "./modules/forms";
import initMap from "./modules/map";

document.addEventListener('DOMContentLoaded', () => {
    validateForm('.contacts_main-form');
    initMap();
})