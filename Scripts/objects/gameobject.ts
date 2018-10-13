module objects {
    export abstract class GameObject extends createjs.Bitmap {
        //private inst. vars
        private _width: number;
        private _height: number;
        private _halfWidth: number;
        private _halfHeight: number;

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

        //constructors
        constructor(imageName: string, isCentered: boolean) {
            super(managers.Game.assetManager.getResult(imageName));
            this.name = imageName;

            this._init(isCentered);
        }

        //private methods
        private _init(isCentered: boolean): void {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            
            if (isCentered) {
                this.regX = this.HalfWidth;
                this.regY = this.HalfHeight;
            }
        }

        //public methods
        public abstract Reset(): void;

        public abstract Destroy(): void;

        public abstract Start(): void;

        public abstract Update(): void;
    }
}