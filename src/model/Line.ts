import DisplayObject from './DisplayObject';
import zrender from 'zrender';

export default class Label extends DisplayObject {
  protected zLine: any;
  constructor(option: any = {}) {
    const { text, x1, x2, y1, y2, ...more } = option;
    super(more);

    this.zLine = new zrender.Line({
      draggable: false,
      shape:  {
        x1,
        x2,
        y1,
        y2,
      },
      style: Object.assign({}, this.style),
    });
  }
  public getEntity() {
    return this.zLine;
  }
  public dispose() {
    // empty
  }
}
