const mymap = L.map("poiMap").setView([0, 0], 1);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileUrl = "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

getData();

async function getData() {
  const response = await fetch("/poi/data");
  if (response.ok) {
    const jsonList = await response.json();
    for (const place of jsonList) {
      const marker = L.marker([place.lat, place.lon]).addTo(mymap);
      marker.bindPopup(`${place.name}`).openPopup();
    }
  } else {
    const text = await response.text();
    document.getElementById("error_message").textContent = text;
  }
}
