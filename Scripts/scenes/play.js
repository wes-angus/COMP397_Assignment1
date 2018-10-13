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
            this._betLabel = new objects.Label("Bet: $000", "32px", "Arial", "#0000FF", 20, 30, false);
            this._moneyLabel = new objects.Label("Money: $0000", "32px", "Arial", "#0000FF", 420, 30, false);
            this._slot = new objects.Slot(this._moneyLabel);
            this.Main();
        };
        Play.prototype.Update = function () {
            this._slot.updateBet(this._betLabel);
            this._slot.Update();
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Main = function () {
            // adds slot machine to the scene
            this.addChild(this._slot);
            this.addChild(this._betLabel);
            this.addChild(this._moneyLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map