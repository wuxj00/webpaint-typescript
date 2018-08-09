import { DisplayObject, Icon, Label } from '../model/';

export default class Edge extends DisplayObject {

  private icon: Icon;
  private label: Label;

  constructor(option: any = {}) {
    const { icon, label, ...others } = option;
    super(others);
    this.icon = new Icon(icon);
    this.label = new Label(label);
  }
  public getLabel(): Label {
    return this.label;
  }
  public setLabel(label: any) {
    if (label as Label || label as object) {
      this.label = new Label(label);
    }
  }
  public getIcon(): Icon {
    return this.icon;
  }
  public setIcon(icon: any) {
    if (icon as Icon || icon as object) {
      this.icon = new Icon(icon);
    }
  }

  public render(): void {
    // empty
  }
  public dispose(): void {
    // empty
  }
}
