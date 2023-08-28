"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

  // returning the all the values  from the linkedList
  print() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  makeHash(key) {
    const asciiCodeSum = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt();
    }, 0);

    const multiPrime = asciiCodeSum * 599;
    const theIndex = multiPrime % this.size;
    return theIndex;
  }

  set(key, value) {
    const hash = this.makeHash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    const bucket = this.map[hash];
    let current = bucket.head;
    while (current) {
      if (current.value[key] !== undefined) {
        current.value[key] = value;
        return;
      }
      current = current.next;
    }

    bucket.append({ [key]: value });
  }

  get(key) {
    const hash = this.makeHash(key);
    const bucket = this.map[hash];

    if (!bucket) {
      return `there is no key like ${key}`;
    }

    let current = bucket.head;
    while (current) {
      if (current.value[key] !== undefined) {
        return current.value[key];
      }
      current = current.next;
    }
    return `there is no key like ${key}`;
  }

  has(key) {
    const hash = this.makeHash(key);
    const bucket = this.map[hash];
    if (!bucket) {
      return false;
    }

    let current = bucket.head;
    while (current) {
      if (current.value[key] !== undefined) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  keys() {
    const allKeys = [];
    for (const bucket of this.map) {
      if (bucket) {
        let current = bucket.head;
        while (current) {
          const key = Object.keys(current.value)[0];
          allKeys.push(key);
          current = current.next;
        }
      }
    }
    return allKeys;
  }

  hash(key) {
    const hash = this.makeHash(key);
    return `the index of this ${key} is ${hash}`;
  }

  ///////////////////////class 31///////////////////////////////

  repeatedWord(string) {
    const words = string.toLowerCase().split(/\W+/)
    const wordMap = new Hashmap(words.length);

    for (const word of words) {
      if (word) {
        // Ignore empty words
        if (wordMap.has(word)) {
          return word;
        }
        wordMap.set(word, true);
      }
    }

    return "No repeated word found";
  }
  
  ///////////////////////////////////////////////////////////////
}

const myHash = new Hashmap(10);

myHash.set("mohamad", "1");
myHash.set("ahmad", "1");
myHash.set("ahmad", "5");
myHash.set("esam", "1");
myHash.set("mohamad", "2");
myHash.set("esam", "4");

myHash.map.forEach((ll) => {
  console.log(ll.print());
});

console.log("get==>", myHash.get("ess"));
console.log("has==>", myHash.has("esam"));
console.log("has==>", myHash.has("waseem"));
console.log("keys==>", myHash.keys());
console.log("hash==>", myHash.hash("waseem"));
console.log("hash==>", myHash.hash("mohamad"));
console.log("hash==>", myHash.hash("ahmad"));
console.log("hash==>", myHash.hash("esam"));

console.log(
  "repet==>",
  myHash.repeatedWord(
    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only"
  )
);

module.exports = Hashmap;
