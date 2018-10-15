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
var objects;
(function (objects) {
    var Fruit = /** @class */ (function (_super) {
        __extends(Fruit, _super);
        //constructor
        function Fruit(x, y, imageString) {
            if (imageString === void 0) { imageString = "banana"; }
            var _this = _super.call(this, imageString, true) || this;
            _this.x = x;
            _this.y = y;
            _this.Start();
            return _this;
        }
        //public methods
        Fruit.prototype.Reset = function () {
            this.result = config.Fruit.BLANK;
            this.alpha = 0;
        };
        Fruit.prototype.Destroy = function () {
        };
        Fruit.prototype.Start = function () {
            this.initImages();
            this.Reset();
        };
        Fruit.prototype.Update = function () {
        };
        Fruit.prototype.setFruit = function (fruit) {
            //console.log(config.Fruit.BLANK);
            this.result = fruit;
            if (this.result === config.Fruit.BLANK) {
                this.alpha = 0;
            }
            else {
                switch (fruit) {
                    case config.Fruit.GRAPES:
                        this.image = this.grapesImg;
                        break;
                    case config.Fruit.BANANA:
                        this.image = this.bananaImg;
                        break;
                    case config.Fruit.ORANGE:
                        this.image = this.orangeImg;
                        break;
                    case config.Fruit.CHERRY:
                        this.image = this.cherryImg;
                        break;
                    case config.Fruit.BAR:
                        this.image = this.barImg;
                        break;
                    case config.Fruit.APPLE:
                        this.image = this.appleImg;
                        break;
                    case config.Fruit.LEMON:
                        this.image = this.lemonImg;
                        break;
                }
                this.alpha = 1;
            }
        };
        //private methods
        Fruit.prototype.initImages = function () {
            this.appleImg = managers.Game.assetManager.getResult("apple");
            this.bananaImg = managers.Game.assetManager.getResult("banana");
            this.barImg = managers.Game.assetManager.getResult("bar");
            this.cherryImg = managers.Game.assetManager.getResult("cherries");
            this.grapesImg = managers.Game.assetManager.getResult("grapes");
            this.lemonImg = managers.Game.assetManager.getResult("lemon");
            this.orangeImg = managers.Game.assetManager.getResult("orange");
        };
        return Fruit;
    }(objects.GameObject));
    objects.Fruit = Fruit;
})(objects || (objects = {}));
//# sourceMappingURL=fruit.js.map