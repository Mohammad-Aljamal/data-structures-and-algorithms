"use strict";

const Node = require('../Node');
const BinarySearchTree = require('../Binary-Search-Tree/Binary-Search-Tree');

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
