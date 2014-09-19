define([
	"gaslib/GasNetwork",
	"gaslib/Pipe",
	"gaslib/Node",
	"gaslib/Angle",
	"gaslib/Point",
], function(GasNetwork, Pipe, Node, Angle, Point){
    "use strict";

    var getPoint = function(data){
	if(data.unit === "deg")
		return new Point(data.lat, data.lng);
	else
		return new Point(Angle.radianToDegree(data.lat), Angle.radianToDegree(data.lng));
    }

    var JSONToGasNetwork = function(data){
	var network = new GasNetwork();
	for(var i = 0 ; i< data.pipes.length ; i++){
		var dataPipe = data.pipes[i];
		var pipe = new Pipe();
		pipe.start = getPoint(dataPipe.start);
		pipe.finish = getPoint(dataPipe.end);

		pipe.flow = dataPipe.flow;		
		pipe.maxFlow = dataPipe.maxFlow;		
		network.addPipe(pipe);
	}

	for(var i = 0 ; i< data.nodes.length ; i++){
		var dataNode = data.nodes[i];
		var node = new Node();
		node.position = getPoint(dataNode);
		node.setName(dataNode.caption);

		network.addNode(node);
	}

	return network;
    };


    return JSONToGasNetwork;
});
