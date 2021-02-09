mapboxgl.accessToken = mapboxToken

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-87.2169, 30.4213], // starting position [lng, lat] normally maps are lat & long except in mapbox its long & lad west is a negative coordinate
    zoom: 9 // starting zoom
  });
// map controls
  map.addControl(new mapboxgl.NavigationControl());

  /*Display pop up with loop*/
  let restaurants = [
    {
      coordinates: [-87.2146694, 30.4110612],
      name: "Tin Cow",
      address: "102 S Palafox St, Pensacola, FL 325022",

    },
    {
      coordinates: [-87.6821641, 30.3707295],
      name: "Lamberts Cafe",
      address: "2981 S McKenzie St, Foley, AL 36535",

    },
    {
      coordinates: [-87.2024655, 30.4180618],
      name: "Mcguires Irish Pub",
      address: "6701 San Jose Dr, San Antonio, TX 78214"
    }
  ]
// pop up loop
  restaurants.forEach(function (arr)
    /* array: {address: string, coordinates: number[], name: string} | {address: string, coordinates: number[], name: string} | {address: string, coordinates: number[], name: string*/ {
    let popup = new mapboxgl.Popup()
      .setHTML(`<p>${arr.name}<br>${arr.address}</p>`)
    new mapboxgl.Marker()
      .setLngLat(arr.coordinates) 

      // https://developers.google.com/maps/documentation/javascript/examples/map-latlng-literal#maps_map_latlng_literal-javascript
      .addTo(map)
      .setPopup(popup)
  })
  // https://docs.mapbox.com/mapbox-gl-js/example/set-popup/

  /*this will console log the coordinates of a destination if you dont know it*/
  function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
      .then(function (res) {
        return res.json();
        // to get all the data from the request, comment out the following three lines...
      }).then(function (data) {
        return data.features[0].center;
      });
  }


  geocode("600 E Gregory St, Pensacola, FL 32502", mapboxToken).then(function (data) {
    console.log(data);
  });

// fly over feature
  document.getElementById('buttonTin').addEventListener('click', function () {
    map.flyTo({
      center: [-87.2146694, 30.4110612],
      zoom: 20,
      essential: true,
       // this animation is considered essential with respect to prefers-reduced-motion
    });
  });

  document.getElementById('buttonMcguires').addEventListener('click', function () {
    map.flyTo({
      center: [-87.2024655, 30.4180618],
      zoom: 20,
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
  });

  document.getElementById('buttonLam').addEventListener('click', function () {
      map.flyTo({
        center: [-87.6821641, 30.3707295],
        zoom: 20,
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });
    });

