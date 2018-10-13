module objects {
    export class Button extends objects.GameObject {
        //constructor

        /**
         * Creates an instance of Button.
         * @param imageId 
         * @param x 
         * @param y 
         * @param isCentered 
         */
        constructor(imageId: string, x: number = 0, y: number = 0, isCentered: boolean = false) {
            super(imageId, isCentered);

            this.x = x;
            this.y = y;

            //event listeners
            this.on("mouseover", this._over);
            this.on("mouseout", this._out);
        }

        //private methods
        private _over(event: createjs.MouseEvent): void {
            this.alpha = 0.7;
        }

        private _out(event: createjs.MouseEvent): void {
            this.alpha = 1;
        }

        //public methods
        public Reset(): void {
            
        }
        public Destroy(): void {
            
        }
        public Start(): void {
            
        }
        public Update(): void {
            
        }
    }
}