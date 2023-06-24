'use strict';

class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = null;
    }
}

module.exports = Node;