import DisplayObject from './DisplayObject';
import { RectBox } from '../interface/common';
import zrender from 'zrender';

export default class Label extends DisplayObject {
  protected zText: any;
  private text!: string;
  constructor(option: any = {}) {
    const { text, x, y, ...more } = option;
    super(more);

    this.text = text;
    this.zText = new zrender.Text({
      draggable: false,
      style: Object.assign({}, this.style, {
        x,
        y,
        text,
      }),
    });
  }

  public getBoundingRect(): RectBox {
    return this.zText.getBoundingRect();
  }
  public getEntity() {
    return this.zText;
  }
  public dispose() {
    // empty
  }
}
