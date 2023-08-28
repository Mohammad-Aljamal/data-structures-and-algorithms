"use strict";

// Require our Hashmap implementation
const Hashmap = require("../hashtable");

describe("Hash map", () => {
  test("create a Hashmap ", async () => {
    let myHash = await new Hashmap(10);
    expect(myHash.keys()).toEqual([]);
  });
});

describe("set", () => {
  test("set key and value to hashmap", async () => {
    let myHash = await new Hashmap();
    myHash.set("ahmad","one");
    expect(myHash.get("ahmad")).toEqual("one");
    myHash.set("mohamad","three");
    expect(myHash.get("mohamad")).toEqual("three");
    myHash.set("mohamad","one");
    expect(myHash.get("mohamad")).toEqual("one");

  });
});

describe("get", () => {
  test("get the value of the key in Hashmap", async () => {
    let myHash = await new Hashmap();
    myHash.set("ahmad","one");
    myHash.set("mohamad","three");
    expect(myHash.get("mohamad")).toEqual("three");
  });

  test("get the value of the key in Hashmap if the value not exist", async () => {
    let myHash = await new Hashmap();
    myHash.set("ahmad","one");
    myHash.set("mohamad","three");
    expect(myHash.get("esam")).toEqual("there is no key like esam");
  });
});

describe("has", () => {
  test("Hashmap has specific key if the value exist", async () => {
    let myHash = await new Hashmap();
    myHash.set("ahmad","one");
    myHash.set("mohamad","three");
    expect(myHash.has("ahmad")).toEqual(true);
  });

  test("Hashmap has specific key if the value not exist", async () => {
    let myHash = await new Hashmap();
    myHash.set("ahmad","one");
    myHash.set("mohamad","three");
    expect(myHash.has("esam")).toEqual(false);
  });
});

// describe("keys", () => {
//   test("return all keys in the hashtable", async () => {
//     let myHash = await new Hashmap();
//     myHash.set("ahmad","one");
//     myHash.set("mohamad","three");
//     myHash.set("esam","one");
//     myHash.set("samah","three");
//     expect(myHash.keys()).toEqual(["ahmad","mohamad","esam","samah"]);
//   });
// });

// describe("hash", () => {
//   test("return the index for any key", async () => {
//     let myHash = await new Hashmap();
//     expect(myHash.hash("ahmad")).toEqual("the index of this ahmad is 3");
//     expect(myHash.hash("mohammad")).toEqual("the index of this mohamad is 3");
//     expect(myHash.hash("waseem")).toEqual("the index of this waseem is 8");
//     expect(myHash.hash("esam")).toEqual("the index of this esam is 8");

//   });
// });


//////////////////////////////////challenge 31 repeatedWord ////////////////////////////////

describe("repeatedWord", () => {
  test(" finds the first word to occur more than once in a string", async () => {
    let myHash = await new Hashmap();
    const result = myHash.repeatedWord("Once upon a time, there was a brave princess who");
    const result1 = myHash.repeatedWord("It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York");

    expect(result).toEqual("a");
    expect(result1).toEqual("summer");

  });
});
