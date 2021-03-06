/**
 * Author: Wesley Angus
 * Student #: 300924221
 * Description: A slot machine to waste all of your virtual money on!
 *              Click spin after entering your bet to see how much you can win!
 * Revision History: see https://github.com/wes-angus/COMP397_Assignment1
 */

module scenes {
    export class Start extends objects.Scene {
        // private instance variable
        private _welcomeLabel: objects.Label;
        private _bg: objects.Background;
        private _startButton: objects.Button;

        // public properties

        // constructor
        constructor() {
            super();
            this.Start();
        }

        // private methods

        // public methods

        public Start(): void {
            this._bg = new objects.Background("start-background");
            this._welcomeLabel = new objects.Label("Slot Machine Supreme", "bold 60px", "Consolas", "#800000", 320, 200, false);
            this._welcomeLabel.lineWidth = 640;
            this._welcomeLabel.textAlign = "center";
            this._startButton = new objects.Button("startButton", 320, 440, true);

            this.Main();
        }

        public Update(): void {
            this._bg.Update();
        }

        public Destroy(): void {
            this.removeAllChildren();
        }

        public Reset(): void {

        }

        public Main(): void {
            // adds ocean to the stage
            this.addChild(this._bg);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);

            this._startButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            });
        }
    }
}