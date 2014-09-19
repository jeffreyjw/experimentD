define([], function(){

    /**
     * The Iterator class
     *
     * @class Iterator
     * @param {Array} collection the collection that is being iterated at
     * @constructor
     */
    var Iterator = function(collection){
        this.collection = collection;
        this.position = -1;
    };


    Iterator.constructor = Iterator;


    return Iterator;
});
