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
    expect(list.head.value).toEqual("one");
    // list.includes('one');
    // expect(list.head.value).toEqual('one');
  });
});

// afterAll (()=> {
//   process.exit();
// })
