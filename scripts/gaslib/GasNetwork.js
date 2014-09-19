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
     * @param pipe - Add pipe.
     */
    GasNetwork.prototype.addPipe = function(pipe){
        this.pipes.add(pipe);
    };

    /**
     * @param node - Add node.
     */
    GasNetwork.prototype.addNode = function(node){
        this.nodes.add(node);
    };


    return GasNetwork;
});
