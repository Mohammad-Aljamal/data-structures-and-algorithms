"use strict";

// Require our linked list implementation
const LinkedList = require("../lib/LinkedList");

describe("Linked List", () => {
  test("create a linkedlist ", async () => {
    let list = await new LinkedList();
    expect(list.head).toBeNull();
  });
  test("append to linkedlist", async () => {
    let list = await new LinkedList();
    list.append("one");
    expect(list.head.value).toEqual("one");
    list.append("two");
    expect(list.tail.value).toEqual("two");
    // list.includes("two");
    // expect(list.includes("two")).toEqual(true);
    // list.toString();
    // expect(list.toString()).toEqual("{ one } -> { two } -> NULL");
    list.insertBefore('one','zero');
    expect(list.head.value).toEqual('zero');
    // list.insertAfter('two','three');
    // expect(list.tail.value).toEqual("three");
    list.kthFromEnd(0);
    expect(list.kthFromEnd(0)).toEqual('two');
  });
});

// afterAll (()=> {
//   process.exit();
// })
