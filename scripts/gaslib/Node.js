define([
    "gaslib/Point"
], function(Point){


    /**
     * Class representing a node in the network
     *
     * @class Node
     * @constructor
     */
    var Node = function(){
        this.position = new Point();
        this.caption = "Node";
    };


    Node.constructor = Node;


    return Node;
});