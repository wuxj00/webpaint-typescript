import render from 'zrender';

export default class Text {

  public static render(ctx: CanvasRenderingContext2D, shape: object, style: any = {}) {
    ctx.save();
    ctx.fillStyle = style.fill || 'rgb(255,0,0)';
    ctx.strokeStyle = style.stroke || 'rgb(255,0,0)';
    ctx.globalAlpha = style.opacity == null ? 1 : style.opacity;

    ctx.globalCompositeOperation = style.blend || 'source-over';

    ctx.lineWidth = 2;
    render.Circle.prototype.buildPath(ctx, shape);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }
}
