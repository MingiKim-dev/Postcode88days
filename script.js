// .setView([coordinate_x, y], zoom level)
const map = L.map('map', { zoomControl: false }).setView([-25.2744, 133.7751], 4);
L.control.zoom({ position: 'bottomright' }).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Initialize location
map.locate({watch: false, setView: true, maxZoom: 12});
// Check "Watch:true" attribute works on mobile or not.
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

function onLocationFound(e) {
    L.marker(e.latlng).addTo(map);
    L.circleMarker(e.latlng, {
        radius: 10,
        fillColor: "#e00000",
        color: "#ff0000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(map);

}

function onLocationError(e) {
    alert(e.message + "\nPlease check GPS is turned on\n Or Please allow the location access!!");
}