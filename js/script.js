const api = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
let info = [];

let currentPage = 1;

const ITEMS_PER_PAGE = 8;

fetch(api)
  .then(response => response.json())
  .then(data => {
    getPhotos(data);
    info = data
    return info
  })
  .catch(err => console.error('algo deu errado', err));



const getPhotos = (places) => {

  let renderPhotos = [];
  for (
    var i = 0; i < places.length; i++) {
    renderPhotos += '<div class="list-cards">'
    renderPhotos += `<img src='${places[i].photo.replace(/xx_large|x_large/g, "x_medium")}' alt="${places[i].name}"`;
    renderPhotos += `<p class="type"> ${places[i].property_type} </p>`;
    renderPhotos += `<h2> ${places[i].name.toLowerCase()} </h2>`;
    renderPhotos += `<p><span> R$${places[i].price},00 </span></p>`;
    renderPhotos += '</div>'
  }
  document.querySelector('.cards').innerHTML = renderPhotos;

}

function sortDataAZ() {
  info.sort(function (a, b) {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  });
  getPhotos(info)
  //console.log('Dados Ordenados', info)
}

function sortDataZA() {
  info.sort(function (a, b) {
    return a.name < b.name ? 1 : b.name < a.name ? -1 : 0;
  });
  getPhotos(info);
  //console.log('Dados Ordenados', info)
}

function sortDataType() {
  info.sort(function (a, b) {
    return a.property_type > b.property_type
      ? 1
      : b.property_type > a.property_type
        ? -1
        : 0;
  });
  getPhotos(info);
}

function sortDataPriceMin() {
  info.sort(function (a, b) {
    return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
  });
  getPhotos(info);
}

function sortDataPriceMax() {
  info.sort(function (a, b) {
    return a.price < b.price ? 1 : b.price < a.price ? -1 : 0;
  });
  getPhotos(info);
}

function handleSearch() {
  let valueInput = document.querySelector("#searchInput").value.toLowerCase();

  const filteredResults = info.filter((places) => {
    const sortDataSearchName = places.name.toLowerCase();

    if (sortDataSearchName.search(valueInput) > -1) {
      return places;
    }
  });

  getPhotos(filteredResults);
}




