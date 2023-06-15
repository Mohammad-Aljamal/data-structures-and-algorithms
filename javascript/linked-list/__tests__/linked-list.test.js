'use strict';

// Require our linked list implementation
const LinkedList = require('../lib/LinkedList');

describe('Linked List', () => {
  it("create a linkedlist ", () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
})
it("append to linkedlist", () => {
    let list = new LinkedList();
    list.append('one');
    expect(list.head.value).toEqual('one');
    list.append('two');
    expect(list.head.value).toEqual('one');
    // list.includes('one');
    // expect(list.head.value).toEqual('one');

})
});
