require([
    "networkData",
    "gaslib/Point",
    "maplib/MapDrawer",
    "JSONToGasNetwork",
], function(networkData, Point, MapDrawer, JSONToGasNetworkConverter){
	var mapElement = document.getElementById('map');
	var drawer = new MapDrawer(mapElement);

	//drawer.drawLine(new Point(52.40, 16.90), new Point(52.23, 21.06), {weight: 1, popup: 'trolo', color: 'red', speed: 1});

	network = JSONToGasNetworkConverter(networkData);
	
	network.pipes.__collection.forEach( function(pipe){
		var weight = 1;
		if(pipe.flow < 10)
			weight = 4;
		else if(pipe.flow <= 1000)
			weight = 6
		else weight = 8

		var color;
		var usage = pipe.usage();
		if(usage < 0.5)
			color = 'green';
		else if(usage <= 0.75)
			color = 'blue';
		else
			color = 'red';
		

		drawer.drawLine(pipe.start, pipe.finish, {weight: weight, popup: 'flow: '+pipe.flow+' maxFlow: ' + pipe.maxFlow + ' usage: ' + pipe.usage() + ' lenght: ' + pipe.lengthInKm(), color: color, speed: 1});
	});

	network.nodes.__collection.forEach( function(node){
		drawer.drawMarker(node.position, {caption: "caption", content: node.getName() + "(" + node.position.lat + "," + node.position.lng + ")", popup:"popup"});
	});

	drawer.initAnimations();
});
