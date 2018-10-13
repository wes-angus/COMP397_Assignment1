namespace scenes {
  export class Play extends objects.Scene {
    // private instance variables
    private _slot: objects.Slot;
    private _betLabel: objects.Label;
    private _moneyLabel: objects.Label;

    // public properties

    // constructor
    constructor() {
      super();
      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._slot = new objects.Slot();
      this.Main();
    }

    public Update(): void {
      this._slot.Update();
    }

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Reset(): void { }

    public Main(): void {
      // adds slot machine to the scene
      this.addChild(this._slot);
      this.addChild(this._slot.betLabel);
      this.addChild(this._slot.moneyLabel);
      this.addChild(this._slot.jackpotLabel);
      this.addChild(this._slot.spinButton);
      this.addChild(this._slot.messageLabel);
    }
  }
}
