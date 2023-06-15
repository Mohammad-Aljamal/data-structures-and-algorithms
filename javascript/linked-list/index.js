'use strict';

const LinkedList = require('./lib/LinkedList');

let ll = new LinkedList();

ll.append(1);
ll.append(2);
ll.append(3);


console.log(ll);

console.log(ll.includes(0));
console.log(ll.includes(1));

console.log(ll.toString());