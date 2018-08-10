import Layer from './Layer';

export default class VecterLayer extends Layer {

  constructor(option: any = {}) {
    const mixOpt = {...option, name: 'vector' };
    super(mixOpt);
  }
  public render(): void {
    // empty
  }

}
