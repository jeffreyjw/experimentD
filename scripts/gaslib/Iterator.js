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

    /**
     * @returns {boolean} true if collection has next item, otherwise false.
     */
    Iterator.prototype.hasNext = function() {
        if (this.position === this.collection.length) {
            return false;
        }
        return true;
    };

    /**
     * @returns {*} item of collection and iterates index.
     */
    Iterator.prototype.next = function() {
        if (this.hasNext()) {
            this.position++;
            return this.collection[this.position];
        }
        return false;
    };


    return Iterator;
});
