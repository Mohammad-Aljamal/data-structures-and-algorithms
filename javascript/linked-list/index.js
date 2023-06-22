'use strict';

const LinkedList = require('./lib/LinkedList');

let ll = new LinkedList();

ll.append(1);
ll.append(2);
// ll.append(3);
// ll.append(4);
// ll.insertAfter(3,4);
// ll.insertAfter(5,7);
// ll.insertAfter(8,4);
// ll.insertBefore(2,1);
// ll.insertBefore(2,3);
// ll.insertBefore(2,6);

console.log(ll.kthFromEnd(0));  // =2
console.log(ll.kthFromEnd(1));  // =1
console.log(ll.kthFromEnd(-1)); // =Exception
console.log(ll.kthFromEnd(2));  // =Exception


// console.log(ll);

// console.log(ll.includes(0));
// console.log(ll.includes(1));

// console.log(ll.toString());