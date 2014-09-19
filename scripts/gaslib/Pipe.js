define([
    "gaslib/Point",
    "gaslib/Helpers"
], function(Point, Helpers){

    /**
     * Class representing a pipe in the network
     *
     * @class Pipe
     * @constructor
     */
    var Pipe = function(){
        this.flow = 0;
        this.maxFlow = 0;
        this.start = new Point();
        this.finish = new Point();
    };

    /**
     * @type {Pipe}
     */
    Pipe.constructor = Pipe;

    /**
     * @returns {number} Flow ratio of a maximum value.
     */
    Pipe.prototype.usage = function(){
        if (this.maxFlow > 0)
        {
            return this.flow / this.maxFlow;
        }
        else
        {
            return 0;
        }
    };

    /**
     * @method length
     * @returns {*} returns distance between start Point and finish Point.
     */
    Pipe.prototype.length = function() {
        return Helpers.distanceInKm(this.start, this.stop);
    };

    return Pipe;
});
