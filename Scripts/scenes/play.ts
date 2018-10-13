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
      this._betLabel = new objects.Label("Bet: $000", "32px", "Arial", "#0000FF", 20, 30, false);
      this._moneyLabel = new objects.Label("Money: $0000", "32px", "Arial", "#0000FF", 420, 30, false);
      this._slot = new objects.Slot(this._moneyLabel);
      this.Main();
    }

    public Update(): void {
      this._slot.updateBet(this._betLabel);
      this._slot.Update();
    }

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Reset(): void { }

    public Main(): void {
      // adds slot machine to the scene
      this.addChild(this._slot);
      this.addChild(this._betLabel);
      this.addChild(this._moneyLabel);
    }
  }
}
