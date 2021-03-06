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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // public properties
        // constructor
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Play.prototype.Start = function () {
            this._bg = new createjs.Bitmap(managers.Game.assetManager.getResult("colorful-bg"));
            this._slot = new objects.Slot();
            this.Main();
        };
        Play.prototype.Update = function () {
            this._slot.Update();
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Main = function () {
            var _this = this;
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
            this._slot.fruits.forEach(function (fruit) {
                _this.addChild(fruit);
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map