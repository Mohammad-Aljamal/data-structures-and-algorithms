'use strict';

const LinkedList = require('./lib/LinkedList');

let ll = new LinkedList();
let ll2 = new LinkedList();

// ll.append(1);
// ll.append(2);
// ll.append(3);
// ll.append(4);
// ll.insertAfter(3,4);
// ll.insertAfter(5,7);
// ll.insertAfter(8,4);
// ll.insertBefore(2,1);
// ll.insertBefore(2,3);
// ll.insertBefore(2,6);

// ll.append(1);
// ll.append(2);
// console.log(ll.kthFromEnd(0));  // =2
// console.log(ll.kthFromEnd(1));  // =1
// console.log(ll.kthFromEnd(-1)); // =Exception
// console.log(ll.kthFromEnd(2));  // =Exception


ll.append(1);    //LL1
ll.append(2);    //LL1
ll2.append(3);   //LL2
ll2.append(4);   //LL2
ll2.append(5);   //LL2
console.log(ll.zipLists(ll,ll2));  // = { 1 } -> { 3 } -> { 2 } -> { 4 } -> { 5 } -> NULL


// console.log(ll);

// console.log(ll.includes(0));
// console.log(ll.includes(1));

// ll.append(1);
// ll.append(2);
// console.log(ll.toString());