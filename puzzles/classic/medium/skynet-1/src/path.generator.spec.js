const expect = require('chai').expect;

class Network {
  constructor(nodes) {
    this.nodes = nodes;
  }
}

class Node {
  constructor(id, type, links) {
    this.id = id;
    this.links = links;
    this.type = type;
  }
}

class PathGenerator {
  constructor(network) {
    this.network = network;
  }

  generate(nodeId) {
    const path = [];
    const currentNode = this.network.nodes[nodeId];
    path.push(currentNode);
    return path;
  }
}

describe('PathGenerator', () => {
  let generator;
  beforeEach(() => {
    const network = new Network([
      new Node(0, 'NODE', [ 1 ] ),
      new Node(1, 'NODE', [ 0, 2 ]),
      new Node(2, 'GATEWAY', [ 1 ])
    ]);
    generator = new PathGenerator(network);
  });
  describe('#generate()', () => {
    it('all nodes path', () => {
      expect(generator.generate(0)).to.be.deep.equal([
        new Node(0, 'NODE', [ 1 ] ),
        new Node(1, 'NODE', [ 0, 2 ]),
        new Node(2, 'GATEWAY', [ 1 ])
      ]);
    });
  });
});