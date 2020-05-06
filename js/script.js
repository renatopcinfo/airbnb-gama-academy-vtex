const api = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

fetch(api)
  .then(response => response.json())
  .then(data => {
    return getPhotos(data);
  })
  .catch(error => console.error(error))


function getPhotos(places) {

  let renderPhotos = [];
  for (
    var i = 0; i < places.length; i++) {
    renderPhotos += '<div class="list-cards">'
    renderPhotos += `<img src='${places[i].photo}' alt="${places[i].name}"`;
    renderPhotos += `<p class="type"> ${places[i].property_type} </p>`;
    renderPhotos += `<h2> ${places[i].name} </h2>`;
    renderPhotos += `<p><span> R$${places[i].price} </span></p>`;
    renderPhotos += '</div>'
  }
  document.querySelector('.cards').innerHTML = renderPhotos;

}

