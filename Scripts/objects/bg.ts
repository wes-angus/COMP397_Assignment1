module objects {
    export class Background extends objects.GameObject {
        //private inst. vars
        private _verticalSpeed: number;

        //public props

        //constructor
        constructor(imageString: string) {
            super(imageString, false);

            this.Start();
        }

        //private methods
        _move(): void {
            this.y += this._verticalSpeed;
        }
        _checkBounds(): void {
            if (this.y >= 0) {
                this.Reset();
            }
        }

        //public methods
        public Reset(): void {
            this.y = -1224;
        }
        public Destroy(): void {

        }
        public Start(): void {
            this.Reset();
            this._verticalSpeed = 3; //3px per frame
        }
        public Update(): void {
            this._move();
            this._checkBounds();
        }
    }
}