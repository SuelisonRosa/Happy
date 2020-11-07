// Create map
const map = L.map("mapid").setView([-12.7055438, -38.2989238], 15);

// create and add tileLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon and
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({ id, name, lat, lng }) {
  // create popup overlay

  const popup = L.popup({
    closebutton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a  href="/day-care-center?id=${id}"><img src="/images/arrow-white.svg"></a>`
  );

  // create and add marker
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const dayCareCentersSpan = document.querySelectorAll(".dayCareCenters span");

dayCareCentersSpan.forEach((span) => {
  const dayCareCenter = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };

  addMarker(dayCareCenter);
});
