import Entity from './Entity';
import { RectBox } from '../interface/common';

export default abstract class DisplayObject extends Entity {

  private styles?: Map<string, any>;

  private width: number = 0;
  private height: number = 0;
  private x: number = 0;
  private y: number = 0;

  constructor({ x, y, width, height, ...more}: any = {}) {
    super(more);
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  public getRectBox(): RectBox {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  }
  public getStyles(): any {
    return this.styles;
  }
  public setStyle(name: string, style: any) {
    const styles = this.getStyles();
    if (styles as undefined) {
      this.styles = new Map();
      return this.styles.set(name, style);
    } else if (styles as Map<string, any>) {
      return styles.set(name, style);
    }
  }

  public getStyle(name: string) {
    return this.styles && this.styles.get(name);
  }
  public abstract dispose(): void;
}
