'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let queue = [this.root];
      while (queue.length) {
        const node = queue.shift();
        if (!node.left) {
          node.left = newNode;
          break;
        } else if (!node.right) {
          node.right = newNode;
          break;
        } else {
          queue.push(node.left);
          queue.push(node.right);
        }
      }
    }
  }

  breadthFirstSearch() {
    if (!this.root) return [];

    const result = [];
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      result.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }
}



const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

const result = tree.breadthFirstSearch();
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7]