namespace scenes {
  export class Play extends objects.Scene {
    // private instance variables
    private _ocean: objects.Ocean;
    private _slot: objects.Slot;

    // public properties

    // constructor
    constructor() {
      super();
      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._ocean = new objects.Ocean();
      this._slot = new objects.Slot();
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
      this.addChild(this._ocean);
      // adds slot machine to the scene
      this.addChild(this._slot);
    }
  }
}
