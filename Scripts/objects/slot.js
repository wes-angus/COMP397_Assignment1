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
    var Slot = /** @class */ (function (_super) {
        __extends(Slot, _super);
        //constructor
        function Slot() {
            var _this = _super.call(this, "slotMachine", false) || this;
            _this.Grayscale = new createjs.ColorMatrixFilter(new createjs.ColorMatrix().adjustSaturation(-100));
            _this.Start();
            return _this;
        }
        //static methods
        /* Utility function to check if a value falls within a range of bounds */
        Slot.checkRange = function (value, lowerBounds, upperBounds) {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return !value;
            }
        };
        //public methods
        Slot.prototype.Reset = function () {
            this.resetAll();
            this.updateMoney();
            this.updateBet();
            this.messageLabel.text = "Reset";
            for (var i = 0; i < 3; i++) {
                this.fruits[i].setFruit(config.Fruit.BLANK);
            }
        };
        Slot.prototype.Destroy = function () {
        };
        Slot.prototype.Start = function () {
            this.init();
        };
        Slot.prototype.Update = function () {
            this.updateBet();
        };
        //private methods
        Slot.prototype.init = function () {
            var _this = this;
            this.resetAll();
            this.resetFruitTally();
            this.x = 20;
            this.y = 40;
            this.betInput = document.getElementsByTagName("input")[0];
            this.betLabel = new objects.Label("Bet: $000", "32px", "Arial", "#0000FF", 20, 60, false);
            this.moneyLabel = new objects.Label("Money: $" + this.playerMoney, "32px", "Arial", "#0000FF", 420, 60, false);
            this.jackpotLabel = new objects.Label("$" + this.jackpot, "32px", "Arial", "#0000FF", 300, 20, true);
            this.spinButton = new objects.Button("spinButton", 580, 600, true);
            this.resetButton = new objects.Button("resetButton", 480, 590, true);
            this.resetButton.on("click", function () {
                console.log();
                _this.Reset();
            });
            this.quitButton = new objects.Button("quitButton", 480, 650, true);
            this.quitButton.on("click", function () {
                managers.Game.currentState = config.Scene.START;
            });
            this.messageLabel = new objects.Label("", "bold 48px", "Arial", "#FF0000", 12, 550, false);
            this.messageLabel.lineWidth = 420;
            this.fruits = new Array();
            var x = 0;
            var y = 0;
            for (var i = 0; i < 3; i++) {
                switch (i) {
                    case 0:
                        x = 130;
                        y = 390;
                        break;
                    case 1:
                        x = 295;
                        y = 390;
                        break;
                    case 2:
                        x = 460;
                        y = 390;
                        break;
                }
                this.fruits.push(new objects.Fruit(x, y));
            }
            this.spinButton.on("click", function () {
                _this.spinClick();
            });
            this.updateBet();
        };
        Slot.prototype.validateBet = function () {
            if (this.playerBet <= this.playerMoney && this.playerBet > 0) {
                this.betLabel.text = "Bet: $" + this.betString;
                this.spinButton.mouseEnabled = true;
                this.spinButton.filters = [];
                this.spinButton.cache(this.x - this.HalfWidth, this.y - this.HalfHeight, this.Width, this.Height);
            }
            else {
                this.betLabel.text = "Bet Invalid";
                this.spinButton.mouseEnabled = false;
                this.spinButton.filters = [this.Grayscale];
                this.spinButton.cache(this.x - this.HalfWidth, this.y - this.HalfHeight, this.Width, this.Height);
            }
        };
        Slot.prototype.updateBet = function () {
            if (this.betString != this.betInput.value) {
                this.betString = this.betInput.value;
                this.playerBet = parseInt(this.betString);
                this.validateBet();
            }
        };
        Slot.prototype.updateMoney = function () {
            this.moneyLabel.text = "Money: $" + this.playerMoney;
            this.validateBet();
        };
        Slot.prototype.updateJackpot = function () {
            this.jackpotLabel.text = "$" + this.jackpot;
        };
        /* Utility function to reset all fruit tallies */
        Slot.prototype.resetFruitTally = function () {
            this.grapes = 0;
            this.bananas = 0;
            this.oranges = 0;
            this.cherries = 0;
            this.bars = 0;
            this.apples = 0;
            this.lemons = 0;
            this.blanks = 0;
        };
        /* Utility function to reset the player stats */
        Slot.prototype.resetAll = function () {
            this.playerMoney = 1000;
            this.winnings = 0;
            this.jackpot = 5000;
            this.playerBet = 0;
            this.betString = "";
        };
        /* Check to see if the player won the jackpot */
        Slot.prototype.checkJackPot = function () {
            /* compare two random values */
            var jackPotTry = Math.floor(Math.random() * 51 + 1);
            var jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                this.playerMoney += this.jackpot;
                this.jackpot = 1000;
                this.messageLabel.text += "JACKPOT!";
                this.updateJackpot();
            }
        };
        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        Slot.prototype.Reels = function () {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];
            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case Slot.checkRange(outCome[spin], 1, 27): // 41.5% probability
                        betLine[spin] = "blank";
                        this.blanks++;
                        break;
                    case Slot.checkRange(outCome[spin], 28, 37): // 15.4% probability
                        betLine[spin] = "Grapes";
                        this.grapes++;
                        break;
                    case Slot.checkRange(outCome[spin], 38, 46): // 13.8% probability
                        betLine[spin] = "Banana";
                        this.bananas++;
                        break;
                    case Slot.checkRange(outCome[spin], 47, 54): // 12.3% probability
                        betLine[spin] = "Orange";
                        this.oranges++;
                        break;
                    case Slot.checkRange(outCome[spin], 55, 59): //  7.7% probability
                        betLine[spin] = "Cherry";
                        this.cherries++;
                        break;
                    case Slot.checkRange(outCome[spin], 60, 62): //  4.6% probability
                        betLine[spin] = "Bar";
                        this.bars++;
                        break;
                    case Slot.checkRange(outCome[spin], 63, 64): //  3.1% probability
                        betLine[spin] = "Apple";
                        this.apples++;
                        break;
                    case Slot.checkRange(outCome[spin], 65, 65): //  1.5% probability
                        betLine[spin] = "Lemon";
                        this.lemons++;
                        break;
                }
            }
            return betLine;
        };
        /* Utility function to show a win message and increase player money */
        Slot.prototype.showWinMessage = function () {
            this.playerMoney += this.winnings;
            this.messageLabel.text = "You Won: $" + this.winnings;
            this.updateMoney();
            this.resetFruitTally();
            this.checkJackPot();
            this.updateBet();
        };
        /* Utility function to show a loss message and reduce player money */
        Slot.prototype.showLossMessage = function () {
            this.playerMoney -= this.playerBet;
            if (this.playerMoney < 1) {
                managers.Game.currentState = config.Scene.OVER;
            }
            else {
                this.messageLabel.text = "You Lost...";
                this.updateMoney();
                this.resetFruitTally();
                this.updateBet();
            }
        };
        /* This function calculates the player's winnings, if any */
        Slot.prototype.determineWinnings = function () {
            if (this.blanks == 0) {
                if (this.grapes == 3 || this.apples == 2) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this.bananas == 3 || this.lemons == 2) {
                    this.winnings = this.playerBet * 20;
                }
                else if (this.oranges == 3) {
                    this.winnings = this.playerBet * 30;
                }
                else if (this.cherries == 3) {
                    this.winnings = this.playerBet * 40;
                }
                else if (this.bars == 3) {
                    this.winnings = this.playerBet * 50;
                }
                else if (this.apples == 3) {
                    this.winnings = this.playerBet * 75;
                }
                else if (this.lemons == 3) {
                    this.winnings = this.playerBet * 100;
                }
                else if (this.grapes == 2 || this.bananas == 2) {
                    this.winnings = this.playerBet * 2;
                }
                else if (this.oranges == 2) {
                    this.winnings = this.playerBet * 3;
                }
                else if (this.cherries == 2) {
                    this.winnings = this.playerBet * 4;
                }
                else if (this.bars == 2 || this.lemons == 1) {
                    this.winnings = this.playerBet * 5;
                }
                else {
                    this.winnings = this.playerBet;
                }
                this.showWinMessage();
            }
            else {
                this.showLossMessage();
            }
        };
        Slot.prototype.spinClick = function () {
            this.betLine = this.Reels();
            console.log(this.betLine);
            for (var i = 0; i < this.betLine.length; i++) {
                this.fruits[i].setFruit(this.betLine[i]);
            }
            this.determineWinnings();
        };
        return Slot;
    }(objects.GameObject));
    objects.Slot = Slot;
})(objects || (objects = {}));
//# sourceMappingURL=slot.js.map