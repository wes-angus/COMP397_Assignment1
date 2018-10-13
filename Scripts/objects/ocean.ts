module objects {
    export class Ocean extends objects.GameObject {
        //private inst. vars
        private _verticalSpeed: number;

        //public props

        //constructor
        constructor() {
            super("ocean", false);

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
            this.y = -960;
        }
        public Destroy(): void {

        }
        public Start(): void {
            this.Reset();
            this._verticalSpeed = 5; //5px per frame
        }
        public Update(): void {
            this._move();
            this._checkBounds();
        }
    }
}