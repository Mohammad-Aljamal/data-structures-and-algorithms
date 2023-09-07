"use strict";

// Require our Hashmap implementation
const { Hashmap, repeatedWord, leftJoin } = require("../hashtable");

describe("Hash map", () => {
  test("create a Hashmap ", async () => {
    let myHash = await new Hashmap(10);
    expect(myHash.keys()).toEqual([]);
  });
});

describe("set", () => {
  test("set key and value to hashmap", async () => {
    let myHash = await new Hashmap();
    myHash.set("ahmad", "one");
    expect(myHash.get("ahmad")).toEqual("one");
    myHash.set("mohamad", "three");
    expect(myHash.get("mohamad")).toEqual("three");
    myHash.set("mohamad", "one");
    expect(myHash.get("mohamad")).toEqual("one");
  });
});

describe("get", () => {
  test("get the value of the key in Hashmap", async () => {
    let myHash = await new Hashmap();
    myHash.set("ahmad", "one");
    myHash.set("mohamad", "three");
    expect(myHash.get("mohamad")).toEqual("three");
  });

  test("get the value of the key in Hashmap if the value not exist", async () => {
    let myHash = await new Hashmap();
    myHash.set("ahmad", "one");
    myHash.set("mohamad", "three");
    expect(myHash.get("esam")).toEqual("there is no key like esam");
  });
});

describe("has", () => {
  test("Hashmap has specific key if the value exist", async () => {
    let myHash = await new Hashmap();
    myHash.set("ahmad", "one");
    myHash.set("mohamad", "three");
    expect(myHash.has("ahmad")).toEqual(true);
  });

  test("Hashmap has specific key if the value not exist", async () => {
    let myHash = await new Hashmap();
    myHash.set("ahmad", "one");
    myHash.set("mohamad", "three");
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
    const result = repeatedWord(
      "Once upon a time, there was a brave princess who"
    );
    const result1 = repeatedWord(
      "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York"
    );

    expect(result).toEqual("a");
    expect(result1).toEqual("summer");
  });
});
//////////////////////////////////challenge 31 repeatedWord ////////////////////////////////

//////////////////////////////////challenge 33 left-join //////////////////////////////////

describe("left-join", () => {
  test(" left join between two hash table", async () => {
    const myHash = new Hashmap(10);

    myHash.set("ahmad", "1");
    myHash.set("esam", "1");
    myHash.set("mohamad", "2");
    myHash.set("esam", "4");

    const secoundHash = new Hashmap(5);

    secoundHash.set("mohamad", "5");
    secoundHash.set("shihab", "2");

    const result = leftJoin(myHash, secoundHash);
    let first = result.keys();
    let second = result.get("mohamad");

    expect(first).toEqual(["ahmad","mohamad","esam"]);
    expect(second).toEqual(['2','5']);
  });
});
//////////////////////////////////challenge 33 left-join //////////////////////////////////
