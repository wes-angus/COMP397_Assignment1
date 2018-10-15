namespace scenes {
  export class Play extends objects.Scene {
    // private instance variables
    private _slot: objects.Slot;
    private _bg: createjs.Bitmap;

    // public properties

    // constructor
    constructor() {
      super();
      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._bg = new createjs.Bitmap(managers.Game.assetManager.getResult("colorful-bg"));
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
      this.addChild(this._bg);
      // adds slot machine to the scene
      this.addChild(this._slot);
      this.addChild(this._slot.betLabel);
      this.addChild(this._slot.moneyLabel);
      this.addChild(this._slot.jackpotLabel);
      this.addChild(this._slot.spinButton);
      this.addChild(this._slot.resetButton);
      this.addChild(this._slot.quitButton);
      this.addChild(this._slot.messageLabel);
      this.addChild(this._slot.betButton);
      this._slot.fruits.forEach(fruit => {
        this.addChild(fruit);
      });
    }
  }
}
