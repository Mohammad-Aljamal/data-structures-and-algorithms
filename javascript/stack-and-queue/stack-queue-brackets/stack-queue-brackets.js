'use strict';

class Node {
    constructor (string) {
        this.string = string;
        this.next = null;
    }
}


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

    enqueue(string){
        const newNode = new Node (string);

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


function validateBrackets (string){
    
}

validateBrackets(newQueue);

module.exports = Queue;