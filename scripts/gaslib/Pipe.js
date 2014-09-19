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
     * @method usage
     * @returns {float} Flow ratio of a maximum value.
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
     * @method lengthInKm
     * @returns {*} returns distance between start Point and finish Point.
     */
    Pipe.prototype.lengthInKm = function() {
        return Helpers.distanceInKm(this.start, this.finish);
    };

    return Pipe;
});
