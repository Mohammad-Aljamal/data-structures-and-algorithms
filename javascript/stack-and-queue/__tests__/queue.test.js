"use strict";

const Queue = require('../queue/queue');


describe("Queue", () => {
  test("create a Queue ", async () => {
    let newQueue = await new Queue();
    expect(newQueue.front).toBeNull();
  });
});

describe("enqueue", () => {
  test("PUSH a new node to the Queue", async () => {
    let newQueue = await new Queue();
    newQueue.enqueue("one");
    expect(newQueue.front.value).toEqual("one");
    expect(newQueue.rear.value).toEqual("one");

    newQueue.enqueue("two");
    expect(newQueue.front.value).toEqual("one");
    expect(newQueue.rear.value).toEqual("two");

  });
});

describe("isEmpty", () => {
  test("check if the Queue IS EMPTY when it is empty", async () => {
    let newQueue = await new Queue();
    let result = newQueue.isEmpty();
    expect(result).toEqual(true);
  });

  test("check if the Queue IS EMPTY when it is contain nodes", async () => {
    let newQueue = await new Queue();
    newQueue.enqueue("one");
    let result1 = newQueue.isEmpty();
    expect(result1).toEqual(false);
  });
});

describe("dequeue", () => {
  test("delete the front of the Queue if it is empty", async () => {
    let newQueue = await new Queue();
    let result = newQueue.dequeue();
    expect(result).toEqual('the queue is empty');
    expect(newQueue.front).toBeNull();
  });

  test("dequeue the top of the Queue if it is contain nodes", async () => {
    let newQueue = await new Queue();
    newQueue.enqueue("one");
    newQueue.enqueue("two");
    newQueue.enqueue("three");
    expect(newQueue.rear.value).toEqual("three");
    expect(newQueue.front.value).toEqual("one");
    newQueue.dequeue();
    expect(newQueue.rear.value).toEqual("three");
    expect(newQueue.front.value).toEqual("two");
  });
});


describe("PEEK", () => {
  test("git the value of the top node of Queue if it is empty", async () => {
    let newQueue = await new Queue();
    let result = newQueue.peek();
    expect(result).toEqual('the queue is empty');
    expect(newQueue.front).toBeNull();
  });

  test("git the value of the top node of Queue if it is contain nodes", async () => {
    let newQueue = await new Queue();
    newQueue.enqueue("one");
    newQueue.enqueue("two");
    newQueue.enqueue("three");
    let result = newQueue.peek();
    expect(newQueue.front.value).toEqual("one");
    expect(result).toEqual("one");
  });
});
