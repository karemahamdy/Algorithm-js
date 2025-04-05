class Graph {
  constructor(names) {
    this.Vertices = [];
    names.forEach(name => {
      this.Vertices.push(new Vertex(name));
    });
  }

  addEdges(vertexIndex, targets, weights = []) {
    this.Vertices[vertexIndex].VertexLinks = targets.map((target, i) => {
      return new Edge(this.Vertices[vertexIndex], this.Vertices[target], weights[i] || 0);
    });
  }

  dijkstra() {
    console.log("Dijkstra From Graph Class;");
    this.Vertices.forEach(v => v.TotalLength = Number.MAX_VALUE);
    let currentVertex;
    for (let i = 0; i < this.Vertices.length; i++) {
      currentVertex = this.Vertices[i];
      let destinations = currentVertex.VertexLinks;
      if (!destinations) continue;

      destinations.forEach(currentEdge => {
        let newLength = currentVertex.TotalLength + currentEdge.Weight;
        if (newLength < currentEdge.Target.TotalLength) {
          currentEdge.Target.TotalLength = newLength;
          currentEdge.Target.SourceOfTotalLength = currentVertex;
        }
      });
    }

    let path = this.Vertices[this.Vertices.length - 1].Name;
    let v = this.Vertices[this.Vertices.length - 1];
    while (v.SourceOfTotalLength) {
      path = v.SourceOfTotalLength.Name + " - " + path;
      v = v.SourceOfTotalLength;
    }
    console.log(this.Vertices[this.Vertices.length - 1].TotalLength);
    console.log(path);

    this.restoreVertices();
  }

  bfs() {
    console.log("BFS From Graph Class;");
    let q = [];
    q.push(this.Vertices[0]);
    this.Vertices[0].Visited = true;

    while (q.length > 0) {
      let currentVertex = q.shift();
      let destinations = currentVertex.VertexLinks;
      destinations.forEach(destination => {
        if (!destination.Target.Visited) {
          q.push(destination.Target);
          destination.Target.Visited = true;
          console.log(currentVertex.Name + " - " + destination.Target.Name);
        }
      });
    }

    this.restoreVertices();
  }

  dfs() {
    console.log("DFS From Graph Class;");
    this.dfsRecursion(this.Vertices[0]);
    this.restoreVertices();
  }

  dfsRecursion(currentVertex) {
    currentVertex.Visited = true;
    let destinations = currentVertex.VertexLinks;
    destinations.forEach(destination => {
      if (!destination.Target.Visited) {
        console.log(currentVertex.Name + " - " + destination.Target.Name);
        this.dfsRecursion(destination.Target);
      }
    });
  }

  restoreVertices() {
    this.Vertices.forEach(v => {
      v.Visited = false;
      v.TotalLength = 0;
      v.SourceOfTotalLength = null;
    });
  }
}

class Vertex {
  constructor(name) {
    this.Name = name;
    this.Visited = false;
    this.TotalLength = 0;
    this.SourceOfTotalLength = null;
    this.VertexLinks = [];
  }
}

class Edge {
  constructor(source, target, weight = 0) {
    this.Source = source;
    this.Target = target;
    this.Weight = weight;
  }
}

// Example usage
const g = new Graph(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);

g.addEdges(0, [1, 2, 3], [2, 4, 3]);
g.addEdges(1, [4, 5, 6], [7, 4, 6]);
g.addEdges(2, [4, 5, 6], [3, 2, 4]);
g.addEdges(3, [4, 5, 6], [4, 1, 5]);
g.addEdges(4, [7, 8], [1, 4]);
g.addEdges(5, [7, 8], [6, 3]);
g.addEdges(6, [7, 8], [3, 3]);
g.addEdges(7, [9], [3]);
g.addEdges(8, [9], [4]);

g.dijkstra();
