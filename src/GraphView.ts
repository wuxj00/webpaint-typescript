import { Node, Edge } from './entities/';
import VectorTree from './collections/VectorTree';
import { ImageLoader } from './utils/ImageLoader';
import { dm, vt } from './utils/DataModelHelper';
import zrender from 'zrender';
import uuid from './utils/uuid';

import pic1 from './assets/images/icon.jpg';
import pic2 from './assets/images/2.jpg';
import { DisplayObject } from './model';

class GraphView {
  constructor(option: any) {

    const elem = document.getElementById('map') as HTMLCanvasElement;
    const zr = zrender.init(elem);
    const ctx = elem.getContext('2d') as CanvasRenderingContext2D;

    elem.addEventListener('mousedown', (e: MouseEvent) => {
      const { offsetX, offsetY } = e;
      console.log(vt.getLeftTopList({
        x: offsetX,
        y: offsetY
      }));
    });

    elem.addEventListener('mouseup', (e: MouseEvent) => {

    });
    

    const paniter = (obj: any, ctx: CanvasRenderingContext2D) => {
      zr.painter._doPaintEl(obj, {
        ctx,
      }, true, {});
    };

    const id1: string = uuid();
    const id2: string = uuid();
    ImageLoader([
      {id: id1, src: pic1 },
      {id: id2, src: pic2 },
    ]).then((res) => {
      const node1 = new Node({
        id: 'node1',
        x: 100,
        y: 100,
        width: 50,
        icon: id1,
        height: 50,
        label: 'node1',
        style: {
          fontSize: 20,
      }});

      const node2 = new Node({
        id: 'node2',
        x: 200,
        y: 200,
        width: 50,
        icon: id2,
        height: 50,
        label: 'node2',
        style: {
          fontSize: 20,
        }});
      const node3 = new Node({
        id: 'node3',
        x: 101,
        y: 300,
        width: 50,
        icon: id1,
        height: 50,
        label: 'node3',
        style: {
          fontSize: 20,
        }});
      dm.add(node1.getId(), node1);
      dm.add(node2.getId(), node2);
      dm.add(node3.getId(), node3);
      const edge = new Edge({
        id: 'edge1',
        source: node1.getId(),
        target: node2.getId(),
        style: {
          stroke: 'red',
          blend: 'destination-over',
        }
      });
      dm.add(edge.getId(), edge);
      vt.forEach((data: any) => {
        data.render(paniter, ctx);
      });
      console.log(vt)
    });

    

    
    const circle = new zrender.Circle({
      shape: {
        cx: 100,
        cy: 100,
        r: 40,
      },
      style: {
        fill: 'none',
        stroke: '#F00',
      },
    });


    paniter(circle, ctx);   
  }
}

export {
  Node,
  Edge,
  GraphView,
};
