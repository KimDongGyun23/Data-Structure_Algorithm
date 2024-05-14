class Graph {
  constructor() {
    //기본 생성자
    this.nodes = {};
  }

  addNode(node) {
    //노드 추가
    this.nodes[node] = this.nodes[node] || [];
  }

  contains(node) {
    //그래프에 해당 노드가 존재하는지 여부
    let result = null;
    this.nodes[node] ? (result = true) : (result = false);
    return result;
  }

  removeNode(node) {
    //노드 삭제
    this.nodes[node] ? delete this.nodes[node] : this.nodes[node];
  }

  hasEdge(fromNode, toNode) {
    //두 노드 사이 간선의 존재 여부
    let result = null;
    this.nodes[fromNode] &&
    this.nodes[toNode] &&
    this.nodes[fromNode].includes(toNode) &&
    this.nodes[toNode].includes(fromNode)
      ? (result = true)
      : (result = false);
    return result;
  }

  addEdge(fromNode, toNode) {
    //두 노드 사이에 간선 추가
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }

  removeEdge(fromNode, toNode) {
    //두 노드 사이 간선을 삭제
    let node = this.nodes[fromNode];
    if (
      this.nodes[fromNode].includes(toNode) &&
      this.nodes[toNode].includes(fromNode)
    ) {
      this.nodes[fromNode].splice(node.indexOf(toNode), 1);
      this.nodes[toNode].splice(node.indexOf(fromNode), 1);
    }
  }
}

const graph = new Graph();
graph.addNode(100);
graph.addNode(1);
graph.addNode(10);
graph.addEdge(1, 100);
graph.addEdge(1, 10);
console.log(graph);
graph.removeEdge(1, 100);
console.log(graph);
