require([
    "networkData",
    "gaslib/Point",
    "maplib/MapDrawer"
], function(networkData, Point, MapDrawer){
	var mapElement = document.getElementById('map');
	var drawer = new MapDrawer(mapElement);

	drawer.drawLine(new Point(52.40, 16.90), new Point(52.23, 21.06), {weight: 1, popup: 'trolo', color: 'red', speed: 1});
});
