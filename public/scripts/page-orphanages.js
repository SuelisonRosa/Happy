// Create map
const map = L.map('mapid').setView([-12.7055438,-38.2989238], 15);

// create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    

L
.marker([-12.7055438,-38.2989238])
.addTo(map)
.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
.openPopup();