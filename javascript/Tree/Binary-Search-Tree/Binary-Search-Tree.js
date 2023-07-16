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

  inOrder() {
    let result = [];
    let traverse = (node) => {
        if (node.left) traverse(node.left);
        result.push(node.value);
        if (node.right) traverse(node.right);
    }

    traverse (this.root);
    return result;
  }

  postOrder() {
    let result = [];
    let traverse = (node) => {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        result.push(node.value);
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

  contains (value) {
    let preOrder = this.preOrder();
    if(preOrder.includes(value)){
      return true;
    } else {
      return false;
    }
  }

  treeMax () {
    if(!this.root){
      return 'the tree is empty';
    }
    return Math.max(...this.preOrder());
  }
}

module.exports = BinarySearchTree;