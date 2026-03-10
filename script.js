const map = L.map('map').setView([-25.2744, 133.7751], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([-25.2744, 133.7751]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();