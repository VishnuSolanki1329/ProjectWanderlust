<<<<<<< HEAD
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: "mapbox://styles/mapbox/streets-v12",
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(listing.geometry.coordinates) 
    .setPopup(
     new mapboxgl.Popup({offset: 25}).setHTML(
        `<h4>${listing.location}</h4> <P>Exact Location will be provided after booking</p>`
    )
)
=======
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: "mapbox://styles/mapbox/streets-v12",
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(listing.geometry.coordinates) 
    .setPopup(
     new mapboxgl.Popup({offset: 25}).setHTML(
        `<h4>${listing.location}</h4> <P>Exact Location will be provided after booking</p>`
    )
)
>>>>>>> 59f73547b03df34273dfaa7c6d4455c0c0482eb2
    .addTo(map);