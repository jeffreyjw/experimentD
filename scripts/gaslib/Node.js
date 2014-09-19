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
        this.__caption = "Node";
    };

    /**
     * @type {Node}
     */
    Node.constructor = Node;

    /**
     * @method Setter for caption.
     * @param name
     */
    Node.prototype.setCaption = function(name) {
        this.__caption = name;
    };

    /**
     * @method Getter for caption.
     * @returns {string} caption
     */
    Node.prototype.getCaption = function() {
        return this.__caption;
    };


    return Node;
});