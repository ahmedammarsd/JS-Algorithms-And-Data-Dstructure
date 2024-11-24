class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();

console.log("check if Empty: ", queue.isEmpty());
console.log("=== add items ====");
queue.enqueue(1);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(3);
queue.enqueue(5);
console.log("=== added items ====");
console.log("check if Empty: ", queue.isEmpty());
console.log("The Size: ", queue.size());
console.log("first element: ", queue.peek());
queue.dequeue();
console.log("first element: ", queue.peek());
queue.print();
