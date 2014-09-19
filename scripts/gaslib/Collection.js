define([
    "gaslib/Iterator"
], function(Iterator){

    var Collection = function(){
        this.__collection = [];
    };


    Collection.constructor = Collection;


    Collection.prototype.add = function(element){
        this.__collection.push(element);
    };

    /**
     * @returns {Iterator} Iterator of collection.
     */
    Collection.prototype.getIterator = function() {
        return new Iterator(this.__collection);
    };


    return Collection;
});
