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
        this.__name = "Node";
    };

    /**
     * @type {Node}
     */
    Node.constructor = Node;

    /**
     * @method setName
     * @param {string} name - name of Node.
     */
    Node.prototype.setName = function(name) {
        this.__name = name;
    };

    /**
     * @method getName
     * @returns {string} name - name of Node.
     */
    Node.prototype.getName = function() {
        return this.__name;
    };


    return Node;
});