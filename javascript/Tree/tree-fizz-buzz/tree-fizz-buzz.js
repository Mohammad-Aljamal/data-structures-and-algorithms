"use strict";

const Node = require('../Node');


class BinarySearchTree  {
  constructor(root = null) {
    this.root = root;
  }


  preOrder() {
    let result = [];
    let traverse = (node) => {
        result.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }

    traverse (this.root);
    return result;
  }

  add (value) {
    let newNode = new Node (value);

    if(!this.root){
      this.root = newNode;
      return `the new value is the root of this Tree: ${this.root.value}`;
    }

    let traverse = (node) => {

        if(value === node.value){
          return 'the value is exist';
        }
        if(value < node.value && node.left) {
            traverse (node.left)
        } else 
        if(value > node.value && node.right){
            traverse (node.right)
        } else
        if (value < node.value) {
            node.left = newNode
            return ;
        } else
        if (value > node.value) {
            node.right = newNode
            return;
        }
    }

    traverse(this.root);
  }


  fizzBuzz (tree) {
    if(!tree.root){
        return 'the tree is empty';
    }

    let traverse = (node) => {
        if (node.value % 3 == 0 && node.value % 5 == 0) {
            node.value = 'FizzBizz';
        } else if (node.value % 3 == 0) {
            node.value = 'Fizz';
        } else if (node.value % 5== 0) {
            node.value = 'Bizz';
        } else {
            node.value = `${node.value}`;
        }

        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }

    traverse(tree.root);
    return tree;
  }
}


const tree = new BinarySearchTree();


console.log('------------------FizzBizz-------------------------');

tree.add(9);
tree.add(7);
tree.add(6);
tree.add(8);
tree.add(10);
tree.add(15);


tree.fizzBuzz(tree);

console.log(tree.preOrder());



module.exports = BinarySearchTree;