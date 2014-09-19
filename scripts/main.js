require([
    "networkData",
    "maplib/MapDrawer"
], function(networkData, MapDrawer){
	var mapElement = document.getElementById('map');
	var drawer = new MapDrawer(mapElement);
});
