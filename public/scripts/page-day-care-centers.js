// Create map
const map = L.map('mapid').setView([-12.7055438,-38.2989238], 15);

// create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    
// create icon and
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popup overlay

const popup = L.popup({
    closebutton:false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
})
.setContent('Carmem Mirim <a href="day-care-center.html?id=1" class="choose-day-care-center "> <img src="./public/images/arrow-white.svg" > </a>')



// create and add marker
L
.marker([-12.7055438,-38.2989238], {icon}) 
.addTo(map)
.bindPopup(popup)
