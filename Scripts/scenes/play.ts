namespace scenes {
  export class Play extends objects.Scene {
    // private instance variable
    private _ocean: objects.Ocean;

    // public properties

    // constructor
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods

    public Start(): void {

      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
    }

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Reset(): void {}

    public Main(): void {
      // adds ocean to the scene
      this._ocean = new objects.Ocean();
      this.addChild(this._ocean);
    }
  }
}
