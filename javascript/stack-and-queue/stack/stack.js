'use strict';

const Node = require('../Node');

class Stack {
    constructor(){
        this.top = null;
        this.length = 0;
    }

    isEmpty(){
        if(this.top === null){
            return true;
        }else{
            return false;
        }
    }

    push(value){
        const newNode = new Node (value);

        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this.top;
    }

    pop(){
        if(this.isEmpty() === true){
            console.log('empty stack');
            return false;
        }
        const temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    peek(){
        if(this.isEmpty() === true){
            console.log('empty stack');
            return 'empty stack';
        }
        return this.top.value;
    }
}

module.exports = Stack;
