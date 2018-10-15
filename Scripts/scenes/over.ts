module scenes {
    export class Over extends objects.Scene {
        // private instance variable
        private _gameOverLabel: objects.Label;
        private _gameOverLabel2: objects.Label;
        private _bg: createjs.Bitmap;
        private _restartButton: objects.Button;

        // public properties

        // constructor
        constructor() {
            super();
            this.Start();
        }

        // private methods

        // public methods
        public Start(): void {
            this._gameOverLabel = new objects.Label("Out of Money!", "bold 60px", "Consolas", "#FFFF00", 320, 160, true);
            this._gameOverLabel2 = new objects.Label("Would you like to play again?", "32px", "Consolas", "#FFFF00", 320, 240, true);
            this._restartButton = new objects.Button("restartButton", 320, 360, true);
            this._bg = new createjs.Bitmap(managers.Game.assetManager.getResult("skulls_bg"));

            this.Main();
        }

        public Update(): void {
        }

        public Destroy(): void {
            this.removeAllChildren();
        }

        public Reset(): void {

        }

        public Main(): void {
            // adds ocean to the stage

            this.addChild(this._bg);
            this.addChild(this._gameOverLabel);
            this.addChild(this._gameOverLabel2);
            this.addChild(this._restartButton);

            this._restartButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            });
        }
    }
}