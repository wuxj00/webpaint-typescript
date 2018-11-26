import { Node, Edge, uuid, ImageLoader, GraphView } from '../GraphView';
import pic1 from '../assets/images/icon.jpg';
import pic2 from '../assets/images/2.jpg';
import { GeoNode } from '@/entities';


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
      gv.addEntities([
        { id: 'node1', type: 'geo-node', lng: 103, lat: 30, width: 50, height: 50, icon: id1, label: 'node1' },
        { id: 'node2', type: 'geo-node', lng: 105, lat: 20, width: 50, height: 50, icon: id1, label: 'node2' },
        { id: 'edge', type: 'edge', source: 'node1', target: 'node2', style: {
          stroke: 'red',
          blend: 'destination-over',
        }},
      ]);
      const render  = () => {
        gv.getDataModel().forEach((data: any) => {
          data.render(painter);
        });
      };
      render();

      gv.getMapLayer().getGisMap().on('moveend', () => {
        const mapLayer = gv.getMapLayer();
        gv.getDataModel().forEach((data: any) => {
          if (data instanceof GeoNode) {
            const point = mapLayer.getPixelFromLngLat((data as GeoNode).getLngLat());
            (data as GeoNode).setPosition({
              x: point[0],
              y: point[1]
            });
          } else if (data instanceof Edge) {
            data.initEntities();
          }
        });
        gv.getVectorLayer().clear();
        render();
      });
    });  
  }
}
