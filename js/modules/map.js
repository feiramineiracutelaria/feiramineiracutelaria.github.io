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

const _KEY = 'PasteYourGoogleMapsApiKeyHere';

import {Loader} from "@googlemaps/js-api-loader";
import mapTheme from "./map-theme";

function initMap() {
    const loader = new Loader({
        apiKey: _KEY,
        version: "weekly",

    });
    const mapContainer = document.querySelector('#map');

    loader.load().then(() => {
        const map = new google.maps.Map(mapContainer, {
            center: {lat: 40.74956081164776, lng: -73.98700531672688},
            zoom: 8,
            styles: [...mapTheme],
            disableDefaultUI: true,
        });
    });
}

export default initMap;