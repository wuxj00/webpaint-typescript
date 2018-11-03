const store = new Map();

export function get(id: string) {
  return store.get(id);
}

export function add(id: string, data: any) {
  return store.set(id, data);
}
