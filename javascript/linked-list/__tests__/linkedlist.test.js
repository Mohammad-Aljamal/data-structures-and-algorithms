"use strict";

// Require our linked list implementation
const LinkedList = require("../lib/LinkedList");

describe("Linked List", () => {
  test("create a linkedlist ", async () => {
    let list = await new LinkedList();
    expect(list.head).toBeNull();
  });
});

describe("append", () => {
  test("append to linkedlist", async () => {
    let list = await new LinkedList();
    list.append("one");
    expect(list.head.value).toEqual("one");
    list.append("two");
    expect(list.tail.value).toEqual("two");
    list.append("three");
    expect(list.tail.value).toEqual("three");
  });
});

describe("includes", () => {
  test("includes in linkedlist", async () => {
    let list = await new LinkedList();
    list.append("one");
    let result = list.includes("one");
    expect(result).toEqual(true);
    // let result2 = list.includes("two");
    // expect(result2).toEqual(false);
  });
});

describe("toString", () => {
  test("linkedlist to String ", async () => {
    let list = await new LinkedList();
    let result = list.toString();
    expect(result).toEqual("NULL");

    // list.append("one");
    // list.append("two");
    // let result2 = list.toString();
    // expect(result2).toEqual("one -> two -> NULL");
  });
});

describe("toString", () => {
  test("linkedlist to String ", async () => {
    let list = await new LinkedList();
    let result = list.toString();
    expect(result).toEqual("NULL");

    // list.append("one");
    // list.append("two");
    // let result2 = list.toString();
    // expect(result2).toEqual("one -> two -> NULL");
  });
});

describe("kthFromEnd", () => {
  test("kthFromEnd in LL ", async () => {
    let list = await new LinkedList();
    let result = list.kthFromEnd(0);
    expect(result).toEqual("Exception");

    list.append("one");
    let result1 = list.kthFromEnd(0);
    expect(result1).toEqual("one");

    let result2 = list.kthFromEnd(1);
    expect(result2).toEqual("Exception");

    list.append("two");
    let result3 = list.kthFromEnd(1);
    expect(result3).toEqual("one");
    let result4 = list.kthFromEnd(0);
    expect(result4).toEqual("two");

    let result5 = list.kthFromEnd(-1);
    expect(result5).toEqual("Exception");
  });
});

