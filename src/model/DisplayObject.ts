import Entity from './Entity';

export default abstract class DisplayObject extends Entity {

  private styles?: Map<string, any>;

  constructor(option: any = {}) {
    super(option);

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
  public abstract render(point: any, style: any): void;
  public abstract dispose(): void;
}
