"use strict";

const Node = require("./Node");
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // this.size = 0;
  }

  append(value) {
    //append || insert
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.size = 1;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.tail = newNode;
    this.size += 1;
    return this;
  }

  includes(value) {
   
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode.next;
    }
    return false;
  }

  toString() {
    
    let currentNodeString = '';
    let currentNode = this.head;
    while (currentNode) {
        currentNodeString += `{ ${currentNode.value} } -> `
        currentNode.next;
    }

    currentNodeString += `NULL`;
    return currentNodeString;

  }
}

module.exports = LinkedList;
