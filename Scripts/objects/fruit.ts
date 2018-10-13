module objects {
    export class Fruit extends objects.GameObject {
        //private vars
        private appleImg: HTMLImageElement;
        private bananaImg: HTMLImageElement;
        private barImg: HTMLImageElement;
        private cherryImg: HTMLImageElement;
        private grapesImg: HTMLImageElement;
        private lemonImg: HTMLImageElement;
        private orangeImg: HTMLImageElement;

        //public props
        public result: config.Fruit;

        //constructor
        constructor(x: number, y: number, imageString: string = "banana") {
            super(imageString, true);
            this.x = x;
            this.y = y;

            this.Start();
        }

        //public methods
        public Reset(): void {
            this.result = config.Fruit.BLANK;
            this.alpha = 0;
        }
        public Destroy(): void {
        }
        public Start(): void {
            this.initImages();
            this.Reset();
        }
        public Update(): void {
        }

        public setFruit(fruit: config.Fruit) {
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
        }

        //private methods
        private initImages() {
            this.appleImg = <HTMLImageElement>managers.Game.assetManager.getResult("apple");
            this.bananaImg = <HTMLImageElement>managers.Game.assetManager.getResult("banana");
            this.barImg = <HTMLImageElement>managers.Game.assetManager.getResult("bar");
            this.cherryImg = <HTMLImageElement>managers.Game.assetManager.getResult("cherries");
            this.grapesImg = <HTMLImageElement>managers.Game.assetManager.getResult("grapes");
            this.lemonImg = <HTMLImageElement>managers.Game.assetManager.getResult("lemon");
            this.orangeImg = <HTMLImageElement>managers.Game.assetManager.getResult("orange");
        }
    }
}