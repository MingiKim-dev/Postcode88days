// .setView([coordinate_x, y], zoom level)
const map = L.map('map').setView([-25.2744, 133.7751], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Initialize location
map.locate({watch: true, setView: true, maxZoom: 12});

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

function onLocationFound(e) {
    L.marker(e.latlng).addTo(map);
}

function onLocationError(e) {
    alert(e.message + "\nPlease check GPS is turned on\n Or Please allow the location access!!");
}