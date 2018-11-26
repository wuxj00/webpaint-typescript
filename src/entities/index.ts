import Node from './Node';
import Edge from './Edge';
import GeoNode from './GeoNode';

const CompsMgr: Map<string, any> = new Map();
CompsMgr.set(Node.type, Node);
CompsMgr.set(Edge.type, Edge);
CompsMgr.set(GeoNode.type, GeoNode);

export {
  GeoNode,
  Node,
  Edge,
  CompsMgr,
};


