import Entity from './Entity';

export default class Point extends Entity {

  public x?: undefined | number;
  public y?: undefined | number;
  public z?: undefined | number;

  constructor(option: any = {}) {
    const { x, y, z, ...others } = option;
    super(others);

    this.x = x;
    this.y = y;
    this.z = z;
  }
}
