import VectorTree from '../collections/VectorTree';

const store = new Map();
const treeStore = new VectorTree();

export function get(id: string) {
  return store.get(id);
}

export function add(id: string, data: any) {
  treeStore.add(data);
  return store.set(id, data);
}

export function getVectorTree() {
  return treeStore;
}
