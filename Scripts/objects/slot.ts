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
        private bells: number;
        private sevens: number;
        private blanks: number;

        //public props
        public playerMoney: number;
        public jackpot: number;

        //constructor
        constructor(moneyLabel: objects.Label) {
            super("slotMachine", false);
            this.Start();
            this.updateMoney(moneyLabel);
        }

        //static methods
        /* Utility function to check if a value falls within a range of bounds */
        public static checkRange(value, lowerBounds, upperBounds) {
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
            this.init();
            this.Reset();
        }
        public Update(): void {
        }

        public updateBet(betLabel: objects.Label) {
            if (this.betString != this.betInput.value) {
                this.betString = this.betInput.value;
                this.playerBet = parseInt(this.betString);
                if (this.playerBet <= this.playerMoney && this.playerBet > 0) {
                    betLabel.text = "Bet $" + this.betString;
                }
                else {
                    betLabel.text = "Bet Invalid";
                }
            }
        }

        public updateMoney(moneyLabel: objects.Label) {
            moneyLabel.text = "Money $" + this.playerMoney;
        }

        public spinClick(moneyLabel: objects.Label) {
            this.betLine = this.Reels();
            this.determineWinnings(moneyLabel);
        }

        //private methods
        private init() {
            this.x = 20;
            this.y = 20;
            this.betInput = document.getElementsByTagName("input")[0];
        }

        /* Utility function to reset all fruit tallies */
        private resetFruitTally(): void {
            this.grapes = 0;
            this.bananas = 0;
            this.oranges = 0;
            this.cherries = 0;
            this.bars = 0;
            this.bells = 0;
            this.sevens = 0;
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
            }
        }

        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        private Reels(): string[] {
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
                        this.bells++;
                        break;
                    case Slot.checkRange(outCome[spin], 65, 65): //  1.5% probability
                        betLine[spin] = "Seven";
                        this.sevens++;
                        break;
                }
            }
            return betLine;
        }

        /* Utility function to show a win message and increase player money */
        private showWinMessage(moneyLabel: objects.Label): string {
            this.playerMoney += this.winnings;
            this.updateMoney(moneyLabel);
            this.resetFruitTally();
            this.checkJackPot();
            return "You Won: $" + this.winnings;
        }

        /* Utility function to show a loss message and reduce player money */
        private showLossMessage(moneyLabel: objects.Label): string {
            this.playerMoney -= this.playerBet;
            this.updateMoney(moneyLabel);
            this.resetFruitTally();
            return "You Lost...";
        }

        /* This function calculates the player's winnings, if any */
        private determineWinnings(moneyLabel: objects.Label): void {
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
                this.showWinMessage(moneyLabel);
            }
            else {
                this.showLossMessage(moneyLabel);
            }
        }
    }
}