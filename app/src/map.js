class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(value) {
        this.nodes.set(value, []);
    }

    addEdge(node1, node2, weight=1) {
        this.nodes.get(node1).push({ node: node2, weight });
        this.nodes.get(node2).push({ node: node1, weight });
    }

    dijkstra(startNode, endNode) {
        const distances = {};
        const previousNodes = {};
        const visited = new Set();
        const queue = [];

        // Initialize distances with infinity and starting node with 0
        for (const node of this.nodes.keys()) {
            distances[node] = Infinity;
            previousNodes[node] = null;
        }
        distances[startNode] = 0;

        // Start with the initial node
        queue.push({ node: startNode, distance: 0 });

        while (queue.length > 0) {
            queue.sort((a, b) => a.distance - b.distance);
            const { node, distance } = queue.shift();

            if (visited.has(node)) continue;

            visited.add(node);

            for (const neighbor of this.nodes.get(node)) {
                const newDistance = distance + neighbor.weight;

                if (newDistance < distances[neighbor.node]) {
                    distances[neighbor.node] = newDistance;
                    previousNodes[neighbor.node] = node;
                    queue.push({ node: neighbor.node, distance: newDistance });
                }
            }
        }

        // Build the path
        const path = [];
        let currentNode = endNode;
        while (currentNode !== null) {
            path.unshift(currentNode);
            currentNode = previousNodes[currentNode];
        }

        return { distance: distances[endNode], path };
    }
}

// Example usage:
const graph = new Graph();

graph.addNode("d1");

graph.addNode("s1")
graph.addNode("s2")

graph.addNode("111");
graph.addNode("112");
graph.addNode("113");
graph.addNode("114");
graph.addNode("115");
graph.addNode("116");
graph.addNode("117");

graph.addNode("123");
graph.addNode("124");
graph.addNode("125");
graph.addNode("126");
graph.addNode("127");

graph.addNode("h1");
graph.addNode("h2");
graph.addNode("h3");
graph.addNode("h4");
graph.addNode("h5");
graph.addNode("h6");
graph.addNode("h7");
graph.addNode("h8");
graph.addNode("h9");
graph.addNode("h10");
graph.addNode("h11");

graph.addEdge("d1", "h1", 1);
graph.addEdge("h1", "h2", 1);
graph.addEdge("h2", "h3", 1);
graph.addEdge("h3", "h4", 1);
graph.addEdge("h4", "h5", 1);
graph.addEdge("h5", "h6", 1);
graph.addEdge("h6", "h7", 1);
graph.addEdge("h7", "h8", 1);
graph.addEdge("h8", "h9");
graph.addEdge("h9", "h10", 1);
graph.addEdge("h10", "h11", 1);
graph.addEdge("h11", "s2", 1);

graph.addEdge("s1", "h2", 1);
graph.addEdge("111", "h3", 1);
graph.addEdge("112", "h4", 1);
graph.addEdge("113", "h5", 1);
graph.addEdge("114", "h5", 1);
graph.addEdge("115", "h6", 1);
graph.addEdge("116", "h6", 1);
graph.addEdge("117", "h7", 1);
graph.addEdge("124", "h9", 1);
graph.addEdge("123", "h9", 1);
graph.addEdge("126", "h10", 1);
graph.addEdge("125", "h10", 1);
graph.addEdge("127", "h11", 1);
graph.addEdge("h11", "s2", 1);

const { distance, path } = graph.dijkstra("125", "114");
console.log(`Shortest path distance: ${distance}`);
console.log(`Shortest path: ${path.join(" -> ")}`);

