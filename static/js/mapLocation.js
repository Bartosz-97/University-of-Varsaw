function initMap() {
  const myLocation = { lat: 52.37608592648658, lng: 16.871996869770882 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLocation,
    zoomControl: false,
  });

  const marker = new google.maps.Marker({
    position: myLocation,
    map: map,
  });

}
