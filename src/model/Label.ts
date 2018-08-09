import DisplayObject from './DisplayObject';

export default class Label extends DisplayObject {

  public text: string;
  constructor(option: any = {}) {
    const { text, ...others } = option;
    super(others);

    this.text = text || '';
  }
  public render(point: any, style: any) {
    // empty
  }
  public dispose() {
    // empty
  }
}
