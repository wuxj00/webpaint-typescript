export default class ImageMgr {
  private store!: Map<string, any>;
  private inst: ImageMgr | null = null;

  constructor() {
    this.store = new Map();
  }

  public get(id: string) {
    return this.store.get(id);
  }

  public add(id: string, val: any) {
    this.store.set(id, val);
  }

  public clear() {
    this.store.clear();
  }

  public remove(id: string) {
    this.store.delete(id);
  }
}
