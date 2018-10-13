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
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        //constructor
        /**
         * Creates an instance of Label.
         * @param labelString
         * @param fontSize
         * @param fontFamily
         * @param fontColour
         * @param x
         * @param y
         * @param isCentered
         */
        function Label(labelString, fontSize, fontFamily, fontColour, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, labelString, fontSize + ' ' + fontFamily, fontColour) || this;
            _this.Width = _this.getMeasuredWidth();
            _this.Height = _this.getMeasuredHeight();
            if (isCentered) {
                _this.regX = _this._halfWidth;
                _this.regY = _this._halfHeight;
            }
            _this.x = x;
            _this.y = y;
            return _this;
        }
        Object.defineProperty(Label.prototype, "Width", {
            //public properties
            get: function () {
                return this._width;
            },
            set: function (newVal) {
                this._width = newVal;
                this._halfWidth = newVal * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Label.prototype, "HalfWidth", {
            get: function () {
                return this._halfWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Label.prototype, "Height", {
            get: function () {
                return this._height;
            },
            set: function (newVal) {
                this._height = newVal;
                this._halfHeight = newVal * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Label.prototype, "HalfHeight", {
            get: function () {
                return this._halfWidth;
            },
            enumerable: true,
            configurable: true
        });
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map