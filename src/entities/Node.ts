import { DisplayObject, GeoPoint, Point, Icon, Label } from '../model/';
import { Image } from '../painter/';
import { Image as ZImage, Text } from 'zrender';

export default class Node extends DisplayObject {
  private icon?: Icon;
  private label?: Text;

  constructor({ icon, label, ...more }: any = {}) {
    super(more);

    if (icon) {
      this.icon = new Icon(icon);
    }
    if (label) {
      this.label = new Text(label);
    }
  }

  public getLabel(): Text | void {
    return this.label;
  }
  public setLabel(label: any) {
    if (label instanceof Object) {
      this.label = new Text(label);
    }
  }
  public getIcon(): Icon | void {
    return this.icon;
  }
  public setIcon(icon: any) {
    if (icon instanceof Icon || icon instanceof Object) {
      this.icon = new Icon(icon);
    }
  }

  public render() {
    const elem: HTMLCanvasElement = document.getElementById('map') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = elem.getContext('2d') as CanvasRenderingContext2D;
    Image.render(ctx, {
      cx: 200,
      cy: 200,
      r: 40,
    });
  }
  public dispose() {
    // empty
  }
}
