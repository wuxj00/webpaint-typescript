import zrender from 'zrender';

export default class Image {

  public static render(ctx: CanvasRenderingContext2D, shape: object, style: any = {}) {
    ctx.save();
    ctx.fillStyle = style.fill || 'rgb(255,0,0)';
    ctx.strokeStyle = style.stroke || 'rgb(255,0,0)';
    ctx.globalAlpha = style.opacity == null ? 1 : style.opacity;

    ctx.globalCompositeOperation = style.blend || 'source-over';
    console.log(zrender);
    ctx.lineWidth = 2;
    zrender.Circle.prototype.buildPath(ctx, shape);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }
}
