import DisplayObject from './DisplayObject';
import zrender from 'zrender';

export default class Label extends DisplayObject {
  protected zText: any;
  constructor(option: any = {}) {
    const { text, x, y, ...more } = option;
    super(more);

    this.zText = new zrender.Text({
      draggable: false,
      style: Object.assign({}, this.style, {
        x,
        y,
        text,
      }),
    });
  }
  public getEntity() {
    return this.zText;
  }
  public dispose() {
    // empty
  }
}
