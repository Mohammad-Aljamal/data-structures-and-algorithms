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

    list.append("one");
    list.append("two");
    let result2 = list.toString();
    expect(result2).toEqual("{ one } -> { two } -> NULL");
  });
});

describe("kthFromEnd", () => {
  test("kthFromEnd in LL  of empty LL", async () => {
    let list = await new LinkedList();
    let result = list.kthFromEnd(0);
    expect(result).toEqual("Exception");
  });

  test("kthFromEnd in LL for the first and the last items", async () => {
    let list = await new LinkedList();
    list.append("one");
    list.append("two");
    let result1 = list.kthFromEnd(0);
    expect(result1).toEqual("two");
    let result2 = list.kthFromEnd(1);
    expect(result2).toEqual("one");
  });

  test("kthFromEnd in LL for item out of the LL", async () => {
    let list = await new LinkedList();
    list.append("one");
    list.append("two");
    let result1 = list.kthFromEnd(8);
    expect(result1).toEqual("Exception");
  });

  test("kthFromEnd in LL for negative value", async () => {
    let list = await new LinkedList();
    list.append("one");
    list.append("two");
    let result1 = list.kthFromEnd(-1);
    expect(result1).toEqual("Exception");
  });
});

describe("zipList", () => {
  test("combine two LL's equal to gether in size", async () => {
    let list1 = await new LinkedList();
    let list2 = await new LinkedList();
    list1.append(1);
    list1.append(2);
    list2.append(3);
    list2.append(4);
    let result = list1.zipLists(list1, list2);
    expect(result).toEqual("{ 1 } -> { 3 } -> { 2 } -> { 4 } -> NULL");
  });

  test("combine two LL's LL2 larger than LL1 in size", async () => {
    let list1 = await new LinkedList();
    let list2 = await new LinkedList();
    list1.append(1);
    list1.append(2);
    list2.append(3);
    list2.append(4);
    list2.append(5);
    let result = list1.zipLists(list1, list2);
    expect(result).toEqual("{ 1 } -> { 3 } -> { 2 } -> { 4 } -> { 5 } -> NULL");
  });

  test("combine two LL's one of them empty", async () => {
    let list1 = await new LinkedList();
    let list2 = await new LinkedList();
    list2.append(3);
    list2.append(4);
    list2.append(5);
    let result = list1.zipLists(list1, list2);
    expect(result).toEqual("{ 3 } -> { 4 } -> { 5 } -> NULL");
  });

  test("combine two LL's both of them empty", async () => {
    let list1 = await new LinkedList();
    let list2 = await new LinkedList();
    let result = list1.zipLists(list1, list2);
    expect(result).toEqual("NULL");
  });

});
