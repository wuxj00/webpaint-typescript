import zrender from 'zrender';

export default class Painter {

  private zr: any = null;

  public initZrender(target: string) {
    if (this.zr === null) {
      const zr = zrender.init(document.getElementById(target) as HTMLDivElement);
      this.zr = zr;
    }
    return this.getZrender();
  }
  public getPainter(): any {
    const zr = this.getZrender();
    if (zr === null) {
      throw new Error('zrender未初始化');
    }
    return zr.painter;
  }

  public getZrender() {
    return this.zr;
  }

}
