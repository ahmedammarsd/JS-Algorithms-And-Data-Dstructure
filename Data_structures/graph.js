/*

   - A graph is a non-linear data structure that consists of a finite number of vertices ( also called nodes) 
     connected by edges.
  
   - Trees are a specific type of graph data structure.
   
   Types Of Graph
    1- Directed 
       # A graph in which the edges have a direction
       # Edges are usually represented by arrows pointing in the direction the graph can be traversed
    2- Undirected
       # A graph in which the edges are bidirectional.
       # The graph can be traversed in either direction.
       # The absence of an arrow tells us that the graph is undirected
    
    3- only vertices with no edges
    3- multiple edges from on node
    4- cycles in the graph
    5- self loops on a node
    6- disconnected

   Graph Usage
     1- Google maps 
     2- social media sites


   ========================================
   
   Graph Representation
    1- Adjacency matrix
       # An adjacency matrix is a 2D array of size V x V where V is the number of vertices in the graph.
       # Each row and column represent a vertex .
       # if the value of any element say, matrix[i][i] is 1, it represents that there is an edge connecting vertex i and vertex j. 
    2- Adjacency list

   Adjacency Matrix vs Adjacency List
     # With an adjacency list, we only need to store the values for the edges that exist.
       With an adjacency matrix, you store values irrespective of whether an edge exists or not. 
       Storage wise, an adjacency list is way more efficient
     
    # With adjacency lis, inseting and finding adjacent nodes is constant time complexity whereas with adjacency matrix, it is linear time complexity.
    
    # An adjacency list allows you to store additional values with an edge such as 
      weight of the edge.
      With Adjacency matrix, such information would have to be stored externally 
*/

const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }

    // Romove from another edgs
    for (let adjacencyVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacencyVertex);
    }
    // Romove From main object
    delete this.adjacencyList[vertex];
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }

  hasEdge(vertex1, vertex2) {
    // let check1 = this.adjacencyList[vertex1].has(vertex2);
    // let check2 = this.adjacencyList[vertex2].has(vertex1);
    // if (check1 && check2) {
    //   return true;
    // }
    // return false;

    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].delete(vertex2);
      this.adjacencyList[vertex2].delete(vertex1);
      return;
    }
    console.log("Not Found the Vertex");
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.display();
console.log(graph.hasEdge("A", "C"));
graph.removeEdge("A", "f");
graph.removeVertex("C");
graph.display();
