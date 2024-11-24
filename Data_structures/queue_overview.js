/*

  - The queue data structure is a sequential collection of elements that 
    follows the principle of First In First Out (FIFO)

  - The first element inserted into the queue is first element to be removed  


   == Support two main operations
    # Enqueue, which adds an element to the rear/tail of the collection.
    # Dequeue, which removes an element from the front/head of the collection.

    # peek, get the value of the element at the front of the queue wihout removing it
    # isEmpty, chick if the queue is empty
    # size, get number of elements in the queue
    # print, visualize the elements in the queue

   
   == Queue Usage
    # Printers 
    # CPU task scheduling 
    # Callback queue in JavaScript runtime

*/

// Queue Implementation

class Queue {
  constructor() {
    this.item = [];
  }

  enqueue(element) {
    this.item.push(element);
  }

  dequeue() {
    return this.item.shift();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.item[0];
    }
    return null;
  }

  isEmpty() {
    return this.item.length === 0;
  }

  size() {
    return this.item.length;
  }

  print() {
    console.log(this.item.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(40);
queue.enqueue(20);
console.log("== added items ===");
queue.print();
console.log("The Size is :", queue.size());
console.log("== remove item ===");
queue.dequeue();
queue.print();
console.log("The Size is :", queue.size());
console.log("=============");
console.log("First Item is :", queue.peek());
