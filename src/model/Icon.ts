import DisplayObject from './DisplayObject';

export default class Icon extends DisplayObject {
  private src: string;

  constructor(option: any = {}) {
    const { src, ...others } = option;
    super(others);
    this.src = src || '';
  }
  public getPath(): string {
    return this.src;
  }
  public setPath(src: string) {
    this.src = src;
  }
  public render(point: any, style: any) {
    // empty
  }
  public dispose() {
    // empty
  }
}
