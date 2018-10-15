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
var objects;
(function (objects) {
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        //public props
        //constructor
        function Background(imageString) {
            var _this = _super.call(this, imageString, false) || this;
            _this.Start();
            return _this;
        }
        //private methods
        Background.prototype._move = function () {
            this.y += this._verticalSpeed;
        };
        Background.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        //public methods
        Background.prototype.Reset = function () {
            this.y = -1224;
        };
        Background.prototype.Destroy = function () {
        };
        Background.prototype.Start = function () {
            this.Reset();
            this._verticalSpeed = 3; //3px per frame
        };
        Background.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Background;
    }(objects.GameObject));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=bg.js.map