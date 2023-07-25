'use strict';

const Node = require('./Node');
const BinarySearchTree = require('./Binary-Search-Tree/Binary-Search-Tree');

const tree = new BinarySearchTree();

console.log('---------------ADD METHOD----------------------------');
console.log(tree.add(9));
tree.add(7);
tree.add(6);
tree.add(8);
tree.add(10);
tree.add(15);


console.log(`pre Order: ${tree.preOrder()}`);
console.log(`in Order: ${tree.inOrder()}`);
console.log(`post Order: ${tree.postOrder()}`);


console.log('-------------------------------------------');

console.log('------------------Contains METHOD-------------------------');

console.log(tree.contains(10));
console.log(tree.contains(9));
console.log(tree.contains(0));


console.log('------------------Get Max-------------------------');

console.log(tree.treeMax());



