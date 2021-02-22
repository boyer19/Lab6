let eastToWest = [39.8199, -98.0447]         // Lat/Long coords
let zoomLevel = 5                           // 1 = Whole world.  20 = city blocks

let map = L.map('bridges-map').setView(eastToWest, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Array of objects
bridges =  [
    {"name": "Verrazano-Narrows Bridge", "span": "1298.4 meters", "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "span": "1280.2 meters", "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "span": "1158.0 meters", "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "span": "1067.0 meters", "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "span": "853.44 meters", "coordinates": [47.2690, -122.5517] }
]

bridges.forEach( function(longestBridges) {
    let markerText = `${longestBridges.name}<br>${longestBridges.span}`
    L.marker(longestBridges.coordinates).bindPopup(markerText).addTo(map)
})

