"use strict";

const Node = require('../Node');
const BinarySearchTree = require('../Binary-Search-Tree/Binary-Search-Tree');
const tree_intersection = require('../treeIntersection/tree-intersection')

describe("Tree", () => {
  test("create a Tree ", async () => {
    let newTree = await new BinarySearchTree();
    expect(newTree.root).toBeNull();
  });

  test("create a Tree with single node", async () => {
    let newNode = new Node (1)
    let newTree = await new BinarySearchTree(newNode);
    expect(newTree.root).toEqual(newNode);
  });
});


describe("add", () => {
  test("add new nodes to the tree", async () => {
    let newTree = await new BinarySearchTree();
    newTree.add(5);
    expect(newTree.root.value).toEqual(5);
  });

  test("add letf node to the root of the binary search tree", async () => {
    let newTree = await new BinarySearchTree();
    newTree.add(5);
    newTree.add(3);
    expect(newTree.root.value).toEqual(5);
    expect(newTree.root.left.value).toEqual(3);

  });

  test("add right node to the root of the binary search tree", async () => {
    let newTree = await new BinarySearchTree();
    newTree.add(5);
    newTree.add(6);
    expect(newTree.root.value).toEqual(5);
    expect(newTree.root.right.value).toEqual(6);
  });
});


describe("Depth First traverse", () => {
  test("preOrder  inOrder  postOrder  add  contains", async () => {
    let newTree = await new BinarySearchTree();
    newTree.add(5);
    newTree.add(6);
    newTree.add(3);
    newTree.add(2);
    newTree.add(4);
    expect(newTree.root.value).toEqual(5);
    expect(newTree.preOrder()).toEqual([5,3,2,4,6]);
  });

  test("inOrder", async () => {
    let newTree = await new BinarySearchTree();
    newTree.add(5);
    newTree.add(6);
    newTree.add(3);
    newTree.add(2);
    newTree.add(4);
    expect(newTree.root.value).toEqual(5);
    expect(newTree.inOrder()).toEqual([2,3,4,5,6]);
  });

  test("postOrder", async () => {
    let newTree = await new BinarySearchTree();
    newTree.add(5);
    newTree.add(6);
    newTree.add(3);
    newTree.add(2);
    newTree.add(4);
    expect(newTree.root.value).toEqual(5);
    expect(newTree.postOrder()).toEqual([2,4,3,6,5]);
  });
});


describe("contains", () => {
  test("check if the Tree IS contains a spacifc value", async () => {
    let newTree = await new BinarySearchTree();
    newTree.add(5);
    newTree.add(6);
    newTree.add(3);
    newTree.add(2);
    newTree.add(4);
    let containValue = newTree.contains(5)
    let containValue1 = newTree.contains(4)
    let containValue2 = newTree.contains(0)
    expect(containValue).toEqual(true);
    expect(containValue1).toEqual(true);
    expect(containValue2).toEqual(false);
  });
});

describe("FizzBizz", () => {
  test("if value of node %3=0 Fizz if value of node %5=0 Bizz if both FizzBizz", async () => {
    let newTree = await new BinarySearchTree();
    let result = newTree.fizzBuzz(newTree);
    expect(result).toEqual('the tree is empty');

    newTree.add(9);
    newTree.add(8);
    newTree.add(5);
    newTree.add(15);
    newTree.fizzBuzz(newTree);
    expect(newTree.preOrder()).toEqual(['Fizz','8','Bizz','FizzBizz']);
  });
})

describe("getMax", () => {
  test("get the max value of the tree", async () => {
    let newTree = await new BinarySearchTree();
    expect(newTree.treeMax()).toEqual('the tree is empty');
    newTree.add(5);
    expect(newTree.treeMax()).toEqual(5);
    newTree.add(6);
    newTree.add(3);
    expect(newTree.treeMax()).toEqual(6);
    newTree.add(7);
    newTree.add(2);
    newTree.add(11);
    expect(newTree.treeMax()).toEqual(11);
  });
})




describe("tree_intersection", () => {
  test("test the tree_intersection if one if the input is not a Tree", async () => {
    let tree1 = await new BinarySearchTree();
    tree1.add(5);
    tree1.add(6);
    tree1.add(3);
    tree1.add(7);
    tree1.add(2);
    tree1.add(11);

    expect(tree_intersection(tree1, 6)).toEqual("one of the inputs is not a tree or empty");
  });

  test("test the tree_intersection if one if the trees in empty", async () => {
    let tree1 = await new BinarySearchTree();
    let tree2 = await new BinarySearchTree();
    tree1.add(5);
    tree1.add(6);
    tree1.add(3);
    tree1.add(7);
    tree1.add(2);
    tree1.add(11);

    expect(tree_intersection(tree1, tree2)).toEqual("one of the inputs is not a tree or empty");
  });

  test("test the tree_intersection if one if both of thim is Trees", async () => {
    let tree1 = await new BinarySearchTree();
    let tree2 = await new BinarySearchTree();
    tree1.add(8);
    tree1.add(6);
    tree1.add(3);
    tree1.add(7);
    tree1.add(10);

    
    tree2.add(8);
    tree2.add(6);
    tree2.add(3);
    tree2.add(1);
    tree1.add(11);

    expect(tree_intersection(tree1, tree2)).toEqual([8,6,3]);
  });
})



