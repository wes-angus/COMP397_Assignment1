/**
 * Author: Wesley Angus
 * Student #: 300924221
 * Description: A slot machine to waste all of your virtual money on!
 *              Click spin after entering your bet to see how much you can win!
 * Revision History: see https://github.com/wes-angus/COMP397_Assignment1
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Over = /** @class */ (function (_super) {
        __extends(Over, _super);
        // public properties
        // constructor
        function Over() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Over.prototype.Start = function () {
            this._gameOverLabel = new objects.Label("Out of Money!", "bold 60px", "Consolas", "#FFFF00", 320, 160, true);
            this._gameOverLabel2 = new objects.Label("Would you like to play again?", "32px", "Consolas", "#FFFF00", 320, 240, true);
            this._restartButton = new objects.Button("restartButton", 320, 400, true);
            this._bg = new createjs.Bitmap(managers.Game.assetManager.getResult("skulls_bg"));
            this.Main();
        };
        Over.prototype.Update = function () {
        };
        Over.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Over.prototype.Reset = function () {
        };
        Over.prototype.Main = function () {
            // adds ocean to the stage
            this.addChild(this._bg);
            this.addChild(this._gameOverLabel);
            this.addChild(this._gameOverLabel2);
            this.addChild(this._restartButton);
            this._restartButton.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY;
            });
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map