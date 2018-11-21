import { Node, Edge } from './entities/';
import VectorTree from './collections/VectorTree';
import { ImageLoader } from './utils/ImageLoader';
import { dm, vt } from './utils/DataModelHelper';
import zrender from 'zrender';
import uuid from './utils/uuid';
import { GraphViewParam } from './interface/common';
import { MapLayer, VecterLayer } from './layers/';
import { DisplayObject } from './model';
import { createElement } from './utils/dom';

class GraphView {
  public mapLayer!: MapLayer;
  public vectorLayer!: VecterLayer;

  private painter!: (obj: any, ctx: CanvasRenderingContext2D) => void;


  constructor(option: GraphViewParam) {
    const { target = 'map', map = false } = option;
    let renderTarget: HTMLElement;
    if (target instanceof HTMLElement) {
      renderTarget = target;
    } else {
      renderTarget = document.getElementById(target) as HTMLElement;
    }
    if (map === true) {
      const mapLayer = new MapLayer({
        target,
      });
      this.mapLayer = mapLayer;
      renderTarget = mapLayer.getView();
    }
    this.vectorLayer = new VecterLayer({
      target: renderTarget,
    });
    // this.initPainter(target);
  }
  public getPainter() {
    return this.painter;
  }

  public getDataModel() {
    return dm;
  }

  private initPainter(target: string) {
    const elem = document.getElementById(target) as HTMLElement;
    const bbox = elem.getBoundingClientRect();
    const canvas: HTMLCanvasElement = createElement('CANVAS') as HTMLCanvasElement;
    canvas.height = bbox.height;
    canvas.width = bbox.width;

    elem.appendChild(canvas);

    const zr = zrender.init(canvas);
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    this.painter = (obj: any) => {
      zr.painter._doPaintEl(obj, {
        ctx,
      }, true, {});
    };
  }

}

export {
  Node,
  Edge,
  GraphView,
  uuid,
  ImageLoader,
};
