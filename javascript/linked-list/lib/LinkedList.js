"use strict";

const Node = require("./Node");
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
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
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let currentNodeString = "";
    let currentNode = this.head;
    while (currentNode) {
      currentNodeString += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }

    currentNodeString += `NULL`;
    return currentNodeString;
  }

  insertAfter(value, newValue) {
    if (!this.head) {
      return null;
    }
    let previous;
    let count = 0;
    let current = this.head;
    while (current) {
      previous = current;
      count++;
      if (current.value == value) {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        if (this.size == count) {
          newNode.next = null;
          this.tail = newNode;
        }
        previous.next = newNode;
        this.size++;
        return this;
      }
      current = current.next;
    }
    return;
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      return null;
    }

    if (this.head.value == value) {
      if (this.size == 1) {
        this.tail = this.head;
      }
      this.head = new Node(newValue, this.head);
      this.size++;
      return this;
    }

    let current = this.head;
    let next;

    while (current.next) {
      if (current.next.value == value) {
        let newNode = new Node(newValue, current.next);
        current.next = newNode;
        this.size++;
        return this;
      }
      current = current.next;
    }
    return this;
  }

  kthFromEnd(endIndex) {
    let index = this.size - endIndex;
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      if (index == count) {
        return current.value;
      }
      current = current.next;
    }
    return "Exception";
  }

  ////////////////////////////////////////////////////////////
  headOfList(list) {
    return this.head;
  }

  zipLists(list1, list2) {
    if (!list1 && !list2) {
      return null;
    }
    if (!list1) {
      return list2.toString();
    }
    if (!list2) {
      return list1.toString();
    }

    let current1 = list1.headOfList(list1);
    let current2 = list2.headOfList(list2);
    let zipList = new LinkedList();

    while (current1 || current2) {
      if (current1) {
        zipList.append(current1.value);
        current1 = current1.next;
      }
      if (current2) {
        zipList.append(current2.value);
        current2 = current2.next;
      }
    }
    return zipList.toString();
  }
  ////////////////////////////////////////////////////////////
}

module.exports = LinkedList;
