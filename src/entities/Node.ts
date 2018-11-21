import { DisplayObject, GeoPoint, Icon, Label } from '../model/';
import { mergeRect } from '../utils/common';
import { RectBox, Point } from '../interface/common';

export default class Node extends DisplayObject {
  private icon?: Icon;
  private label?: Label;

  constructor({ icon, label, ...more }: any = {}) {
    super(more);

    if (icon) {
      this.icon = new Icon({
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        image: icon,
        style: this.style,
      });
    }
    if (label) {
      this.label = new Label({
        x: this.x,
        y: this.y + this.height / 2,
        text: label,
        style: this.style,
      });
    }
  }

  public getLabel(): Label | void {
    return this.label;
  }
  public setLabel(label: any) {
    if (label instanceof Object) {
      this.label = new Label(label);
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

  public getPosition(): Point {
    return {
      x: this.x,
      y: this.y,
    };
  }

  public getBoundingRect(): RectBox {
    const rect = mergeRect(this.icon, this.label);
    return rect;
  }

  public render(painter: any) {
    this.icon && painter(this.icon.getEntity());
    this.label && painter(this.label.getEntity());
  }
  public dispose() {
    // empty
  }
}
