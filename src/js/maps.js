const MAPBOX_ACCESSTOKEN =
  'pk.eyJ1IjoiYjFtMW5kIiwiYSI6ImNraHI2NTNxaTAxYXEyc21tbzFpejRrZDUifQ.uD0ZIH-cvF7srxeD4UzchA'

/*global mapboxgl*/
function setupMap(centerPos) {
  let map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESSTOKEN,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: centerPos,
    zoom: 15,
  })

  const navigationControls = new mapboxgl.NavigationControl()
  map.addControl(navigationControls)
}

function successLocation(pos) {
  setupMap([pos.coords.longitude, pos.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})
