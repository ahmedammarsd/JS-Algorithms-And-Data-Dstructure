/*
  Tree
   - A tree is a hierarchical data structure that consists of nodes connected by edges.
   - A tree is a non-linear data structure, compared to arrays , linked lists , stacks and queues which are linear data structures.

   - Trees however, owing to the nonlinear nature allow quicker and easier access to the data.
   - A tree not contain any loops or cycles

  Tree Usage 
   # File systems for directory
   # A family tree 
   # An organisation tree
   # DOM
   # Chat bots
   # Abstract syntax trees 


   ========================= Binary Search Tree Overview ==========
  Binary Tree 
   - A binary tree is a tree data structure in which each node has at most two children.
   - They are referred to as left child and right child

  Binary Search Tree - BST  
   - The value of each left node must be  smaller than the parent node
   - The value of each right node must be greater than the parent node
   - Each node has at most two children

  Binary Search Tree Operations
   - Insertion - To add a node to the tree
   - Search - To find a node given its value
   - DFS & BFS - To visit all nodes in the tree 
   - Deletion - To remove a node given its value
  
  Binary Search Tree Usage 
   # Searching
   # Sorting 
   # To implement abstract data types such as lookup tables and priority queues 


   =======================
   Tree Traversal
    - Visithing every node in the tree
    - A hierarchical data structure like a tree can be traversed in different ways
      
    # Depth First Search (DFS)
        - The DFS algorithm start at the root node and explores as far as possible along 
           each branch befor backtracking.
        - Visit the root node , visit all the nodes in the left subtree and visit all the nodes in the right subtree.
        - Depending on the order in which we do this, there can be three types of DFS traversals.
            # Preorder -
               1- Read the data of the node
               2- Visit the left subtree
               3- Visit the right subtree
            # Inorder
               1- Visit The left subtree
               2- Read the data of node
               3- Visit the right subtree
            # Postorder
               1- Visit The left subtree
               2- Visit the right subtree
               3- Read the data of node
               
      # Breadth First Search (BFS)
        - Explore all nodes at the present depth prior to moving on the nodes at the next depth level
       - BFS Traversal Approach :
          1- Create a queue 
          2- Enqueue the root node
          3- As long as a node exists in the queue
             1- Dequeue the node from the front 
             2- Read the node's value
             3- Enqueue the node's left child if it exists
             4- Enqueue the node's right child if it exists

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    // else if (root == null) {
    //   return false;
    // }
    else {
      if (root?.value == value) return true;
      //else if (root?.left == null && root?.right == null) return false;
      else if (value < root?.value) return this.search(root?.left, value);
      else return this.search(root?.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      //   console.log(
      //     "Left :",
      //     root.left?.value || "NONE",
      //     " || ",
      //     "Right :",
      //     root.right?.value || "NONE"
      //   );
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
      //console.log(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.inOrder(root.left);
      this.inOrder(root.right);
      console.log(root.value);
      //console.log(root.right);
    }
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
console.log("Test Tree - Is Empty ? ", bst.isEmpty());
bst.insert(10);
bst.insert(50);
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(80);
console.log("Check The Value in Tree :", bst.search(bst.root, 10));
console.log("Check The Value in Tree :", bst.search(bst.root, 50));
console.log("Check The Value in Tree :", bst.search(bst.root, 30000));
bst.levelOrder();
console.log("The Minimum :", bst.min(bst.root));
console.log("The Maximum :", bst.max(bst.root));
bst.delete(50);
bst.levelOrder();
