const { NotImplementedError } = require("../lib");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    if (this.first === null) {
      return null;
    }
    const result = {
      value: this.first.value,
      next: null,
    };
    let current = this.first.next;
    let resultCurrent = result;
    while (current) {
      resultCurrent.next = {
        value: current.value,
        next: null,
      };
      resultCurrent = resultCurrent.next;
      current = current.next;
    }
    return result;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
      return;
    }
    this.last.next = node;
    this.last = node;
  }

  dequeue() {
    if (!this.first) {
      return undefined;
    }
    const value = this.first.value;
    this.first = this.first.next;
    if (!this.first) {
      this.last = null;
    }
    return value;
  }
}

module.exports = {
  Queue,
};
