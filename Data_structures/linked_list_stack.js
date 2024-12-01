const LinkedList = require("./linked_list_with_tail");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head?.value;
  }

  isEmpty() {
    return this.list.size === 0;
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }
}

const stack = new LinkedListStack();
console.log(stack.getSize());
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.print();
console.log(stack.peek());
