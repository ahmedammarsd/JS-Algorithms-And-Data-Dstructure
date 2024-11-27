// ================== 12- link List Overview ============

/*
- A linked list is a liner data structure that includes a series of connected nodes 
Each node consists of a data value and  a pointer that points to the next node

- The list elements can be easily inserted or removed without reallocation or
reorganization of the entire structure.

- Random access of elements is not feasible and accessing an element has linear time complexity.

Three main operations:
# Insertion
# Deletion
# Search

Linked List Usage:
All applications of both stacks and queues are applications of liked lists 
Image viewer

*/
// ================== 12- link List Overview ============

// ================== 13- link List Class ============

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Prepend: Insert a new node at the beginning of the linked list
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Append: Insert a new node at the end of the linked List
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;

      console.log("The prev:", prev.next);
      // it's loop when the prev.next == null it's will stop
      while (prev.next !== null) {
        prev = this.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());

list.append(40);
list.append(5);
list.append(7);
list.append(50);
list.prepend(10);
list.prepend(20);
list.prepend(30);

list.print();
console.log(list.isEmpty());
console.log(list.getSize());

// ================== 13- link List Class ============
