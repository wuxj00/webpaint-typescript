import DisplayObject from './DisplayObject';

export default class Icon extends DisplayObject {
  private src: string;

  constructor({ src, ...more }: any = {}) {
    super(more);
    this.src = src || '';
  }
  public getPath(): string {
    return this.src;
  }
  public setPath(src: string) {
    this.src = src;
  }
  public dispose() {
    // empty
  }
}
