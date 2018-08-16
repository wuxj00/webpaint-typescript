import uuid from '@/utils/uuid';

export default abstract class Entity {

  private readonly id: string;
  private props?: Map<string, any>;

  constructor(option: any = {}) {
    const { id, attrs } = option;
    this.id = id || uuid();
    if (attrs instanceof Object) {
      Object.keys(attrs).forEach((key) => this.setAttr(key.toString(), attrs[key]));
    }
  }
  public getAttrs(): any {
    return this.props;
  }
  public getAttr(key: string): any {
    return this.props && this.props.get(key);
  }
  public setAttr(key: string, val: any) {
    const props = this.getAttrs();
    if (props === undefined ) {
      this.props = new Map();
      return this.props.set(key, val);
    } else if (props instanceof Map) {
      return props.set(key, val);
    }
  }
  public hasAttr(key: string) {
    const props = this.getAttrs();
    if (!props) {
      return false;
    }
    return props.has(key);
  }
  public toString() {
    return `[ ${this.constructor.name} ]`;
  }
}
