import { Node, Edge, CompsMgr } from './entities/';
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

  constructor(option: GraphViewParam) {
    this.initLayers(option);
  }
  public getDataModel() {
    return dm;
  }
  public getMapLayer() {
    return this.mapLayer;
  }
  public getVectorLayer() {
    return this.vectorLayer;
  }
  public addEntities(enities: any[]) {
    enities.forEach((entity) => {
      if (entity instanceof DisplayObject) {
        dm.add(entity.getId(), entity);
      } else {
        const type = entity.type;
        const construcotr = CompsMgr.get(type);
        if (construcotr) {
          const inst = new construcotr(entity);
          dm.add(inst.getId(), inst);
        }
      }
    })
  }
  private initLayers(option: any) {
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
  }
}

export {
  Node,
  Edge,
  GraphView,
  uuid,
  ImageLoader,
};
