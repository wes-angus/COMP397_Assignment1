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
    var Ocean = /** @class */ (function (_super) {
        __extends(Ocean, _super);
        //public props
        //constructor
        function Ocean() {
            var _this = _super.call(this, "ocean", false) || this;
            _this.Start();
            return _this;
        }
        //private methods
        Ocean.prototype._move = function () {
            this.y += this._verticalSpeed;
        };
        Ocean.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        //public methods
        Ocean.prototype.Reset = function () {
            this.y = -960;
        };
        Ocean.prototype.Destroy = function () {
        };
        Ocean.prototype.Start = function () {
            this.Reset();
            this._verticalSpeed = 5; //5px per frame
        };
        Ocean.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Ocean;
    }(objects.GameObject));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map