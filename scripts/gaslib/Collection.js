define([
    "gaslib/Iterator"
], function(Iterator){

    var Collection = function(){
        this.__collection = [];
    };


    Collection.constructor = Collection;

    /**
     * @method add
     * @param {*} element
     */
    Collection.prototype.add = function(element){
        this.__collection.push(element);
    };

    /**
     * @method iterator
     * @returns {Iterator} Iterator of collection.
     */
    Collection.prototype.iterator = function() {
        return new Iterator(this.__collection);
    };


    return Collection;
});
