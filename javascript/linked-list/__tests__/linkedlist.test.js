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
    list.insertBefore('one','zero');
    expect(list.head.value).toEqual('zero');
    // list.insertAfter('two','three');
    // expect(list.tail.value).toEqual("three");
  });
});

// afterAll (()=> {
//   process.exit();
// })
