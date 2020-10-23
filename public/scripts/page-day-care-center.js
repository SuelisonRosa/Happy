const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomcontrol: false,
};

// Create map
const map = L.map("mapid", options).setView([-12.7055438, -38.2989238], 15);

// create and add tileLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon and
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker
L.marker([-12.7055438, -38.2989238], { icon }).addTo(map)

/*Image galery*/

function selectImage(event) {
  const button = event.currentTarget

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
    button.classList.remove("active")
  }
  // selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".day-care-center-details > img")

  // atualizar o container de image
  imageContainer.src = image.src
  //adicionar a classe .active
  button.classList.add("active")
}
