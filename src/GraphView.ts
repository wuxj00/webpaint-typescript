import { Node, Edge } from './entities/';

const GraphView =  class {
  constructor(option: any) {
      const node = new Node({
        point: { x: 10, y: 10 },
      });
      node.setLabel({
        text: '3223',
      });
      console.log(node);
  }
};

export {
  Node,
  Edge,
  GraphView,
};
