'use strict';

const Node = require('../Node');

class Queue {
    constructor (){
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    isEmpty(){
        if(this.front === null){
            return true;
        }else{
            return false;
        }
    }

    enqueue(value){
        const newNode = new Node (value);

        if(this.isEmpty()){
            this.front = newNode;
            this.rear = newNode;
            this.length++;
            return newNode;
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
            this.length++;
            return newNode;
        }
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('the queue is empty')
            return 'the queue is empty';
        }else{
            const temp = this.front;
            this.front = temp.next;
            temp.next = null;
            this.length--;
            return temp.value;
        }
    }

    peek(){
        if(this.isEmpty() === true){
            console.log('the queue is empty')
            return 'the queue is empty';
        }else{
            return this.front.value;
        }
    }
}

module.exports = Queue;