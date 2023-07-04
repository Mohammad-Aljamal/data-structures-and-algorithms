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
            return 'empty stack';
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


class pseudoQueue {
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value){
        this.stack1.push(value)
    }

    dequeue(){
        if(this.stack2.length === 0){
          let count = 0;
            // while(this.stack1.next){
               while(this.stack1.length >= count){

              count++;
                this.stack1.pop();
            }
        }

      let result = this.stack2.push(this.stack1.pop());
        return  result.value;

    }
}


let list = new pseudoQueue();

list.enqueue(20);
list.enqueue(15);
list.enqueue(10);
list.enqueue(5);
console.log(list);

console.log('-----------------------------------')

console.log(list.dequeue());
