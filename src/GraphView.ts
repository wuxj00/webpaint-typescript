import { Node, Edge } from './entities/';
import VectorTree from './collections/VectorTree';
import { ImageLoader } from './utils/ImageLoader';
import uuid from './utils/uuid';

import zrender from 'zrender';

import pic1 from './assets/images/1.jpg';
import pic2 from './assets/images/2.jpg';
import pic3 from './assets/images/3.jpg';
import pic4 from './assets/images/4.jpg';
import pic5 from './assets/images/5.jpg';
import pic6 from './assets/images/6.jpg';

class GraphView {
  constructor(option: any) {

    const dataModel = new VectorTree();
    ImageLoader([
      {id: uuid(), src: pic1 },
      {id: uuid(), src: pic2 },
      {id: uuid(), src: pic3 },
      {id: uuid(), src: pic4 },
      {id: uuid(), src: pic5 },
    ]).then((res) => {
      console.log(res);
    });

    const node1 = new Node({x: 1, y: 2, width: 2, height: 4});
    const node2 = new Node({x: 2, y: 3, width: 3, height: 4});

    const zr = zrender.init(document.getElementById('map') as HTMLDivElement);
    const img = new Image();
    img.src = pic6;
    const circle = new zrender.Circle({
      shape: {
        cx: 150,
        cy: 50,
        r: 40,
      },
      style: {
        fill: 'none',
        stroke: '#F00',
      },
    });

    const image = new zrender.Image({
      draggable: true,
      style: {
        x: 300,
        y: 300,
        width: 150,
        height: 150,
        image: img,
      },
    });

    const elem = document.getElementById('map') as HTMLCanvasElement;
    const ctx = elem.getContext('2d');
    const paniter = zr.painter;

    paniter._doPaintEl(circle, {
      ctx,
    }, true, {});

    setTimeout(() => {
      paniter._doPaintEl(image, {
        ctx,
      }, true, {});
    }, 500);
  }
}

export {
  Node,
  Edge,
  GraphView,
};
