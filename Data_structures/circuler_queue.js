/*

  - The size of the queue is fixed and a dingle block of memory
    is used as if the first element is connected to the last element

  - Also referred to as circular buffer or ring buffer and follows the FIFO principle  

  - A circular queue will reuse the empty block created during the dequeue opreation
   
  - When working with queues of fixed maximum size, 
    a circular queue is a great implementation choice.

  ==== Circular Queue Usage ====
   # Clock
   # Streaming data
   # Traffic lights  


   isFull() - check if the queue is full

*/

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      // console.log(`===== The Rear Befor Add==== ${this.rear}`);
      this.rear = (this.rear + 1) % this.capacity;
      // console.log(`===== The Rear After Added ==== ${this.rear}`);
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log(`Sorry can't add the ${element}, it's Full`);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.currentLength;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = " ";

      for (i = this.front; i !== this.rear; i = (i + 1) % this.currentLength) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log("Is Empty :", queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print();
console.log("It's Full :", queue.isFull());
console.log("Deleted : ", queue.dequeue());
console.log("It's Full :", queue.isFull());
console.log("First Element :", queue.peek());
queue.print();
