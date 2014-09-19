define([], function(){


    /**
     * Map drawing class - abstraction for easier use of google maps
     *
     * @class MapDrawer
     * @param mapElement HTML Element to which put the map
     * @constructor
     */
    var MapDrawer = function(mapElement){
        this.mapElement = mapElement;

        this.lines = [];
        this.markers = [];
        this.animationOffset = 0;
        this.animationSpeeds = [];

        this.init();
    };


    MapDrawer.constructor = MapDrawer;


    MapDrawer.prototype.init = function(){

        var mapOptions = {
            center: new google.maps.LatLng(52, 20),
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(this.mapElement, mapOptions);
    };


    /**
     * Run line animations on the map
     *
     * @method initAnimations
     */
    MapDrawer.prototype.initAnimations = function() {

        var self = this;

        var animation = function(){
            requestAnimationFrame(animation);

            self.animationOffset++;

            if (self.animationOffset == 20)
            {
                self.animationOffset = 0;
            }

            for (var i = 0; i < self.lines.length; ++i)
            {
                var line = self.lines[i];
                var speed = self.animationSpeeds[i];
                var icons = line.get('icons');
                icons[0].offset = (speed*self.animationOffset) + "px";
                line.set('icons', icons);
            }
        };

        requestAnimationFrame(animation);
    };


    /**
     *
     * Draws a line on the map
     *
     * @method drawLine
     * @param {Point} start Starting point on the map
     * @param {Point} finish Finishing point on the map
     * @param {object} options options for the line: weight, popup, color, speed
     */
    MapDrawer.prototype.drawLine = function(start, finish, options){
        var path = [
            new google.maps.LatLng(start.lat, start.lng),
            new google.maps.LatLng(finish.lat, finish.lng)
        ];

        var lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 4,
            strokeColor: '#DDDDFF'
        };

        var line = new google.maps.Polyline({
            path: path,
            geodesic: false, // curvy or harsh
            strokeColor: options.color,
            strokeOpacity: 1,
            strokeWeight: options.weight ? options.weight : 4,
            icons: [{
                icon: lineSymbol,
                offset: 0,
                repeat: '20px'
            }]
        });

        this.lines.push(line);

        options.speed = options.speed ? options.speed : 0;
        this.animationSpeeds.push(options.speed);

        line.setMap(this.map);

        if (options.popup)
        {
            var infoWindow = new google.maps.InfoWindow({
                content: options.popup
            });

            var self = this;

            google.maps.event.addListener(line, 'click', function(e){
                infoWindow.setPosition(e.latLng);
                infoWindow.open(self.map);
            });
        }
    };


    /**
     *
     * Draws a marker on the map
     *
     * @method drawMarker
     * @param {Point} position position of the marker on the map
     * @param options Options of the marker: caption, content, popup
     */
    MapDrawer.prototype.drawMarker = function(position, options){
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(position.lat, position.lng),
            title: options.caption
        });

        this.markers.push(marker);

        marker.setMap(this.map);

        if (options.content)
        {
            var infoWindow = new google.maps.InfoWindow({
                content: options.content
            });

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.open(this.map, marker);
            });
        }
    };


    return MapDrawer;
});