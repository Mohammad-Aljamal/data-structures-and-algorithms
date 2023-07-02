"use strict";

const Stack = require('../stack/stack');


describe("Stack", () => {
  test("create a Stack ", async () => {
    let newStack = await new Stack();
    expect(newStack.top).toBeNull();
  });
});

describe("PUSH", () => {
  test("PUSH to Stack", async () => {
    let newStack = await new Stack();
    newStack.push("one");
    expect(newStack.top.value).toEqual("one");
    newStack.push("two");
    expect(newStack.top.value).toEqual("two");
    newStack.push("three");
    expect(newStack.top.value).toEqual("three");
  });
});

describe("isEmpty", () => {
  test("check if the Stack IS EMPTY when it is empty", async () => {
    let newStack = await new Stack();
    let result = newStack.isEmpty();
    expect(result).toEqual(true);
  });

  test("check if the Stack IS EMPTY when it is contain nodes", async () => {
    let newStack = await new Stack();
    newStack.push("one");
    let result1 = newStack.isEmpty();
    expect(result1).toEqual(false);
  });
});

describe("POP", () => {
  test("POP the top of the Stack if it is empty", async () => {
    let newStack = await new Stack();
    let result = newStack.pop();
    expect(result).toEqual('empty stack');
    expect(newStack.top).toBeNull();
  });

  test("POP the top of the Stack if it is contain nodes", async () => {
    let newStack = await new Stack();
    newStack.push("one");
    newStack.push("two");
    newStack.push("three");
    expect(newStack.top.value).toEqual("three");
    newStack.pop();
    expect(newStack.top.value).toEqual("two");
  });
});


describe("PEEK", () => {
  test("git the value of the top node of Stack if it is empty", async () => {
    let newStack = await new Stack();
    let result = newStack.peek();
    expect(result).toEqual('empty stack');
    expect(newStack.top).toBeNull();
  });

  test("git the value of the top node of Stack if it is contain nodes", async () => {
    let newStack = await new Stack();
    newStack.push("one");
    newStack.push("two");
    newStack.push("three");
    let result = newStack.peek();
    expect(newStack.top.value).toEqual("three");
    expect(result).toEqual("three");
  });
});
