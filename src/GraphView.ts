import { Node, Edge } from './entities/';

const GraphView =  class {
  constructor(option: any) {
      const node = new Node({
        point: { x: 10, y: 10 },
      });
      console.log(node.getPoint());
  }
};

export {
  Node,
  Edge,
  GraphView,
};
