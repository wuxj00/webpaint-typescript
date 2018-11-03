import { Node, Edge } from './entities/';
import VectorTree from './collections/VectorTree';
import { ImageLoader } from './utils/ImageLoader';
import { dm } from './utils/DataModelHelper';
import zrender from 'zrender';
import uuid from './utils/uuid';

import pic1 from './assets/images/icon.jpg';
import pic2 from './assets/images/2.jpg';
import pic3 from './assets/images/3.jpg';
import pic4 from './assets/images/4.jpg';
import pic5 from './assets/images/5.jpg';
import pic6 from './assets/images/6.jpg';
import Painter from './mixin/Painter';

class GraphView {
  constructor(option: any) {

    const dataModel = new VectorTree();
    const id1: string = uuid();
    const id2: string = uuid();
    const elem = document.getElementById('map') as HTMLCanvasElement;
    const zr = zrender.init(elem);
    const ctx = elem.getContext('2d') as CanvasRenderingContext2D;
    const paniter = (obj: any, ctx: CanvasRenderingContext2D) => {
      zr.painter._doPaintEl(obj, {
        ctx,
      }, true, {});
    };
    ImageLoader([
      {id: id1, src: pic1 },
      {id: id2, src: pic2 },
      {id: uuid(), src: pic3 },
      {id: uuid(), src: pic4 },
      {id: uuid(), src: pic5 },
    ]).then((res) => {
      const node1 = new Node({
        x: 100,
        y: 100,
        width: 50,
        icon: id1,
        height: 50,
        label: 'hello world',
        style: {
          fontSize: 20,
        }});
      node1.render(paniter, ctx);

      const node2 = new Node({
        x: 200,
        y: 200,
        width: 50,
        icon: id2,
        height: 50,
        label: 'hello world',
        style: {
          fontSize: 20,
        }});
      node2.render(paniter, ctx);
      dm.add(node1.getId(), node1);
      dm.add(node2.getId(), node2);
      
      const edge = new Edge({
        source: node1.getId(),
        target: node2.getId(),
        style: {
          stroke: 'red',
          blend: 'destination-over',
        }
      })
      edge.render(paniter, ctx);
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
