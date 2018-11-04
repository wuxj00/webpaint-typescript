import DisplayObject from './DisplayObject';
import { imageMgr } from '../utils/ImageLoader';
import { RectBox } from '../interface/common';
import zrender from 'zrender';
import { ZImageOption } from '../interface/Zrender';

export default class Icon extends DisplayObject {
  private src?: string;
  private align: string = 'center'; // center, orgin
  private img: any;
  constructor({x, y, height, width, style = {}, image, align = 'center', draggable = true, ...more}: any = {}) {
    super(more);
    let zImage;
    if (image instanceof HTMLImageElement) {
      zImage = image;
    } else if (typeof image === 'string') {
      zImage = imageMgr.get(image);
      if (!zImage) {
        throw new Error('在ImageMgr中未找到');
        return;
      }
      this.setImage({
        draggable,
        style: {
          x, y, image: zImage, width, height,
        },
      });
    }
  }

  public setImage(param: ZImageOption) {
    if (this.align === 'origin') {
      this.img = new zrender.Image(param);
    } else {
      const { x, y, width, height } = param.style;
      param.style = Object.assign({}, this.style, param.style, {
        x: x - width / 2,
        y: y - height / 2});
      this.img = new zrender.Image(param);
    }
  }
  public getEntity() {
    return this.img;
  }
  public getBoundingRect(): RectBox {
    return this.img.getBoundingRect();
  }
  public dispose() {
    // empty
  }
}
