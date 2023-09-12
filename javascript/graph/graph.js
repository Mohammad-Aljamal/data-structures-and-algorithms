"use strict";

const Edge = require("./edge");
const Vertex = require("./vertex");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }
  addDirectedEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log(`vertex does not exist`);
      return;
    } else {
      const adjacencies = this.adjacencyList.get(start);
      let edge = new Edge(end, weight);
      adjacencies.push(edge);
    }
  }
  getvertices() {
    return this.adjacencyList.keys();
  }
  getneighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }
  size() {
    return this.adjacencyList.size;
  }

  breadthFirst(startNode) {
    if (!this.adjacencyList.has(startNode)) {
      console.log(`Start node does not exist`);
      return [];
    }

    const visited = new Map(); // To track visited nodes
    const result = []; // To store the visited nodes in order
    const queue = [startNode];

    visited.set(startNode, true); // Mark the startNode as visited

    while (queue.length > 0) {
      const currentNode = queue.shift(); // Dequeue the first node in the queue
      result.push(currentNode);

      const neighbors = this.adjacencyList.get(currentNode);

      for (const neighborEdge of neighbors) {
        const neighbor = neighborEdge.vertex;
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.set(neighbor, true);
        }
      }
    }
    return result;
  }
}

//////////////////////////////////////37 graph-business-trip////////////////////////////////////

function businessTrip(graph, cityNames) {
  let totalCost = 0;

  for (let i = 0; i < cityNames.length - 1; i++) {
    const startCity = cityNames[i];
    const endCity = cityNames[i + 1];

    const neighbors = graph.getneighbors(startCity);
    let directFlightExists = false;

    for (const neighborEdge of neighbors) {
      if (neighborEdge.vertex === endCity) {
        totalCost += neighborEdge.weight;
        directFlightExists = true;
        break;
      }
    }
    if (!directFlightExists) {
      return `The trip is not possible.`; 
    }
  }
  if (totalCost == null) {
    return `The trip is not possible.`;
  }
  return `The cost of the trip is ${totalCost}$`;
}

//////////////////////////////////////37 graph-business-trip////////////////////////////////////

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

const myGraph = new Graph();

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

myGraph.addDirectedEdge(zero, five);
myGraph.addDirectedEdge(zero, three);
myGraph.addDirectedEdge(three, one);
myGraph.addDirectedEdge(four, one);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(five, four);

const mynewGraph = new Graph();

console.log("getvertices-->", mynewGraph.getvertices());

console.log("getneighbors-->", myGraph.getneighbors(zero));

console.log("size-->", myGraph.size());

console.log("breadthFirst-->", myGraph.breadthFirst(zero));

console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");

const cityGraph = new Graph();

cityGraph.addVertex("A");
cityGraph.addVertex("B");
cityGraph.addVertex("C");
cityGraph.addVertex("D");

cityGraph.addDirectedEdge("A", "B", 100);
cityGraph.addDirectedEdge("B", "C", 200); 
cityGraph.addDirectedEdge("A", "D", 300); 
cityGraph.addDirectedEdge("C", "D", 300); 
cityGraph.addDirectedEdge("D", "A", 300); 

const tripCities1 = ["D", "F"];
console.log(businessTrip(cityGraph, tripCities1));

const tripCities2 = ["A", "C", "D"];
console.log(businessTrip(cityGraph, tripCities2));

const tripCities3 = ["A", "B", "C", "D", "A"];
console.log(businessTrip(cityGraph, tripCities3));

const tripCities4 = [];
console.log(businessTrip(cityGraph, tripCities4));



module.exports = {
    Graph: Graph,
    businessTrip: businessTrip
}
