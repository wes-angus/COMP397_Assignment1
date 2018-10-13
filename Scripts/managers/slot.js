var managers;
(function (managers) {
    var Slot = /** @class */ (function () {
        function Slot() {
            this.resetAll();
            this.resetFruitTally();
        }
        //public methods
        /* Utility function to check if a value falls within a range of bounds */
        Slot.checkRange = function (value, lowerBounds, upperBounds) {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return !value;
            }
        };
        //private methods
        /* Utility function to reset all fruit tallies */
        Slot.prototype.resetFruitTally = function () {
            this.grapes = 0;
            this.bananas = 0;
            this.oranges = 0;
            this.cherries = 0;
            this.bars = 0;
            this.bells = 0;
            this.sevens = 0;
            this.blanks = 0;
        };
        /* Utility function to reset the player stats */
        Slot.prototype.resetAll = function () {
            this.playerMoney = 1000;
            this.winnings = 0;
            this.jackpot = 5000;
            this.playerBet = 0;
        };
        /* Check to see if the player won the jackpot */
        Slot.prototype.checkJackPot = function () {
            /* compare two random values */
            var jackPotTry = Math.floor(Math.random() * 51 + 1);
            var jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                this.playerMoney += this.jackpot;
                this.jackpot = 1000;
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
                        betLine[spin] = "Bell";
                        this.bells++;
                        break;
                    case Slot.checkRange(outCome[spin], 65, 65): //  1.5% probability
                        betLine[spin] = "Seven";
                        this.sevens++;
                        break;
                }
            }
            return betLine;
        };
        /* Utility function to show a win message and increase player money */
        Slot.prototype.showWinMessage = function () {
            this.playerMoney += this.winnings;
            this.resetFruitTally();
            this.checkJackPot();
        };
        /* Utility function to show a loss message and reduce player money */
        Slot.prototype.showLossMessage = function () {
            this.playerMoney -= this.playerBet;
            this.resetFruitTally();
        };
        /* This function calculates the player's winnings, if any */
        Slot.prototype.determineWinnings = function () {
            if (this.blanks == 0) {
                if (this.grapes == 3 || this.bells == 2) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this.bananas == 3 || this.sevens == 2) {
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
                else if (this.bells == 3) {
                    this.winnings = this.playerBet * 75;
                }
                else if (this.sevens == 3) {
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
                else if (this.bars == 2 || this.sevens == 1) {
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
        return Slot;
    }());
    managers.Slot = Slot;
})(managers || (managers = {}));
//# sourceMappingURL=slot.js.map