define([
    "gaslib/Collection"
], function(Collection){

    /**
     * Class contains collection of pipes and nodes.
     *
     * @class GasNetwork
     * @constructor
     */
    var GasNetwork = function(){
        this.pipes = new Collection();
        this.nodes = new Collection();
    };

    /**
     * @type {GasNetwork}
     */
    GasNetwork.constructor = GasNetwork;

    /**
     * @method addPipe
     * @param {Pipe} pipe
     */
    GasNetwork.prototype.addPipe = function(pipe){
        this.pipes.add(pipe);
    };

    /**
     * @method addNode
     * @param {Node} node
     */
    GasNetwork.prototype.addNode = function(node){
        this.nodes.add(node);
    };


    return GasNetwork;
});
