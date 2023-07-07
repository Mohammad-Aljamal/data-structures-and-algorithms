"use strict";

const queueAnimal = require('../stack-queue-animal-shelter/queue-animal');


describe("Queue", () => {
  test("create a Queue ", async () => {
    let newQueue = await new queueAnimal();
    expect(newQueue.front).toBeNull();
  });
});

describe("enqueue", () => {
  test("PUSH a new Animal to the Queue", async () => {
    let newQueue = await new queueAnimal();
    newQueue.enqueue("dog","losy");
    expect(newQueue.front.species).toEqual("dog");
    expect(newQueue.front.name).toEqual("losy");

    expect(newQueue.rear.species).toEqual("dog");
    expect(newQueue.rear.name).toEqual("losy");


    newQueue.enqueue("cat","lolo");
    expect(newQueue.front.species).toEqual("dog");
    expect(newQueue.rear.species).toEqual("cat");

  });
});

describe("isEmpty", () => {
  test("check if the Queue IS EMPTY when it is empty", async () => {
    let newQueue = await new queueAnimal();
    let result = newQueue.isEmpty();
    expect(result).toEqual(true);
  });

  test("check if the Queue IS EMPTY when it is contain nodes", async () => {
    let newQueue = await new queueAnimal();
    newQueue.enqueue("dog","losy");
    let result1 = newQueue.isEmpty();
    expect(result1).toEqual(false);
  });
});

describe("dequeue", () => {
  test("delete the front of the Queue if it is empty", async () => {
    let newQueue = await new queueAnimal();
    let result = newQueue.dequeue("dog");
    expect(result).toEqual('the queue is empty');
    expect(newQueue.front).toBeNull();
  });

  test("dequeue the top of the Queue if it is contain Animals", async () => {
    let newQueue = await new queueAnimal();
    newQueue.enqueue("lion","lili");
    newQueue.enqueue("cat","lolo");
    newQueue.enqueue("dog","losy");
    expect(newQueue.rear.species).toEqual("dog");
    expect(newQueue.front.species).toEqual("lion");

    newQueue.dequeue("dog");
    expect(newQueue.rear.species).toEqual("cat");
    expect(newQueue.front.species).toEqual("lion");
  });

  test("dequeue the top of the Queue if it is contain Animals", async () => {
    let newQueue = await new queueAnimal();
    newQueue.enqueue("lion","lili");
    newQueue.enqueue("cat","lolo");
    newQueue.enqueue("dog","losy");
    expect(newQueue.rear.species).toEqual("dog");
    expect(newQueue.front.species).toEqual("lion");

    let result = newQueue.dequeue("lion");
    expect(newQueue.rear.species).toEqual("dog");
    expect(newQueue.front.species).toEqual("lion");
    expect(result).toEqual(null);
  });
});