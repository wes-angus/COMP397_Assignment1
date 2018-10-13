module objects {
    export class Label extends createjs.Text {
        //private instance vars
        private _width: number;
        private _height: number;
        private _halfWidth: number;
        private _halfHeight: number;

        //public properties
        get Width(): number {
            return this._width;
        }
        set Width(newVal: number) {
            this._width = newVal;
            this._halfWidth = newVal * 0.5;
        }
        get HalfWidth() {
            return this._halfWidth;
        }

        get Height(): number {
            return this._height;
        }
        set Height(newVal: number) {
            this._height = newVal;
            this._halfHeight = newVal * 0.5;
        }
        get HalfHeight() {
            return this._halfWidth;
        }

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
        constructor(
            labelString: string,
            fontSize: string, fontFamily: string, fontColour: string,
            x: number = 0, y: number = 0, isCentered: boolean = false) {
            super(labelString, fontSize + ' ' + fontFamily, fontColour);

            this.Width = this.getMeasuredWidth();
            this.Height = this.getMeasuredHeight();

            if(isCentered) {
                this.regX = this._halfWidth;
                this.regY = this._halfHeight;
            }

            this.x = x;
            this.y = y;
        }

        //private methods

        //public methods
    }
}