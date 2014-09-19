define([
    "gaslib/Angle"
], function(Angle){

    var Helpers = function(){};


    Helpers.distanceInKm = function(p1, p2){
        var earthRadiusKm = 6371;

        var startLatInRadians = p1.latInRadians();
        var finishLatInRadians = p2.latInRadians();

        var deltaLatInRadians = Angle.degreeToRadian(p2.lat - p1.lat);
        var deltaLngInRadians = Angle.degreeToRadian(p2.lng - p1.lng);

        var a = Math.sin(deltaLatInRadians/2) * Math.sin(deltaLatInRadians/2) +
            Math.sin(startLatInRadians) * Math.sin(finishLatInRadians) *
                Math.sin(deltaLatInRadians/2) * Math.sin(deltaLatInRadians/2);

        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return earthRadiusKm * c;
    };


    return Helpers;
});