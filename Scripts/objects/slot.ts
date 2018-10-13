module objects {
    export class Slot extends objects.GameObject {
        //private vars

        //GUI-related
        private betString: string;
        private betInput: HTMLInputElement;

        //Spin logic-related
        private playerBet: number;
        private betLine: string[];
        private winnings: number;
        private grapes: number;
        private bananas: number;
        private oranges: number;
        private cherries: number;
        private bars: number;
        private apples: number;
        private lemons: number;
        private blanks: number;

        //public props
        public playerMoney: number;
        public jackpot: number;

        public betLabel: objects.Label;
        public moneyLabel: objects.Label;
        public jackpotLabel: objects.Label;
        public spinButton: objects.Button;
        public messageLabel: objects.Label;

        public Grayscale = new createjs.ColorMatrixFilter(new createjs.ColorMatrix().adjustSaturation(-100));
        public GrayscaleB = new createjs.ColorFilter(0.3, 0.3, 0.3);

        //constructor
        constructor() {
            super("slotMachine", false);
            this.Start();
        }

        //static methods
        /* Utility function to check if a value falls within a range of bounds */
        public static checkRange(value: number, lowerBounds: number, upperBounds: number) {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return !value;
            }
        }

        //public methods
        public Reset(): void {
            this.resetAll();
            this.resetFruitTally();
        }
        public Destroy(): void {

        }
        public Start(): void {
            this.Reset();
            this.init();
        }
        public Update(): void {
            this.updateBet();
        }

        //private methods
        private init() {
            this.x = 20;
            this.y = 40;
            this.betInput = document.getElementsByTagName("input")[0];
            this.betLabel = new objects.Label("Bet: $000", "32px", "Arial", "#0000FF", 20, 60, false);
            this.moneyLabel = new objects.Label("Money: $" + this.playerMoney, "32px", "Arial", "#0000FF", 420, 60, false);
            this.jackpotLabel = new objects.Label("$" + this.jackpot, "32px", "Arial", "#0000FF", 300, 20, true);
            this.spinButton = new objects.Button("spinButton", 580, 600, true);
            this.messageLabel = new objects.Label("", "bold 48px", "Arial", "#FF0000", 20, 540, false);
            this.messageLabel.lineWidth = 600;
            this.spinButton.on("click", () => {
                this.spinClick();
            });
            this.updateBet();
        }

        private validateBet() {
            if (this.playerBet <= this.playerMoney && this.playerBet > 0) {
                this.betLabel.text = "Bet $" + this.betString;
                this.spinButton.mouseEnabled = true;
                this.spinButton.filters = [];
                this.spinButton.cache(this.x - this.HalfWidth, this.y - this.HalfHeight, this.Width, this.Height);
            }
            else {
                this.betLabel.text = "Bet Invalid";
                this.spinButton.mouseEnabled = false;
                this.spinButton.filters = [
                    this.Grayscale
                ];
                this.spinButton.cache(this.x - this.HalfWidth, this.y - this.HalfHeight, this.Width, this.Height);
            }
        }

        private updateBet() {
            if (this.betString != this.betInput.value) {
                this.betString = this.betInput.value;
                this.playerBet = parseInt(this.betString);
                this.validateBet();
            }
        }

        private updateMoney() {
            this.moneyLabel.text = "Money $" + this.playerMoney;
            this.validateBet();
        }

        private updateJackpot() {
            this.jackpotLabel.text = "$" + this.jackpot;
        }

        /* Utility function to reset all fruit tallies */
        private resetFruitTally(): void {
            this.grapes = 0;
            this.bananas = 0;
            this.oranges = 0;
            this.cherries = 0;
            this.bars = 0;
            this.apples = 0;
            this.lemons = 0;
            this.blanks = 0;
        }

        /* Utility function to reset the player stats */
        private resetAll(): void {
            this.playerMoney = 1000;
            this.winnings = 0;
            this.jackpot = 5000;
            this.playerBet = 0;
        }

        /* Check to see if the player won the jackpot */
        private checkJackPot(): void {
            /* compare two random values */
            let jackPotTry = Math.floor(Math.random() * 51 + 1);
            let jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                this.playerMoney += this.jackpot;
                this.jackpot = 1000;
                this.messageLabel.text += "JACKPOT!";
                this.updateJackpot();
            }
        }

        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        public Reels(): string[] {
            let betLine = [" ", " ", " "];
            let outCome = [0, 0, 0];

            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case Slot.checkRange(outCome[spin], 1, 27):  // 41.5% probability
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
                        this.apples++;
                        break;
                    case Slot.checkRange(outCome[spin], 65, 65): //  1.5% probability
                        betLine[spin] = "Seven";
                        this.lemons++;
                        break;
                }
            }
            return betLine;
        }

        /* Utility function to show a win message and increase player money */
        private showWinMessage(): void {
            this.playerMoney += this.winnings;
            this.messageLabel.text = "You Won: $" + this.winnings;
            this.updateMoney();
            this.resetFruitTally();
            this.checkJackPot();
            this.updateBet();
        }

        /* Utility function to show a loss message and reduce player money */
        private showLossMessage(): void {
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
        }

        /* This function calculates the player's winnings, if any */
        public determineWinnings(): void {
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
        }

        private spinClick() {
            this.betLine = this.Reels();
            console.log(this.betLine);
            this.determineWinnings();
        }
    }
}