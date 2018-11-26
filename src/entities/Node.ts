import { DisplayObject, GeoPoint, Icon, Label } from '../model/';
import { mergeRect } from '../utils/common';
import { RectBox, Point } from '../interface/common';

export default class Node extends DisplayObject {
  public static readonly type: string = 'node';
  private icon_: string;
  private label_: string;
  private icon?: Icon;
  private label?: Label;

  constructor({ icon, label, ...more }: any = {}) {
    super(more);
    this.icon_ = icon;
    this.label_ = label;
    this.initEntities();
  }
  public initEntities() {
    if (this.icon_) {
      this.icon = new Icon({
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        image: this.icon_,
        style: this.style,
      });
    }
    if (this.label_) {
      this.label = new Label({
        x: this.x,
        y: this.y + this.height / 2,
        text: this.label_,
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

  public setPosition(point: Point) {
    this.x = point.x;
    this.y = point.y;
    this.initEntities();
  }

  public getBoundingRect(): RectBox {
    const rect = mergeRect(this.icon, this.label);
    return rect;
  }

  public render(painter: any) {
    if (this.icon_) {
      painter((this.icon as Icon).getEntity());
    }
    if (this.label_) {
      painter((this.label as Label).getEntity());
    }
  }
  public dispose() {
    // empty
  }
}
