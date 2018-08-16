import { Node, Edge } from './entities/';
import zrender from 'zrender';

class GraphView {
  constructor(option: any) {
    // const node = new Node({});
    // node.render();
    const zr = zrender.init(document.getElementById('map') as HTMLDivElement);
    const circle = new zrender.Circle({
      shape: {
        cx: 150,
        cy: 50,
        r: 40,
      },
      style: {
        fill: 'none',
        stroke: '#F00',
      },
    });
    zr.add(circle);
  }
}

export {
  Node,
  Edge,
  GraphView,
};
