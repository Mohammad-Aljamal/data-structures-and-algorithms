"use strict";

const BinarySearchTree = require("../Binary-Search-Tree/Binary-Search-Tree");

function tree_intersection(tree1, tree2) {
    if (!tree1.root || !tree2.root) {
        return "one of the inputs is not a tree or empty";
    }

    let result = [];
    let traverse = (node1, node2) => {
        if (node1.value === node2.value) {
            result.push(node2.value);
        }
        if (node1.left && node2.left) {
            traverse(node1.left, node2.left);
        }   
        if (node1.right && node2.right) {
            traverse(node1.right, node2.right);
        }
    };
    traverse(tree1.root, tree2.root);
    return result;
}

const tree1 = new BinarySearchTree();
const tree2 = new BinarySearchTree();

console.log("---------------TREE 1----------------------------");
tree1.add(9);
tree1.add(5);
tree1.add(4);
tree1.add(6);
tree1.add(10);

console.log(`pre Order: ${tree1.preOrder()}`);

console.log("---------------TREE 1----------------------------");
tree2.add(8);
tree2.add(5);
tree2.add(4);
tree2.add(7);
tree2.add(10);
tree2.add(11);

console.log(`pre Order: ${tree2.preOrder()}`);

console.log(
  "------------------tree_intersection function-------------------------"
);

console.log(`tree_intersection: ${tree_intersection(tree1, tree2)}`);


module.exports = tree_intersection;