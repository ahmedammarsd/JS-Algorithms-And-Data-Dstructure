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

  // O(1)
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

  // O(n)
  // Append: Insert a new node at the end of the linked List
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.size++;
    } else {
      // i fix it by get the size and insert to last
      let size = this.getSize();
      this.insert(value, size);

      // =======   i stoped it because problem in while lop when i write
      // prev.next to check it or stoped when == null and not working on in while loop =========
      // let prev = this.head;
      // let next = prev.next;

      // console.log("The prev:", prev.next);
      // // bug in prev.next , i didn't know for now
      // // it's loop when the prev.next == null it's will stop
      // while (next) {
      //   prev = this.next;
      // }
      // prev.next = node;
    }
    // I add to top because not icrease more - i used the insert function and it have increase of size inside it
    //this.size++;
  }

  // Insert
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index == 0) {
      // Add To Head
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  // Remove by index
  // O(n)
  remove(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    let removedNode;
    if (index == 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      // === My long soluation ==
      // let accNode = prev;
      // accNode = accNode.next;
      // accNode = accNode.next;
      // prev.next = accNode;
      // Another shor soluation
      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this.size--;
    return removedNode;
  }

  // Remove Value
  // O(n)
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;

      // {  My Long Soluation
      //   for (let i = 0; i < this.size - 1; i++) {
      //     // console.log("start loop remove value ===", i);
      //     // console.log(prev.next.value, " ======== ", value);
      //     if (prev.next?.value === value) {
      //       break;
      //     }
      //     prev = prev.next;
      //   }
      //   let removedNode = prev.next;
      //   if (removedNode === null) {
      //     console.log("=== The Number not Found To Delete ===");
      //     return;
      //   }
      //   prev.next = removedNode?.next;
      // }

      // it loop working into find value or prev.next = null it will stop
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
    }
  }

  // Search
  search(value) {
    if (this.size === 0) {
      return -1;
    }
    let curr = this.head;

    // 3== Third Solution == the instructor solution ==
    // let i = 0
    // while(curr) {
    //   if (curr.value === value){
    //     return i;
    //   }
    //   curr = curr.next
    //   i++
    // }

    //1== first solution if found return The Node ==
    // i can use a (let i) like a counter to trace the index number === - i added in Sol 3
    // while (curr && curr.value !== value) {
    //   curr = curr.next;
    // }
    // if (curr) {
    //   return curr;
    // } else {
    //   return -1;
    // }

    //2=== Second solution if founded return the index and also Node ==
    for (let i = 0; i <= this.size - 1; i++) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      console.log("The curr", curr);
      let next = curr.next; // 2
      console.log("The curr next", next);
      curr.next = prev; // 1
      console.log("The curr next2", curr.next, " = ", prev);
      prev = curr;
      console.log(prev, " = ", curr);
      curr = next;
      console.log(curr, " = ", next);
      console.log("=====================================================");
      console.log("=====================================================");
    }
    this.head = prev;
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

list.prepend(10);
list.prepend(20);
list.insert(15, 1);
list.insert(16, 2);
list.insert(17, 4);
list.insert(1, 0);
list.append(30);
list.append(35);
//console.log(list.remove(0));
list.removeValue(30);
console.log("Search Value : ", list.search(30));
list.print();
console.log("reverse down ==");
list.reverse();
list.print();
console.log(list.isEmpty());
console.log(list.getSize());

// ================== 13- link List Class ============
