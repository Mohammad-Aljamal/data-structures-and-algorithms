"use strict"

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
            console.log(`vertex does not exist`)
            return;
        }
        else {
            const adjacencies = this.adjacencyList.get(start);
            let edge = new Edge(end, weight);
            adjacencies.push(edge);
        }
    }
    getvertices () {
        return this.adjacencyList.keys();
    }
    getneighbors (vertex) {
        return this.adjacencyList.get(vertex)
    }
    size () {
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


console.log("getvertices-->",mynewGraph.getvertices());

console.log("getneighbors-->",myGraph.getneighbors(zero))

console.log("size-->",myGraph.size());

console.log("breadthFirst-->", myGraph.breadthFirst(zero));

module.exports = Graph;