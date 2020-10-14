const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomcontrol: false
}

// Create map
const map = L.map('mapid', options).setView([-12.7055438,-38.2989238], 15);

// create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    
// create icon and
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


.setContent('Lar das meninas <a href="day-care-center.html?id=1" class="choose-day-care-center "> <img src="./public/images/arrow-white.svg" > </a>')



// create and add marker
L
.marker([-12.7055438,-38.2989238], {icon}) 
.addTo(map)

/*Image galery*/

function selectImage(event) {
    
}