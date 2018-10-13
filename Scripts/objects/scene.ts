module objects {
    export abstract class Scene extends createjs.Container {
        //private inst. vars

        //public props

        //constructor
        constructor() {
            super();
        }

        //private methods

        //public methods
        public abstract Reset(): void;

        public abstract Destroy(): void;

        public abstract Start(): void;

        public abstract Update(): void;

        public abstract Main(): void;
    }
}