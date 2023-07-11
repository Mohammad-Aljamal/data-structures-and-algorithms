"use strict";

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}
function validateBracket(string) {
  const stack = new Stack();
  console.log(typeof stack);
  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];
  const bracketPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < string.length; i++) {
    const currentBracket = string[i];
    if (openingBrackets.includes(currentBracket)) {
      stack.push(currentBracket);
    } else if (closingBrackets.includes(currentBracket)) {
      if (stack.isEmpty()) {
        return false;
      }
      const topBracket = stack.pop();
      if (bracketPairs[currentBracket] !== topBracket) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

console.log(validateBracket("()")); // true
console.log(validateBracket("({[]})")); // true
console.log(validateBracket("({)")); // false
console.log(validateBracket("[()]{}{[()()]()}")); // true
console.log(validateBracket("]")); // false

