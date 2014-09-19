define([
    "gaslib/Angle"
], function(Angle){

    /**
     * @param lat - Latitude of a Point
     * @param lng - Longitude of a Point
     * @class Point
     */
    var Point = function(lat, lng){
        lat = lat || 0;
        lng = lng || 0;

        this.lat = lat;
        this.lng = lng;
    };


    Point.constructor = Point;


    Point.prototype.latInRadians = function(){
        return Angle.degreeToRadian(this.lat);
    };


    Point.prototype.lngInRadians = function(){
        return Angle.degreeToRadian(this.lng);
    };

    return Point;

});