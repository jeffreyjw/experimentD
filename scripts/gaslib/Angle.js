define([], function(){

    /**
     * Angle converter
     *
     * @class Angle
     * @constructor
     */
    var Angle = function(){};


    /**
     * Converts degrees to radians
     *
     * @method degreeToRadian
     * @param {number} degree angle in degrees
     * @returns {number} angle in radians
     */
    Angle.degreeToRadian = function(degree){
        return (degree * Math.PI) / 180;
    };


    /**
     * Converts radians to degrees
     *
     * @method radianToDegree
     * @param {number} radian
     * @returns {number}
     */
    Angle.radianToDegree = function(radian){
        return (radian * 180) / Math.PI;
    };


    return Angle;

});
