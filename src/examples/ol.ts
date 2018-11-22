import { Node, Edge, uuid, ImageLoader, GraphView } from '../GraphView';
import pic1 from '../assets/images/icon.jpg';
import pic2 from '../assets/images/2.jpg';


export default class CreateOpenylayer {
  constructor() {
    const gv = new GraphView({
      target: 'map',
      map: true,
    });
    const dm = gv.getDataModel();
    const vectorLayer = gv.getVectorLayer();
    const painter = vectorLayer.getPainter();
    const id1: string = uuid();
    const id2: string = uuid();
    ImageLoader([
      {id: id1, src: pic1 },
      {id: id2, src: pic2 },
    ]).then((res) => {
      
      const dm = gv.getDataModel();
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
        icon: id1,
        height: 50,
        label: 'node2',
        style: {
          fontSize: 20,
        }});
      dm.add(node1.getId(), node1);
      dm.add(node2.getId(), node2);
      const edge = new Edge({
        id: 'edge1',
        source: node1.getId(),
        target: node2.getId(),
        style: {
          stroke: 'red',
          blend: 'destination-over',
        },
      });
      dm.add(edge.getId(), edge);
      dm.forEach((data: any) => {
        data.render(painter);
      });
    });
  
  }
}
