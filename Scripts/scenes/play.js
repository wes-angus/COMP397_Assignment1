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
            this._ocean = new objects.Ocean();
            this._slot = new objects.Slot();
            this.Main();
        };
        Play.prototype.Update = function () {
            this._ocean.Update();
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Main = function () {
            // adds ocean to the scene
            this.addChild(this._ocean);
            // adds slot machine to the scene
            this.addChild(this._slot);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map