function initMap() {
  const map = new google.maps.Map(document.querySelector('#myMap'), {
    zoom: 15,
    center: directions.placeOne.coords,
    styles: mapStyles.aubergine,
  })

  getPlaces(map)
}

function getPlaces(map) {
  axios
    .get('/api/places')
    .then((response) => printPlaces(response.data, map))
    .catch((err) => console.log(err))
}

function printPlaces(places, map) {
  places.forEach((elm) => {
    let position = {
      lat: elm.location.coordinates[0],
      lng: elm.location.coordinates[1],
    }

    new google.maps.Marker({ map, position, title: elm.name })
  })
}
