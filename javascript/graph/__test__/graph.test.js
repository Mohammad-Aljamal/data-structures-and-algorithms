"use strict";
const Edge = require("../edge");
const Vertex = require("../vertex");
const {Graph} = require("../graph");
const {businessTrip} = require("../graph");


describe("graph", () => {
  test("create a graph and get the vertex", async () => {
    // const zero = new Vertex(0);
    // const one = new Vertex(1);

    // let newGraph = await new Graph();
    // newGraph.addVertex(zero);
    // newGraph.addVertex(one);

    // newGraph.addDirectedEdge(zero, one);
    // let result = newGraph.getvertices();
    // expect(result)
    //   .toEqual(
    //   "{Vertex { value: 0 },Vertex { value: 1 },Vertex { value: 2 },Vertex { value: 3 },Vertex { value: 4 },Vertex { value: 5 }}"
    //   );
  });

  test("the neighbors of the graph ", async () => {
    const zero = new Vertex(0);
    const one = new Vertex(1);

    let newGraph = await new Graph();
    newGraph.addVertex(zero);
    newGraph.addVertex(one);

    newGraph.addDirectedEdge(zero, one);
    let result = newGraph.getvertices();
    expect(newGraph.getneighbors(zero)).toEqual([{"vertex": {"value": 1}, "weight": 0}]);
  });

  test("the size of the graph ", async () => {
    const zero = new Vertex(0);
    const one = new Vertex(1);

    let newGraph = await new Graph();
    newGraph.addVertex(zero);
    newGraph.addVertex(one);

    newGraph.addDirectedEdge(zero, one);
    expect(newGraph.size()).toEqual(2);
  });

  test("breadthFirst", async () => {
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);

    let newGraph = await new Graph();
    newGraph.addVertex(zero);
    newGraph.addVertex(one);
    newGraph.addVertex(two);
    newGraph.addVertex(three);

    newGraph.addDirectedEdge(zero, one);
    newGraph.addDirectedEdge(one, two);
    newGraph.addDirectedEdge(one, three);
    newGraph.addDirectedEdge(two, three);

    let result = newGraph.breadthFirst(zero);
    expect(result).toEqual([{"value": 0}, {"value": 1}, {"value": 2}, {"value": 3}]);
  });
});



describe("graph-business-trip", () => {
  test("if there is no citys ", async () => {
    const cityGraph = new Graph();
    expect(businessTrip(cityGraph, [])).toEqual("The cost of the trip is 0$");

  })
  
  test("if there is no direct trip between two citys", async () => {
    const cityGraph = new Graph();

    cityGraph.addVertex("A");
    cityGraph.addVertex("B");
    cityGraph.addVertex("C");
    cityGraph.addDirectedEdge("A", "B", 100);
    cityGraph.addDirectedEdge("B", "C", 200); 
    
    expect(businessTrip(cityGraph, ['A','C'])).toEqual('The trip is not possible.');
  });

  test("if there is direct trips between all citys", async () => {
    const cityGraph = new Graph();

    cityGraph.addVertex("A");
    cityGraph.addVertex("B");
    cityGraph.addVertex("C");
    cityGraph.addVertex("D");
    cityGraph.addDirectedEdge("A", "B", 100);
    cityGraph.addDirectedEdge("B", "C", 150); 
    cityGraph.addDirectedEdge("C", "D", 300); 
    cityGraph.addDirectedEdge("D", "A", 50); 

    expect(businessTrip(cityGraph, ['A', 'B','C', 'D', 'A'])).toEqual("The cost of the trip is 600$");
  });

})
