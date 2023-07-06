'use strict';

class Animal {
    constructor (species, name){
        this.species = species;
        this.name = name;
        this.next = null;
    }
}


class Queue {
    constructor(){
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    isEmpty(){
        if (!this.front){
            return true;
        } else {
            return false;
        }
    }

    enqueue(species , name){
        const newAnimal = new Animal(species, name);

        if(!this.front){
            this.front = newAnimal;
            this.rear = newAnimal;
            this.length++;
            return this;
        } else {
            let temp = this.rear;
            this.rear = newAnimal;
            temp.next = this.rear;
            this.length++;
            return this.rear;
        }
    }

    dequeue(species){
        if (species == 'dog' || species == 'cat'){
            if(!this.front){
                return 'the queue is empty';
            } else {
                if(this.front.species == species){
                    let temp = this.front;
                    this.front = temp.next;
                    temp.next = null;
                    this.length--;
                    return temp;
                }
    
                let previos = this.front;
                let current = previos.next;;
                while(current){
                    if(current.species == species){
                        let newNext = current.next;
                        current.next = null;
                        previos.next = newNext;
                        this.length--;
                        return current;
                    }
                    previos = current;
                    current = current.next;
                }
                return `this queue has no Animal with species like ${species}`;
            }
        } else {
            return null;
        }
        
    }
}


const animal = new Queue ();

animal.enqueue('dog', 'dd');
animal.enqueue('cat', 'cc');
animal.enqueue('ccc', 'resultNull');

console.log(animal);

console.log('--------------------------------------------');

console.log(animal.dequeue('cat'));

console.log('--------------------------------------------');

console.log(animal);
