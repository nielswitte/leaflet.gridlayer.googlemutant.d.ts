let map = L.map('foo');

let roads = L.gridLayer.googleMutant({
    type: 'roadmap'
}).addTo(map);

let trafficGoogleMapsLayer = L.gridLayer.googleMutant({
	maxZoom: 24,
	type: 'roadmap'
}).addTo(map);

trafficGoogleMapsLayer.addGoogleLayer('TrafficLayer');
trafficGoogleMapsLayer.removeGoogleLayer('TrafficLayer');

let styled = L.gridLayer.googleMutant({
    type: 'satellite',
    styles: [
        { elementType: 'labels', stylers: [ { visibility: 'off' } ] },
        { featureType: 'water' , stylers: [ { color: '#444444'  } ] }
    ]
}).addTo(map);
