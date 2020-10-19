// Create map
const map = L.map('mapid').setView([-12.7055438,-38.2989238], 15);

// create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    
// create icon and
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})


let marker;

// create and add marker
map.on('click', function(event) {
   const lat = event.latlng.lat;
   const lng = event.latlng.lng;

   document.querySelector('[name=lat]').value = lat;
   document.querySelector('[name=lat]').value = lng;

   // remove icon
   marker && map.removeLayer(marker)

   // add icon layer
   marker = L.marker([lat, lng], {icon})
   .addTo(map)
})

// adicionar o campo de fotos

function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // duplicar a última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) 
    // Verificação se o campo está vázio não adicionar ao container 

    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    // Limpar o campo
    input.value = ""
    // adicionar a cópia ao container #images 
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    if(fieldsContainer.length < 2){
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();

}

// selecionar do sim e não

function toggleSelect(event){
    // retirar a calss .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })
    //colocar a class.active no botão clicado
    const button = event.currentTarget
     button.classlist.add('active')

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}
