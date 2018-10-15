//IIFE - Immediately Invoked Function Expression
(function(){
    // game variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let assetManager:createjs.LoadQueue;

    let currentScene:objects.Scene;
    let currentState:config.Scene;

    let assetManifest = [
        {id: "startButton", src:"./Assets/images/startButton.png"},
        {id: "betButton", src:"./Assets/images/betButton.png"},
        {id: "restartButton", src:"./Assets/images/restartButton.png"},
        {id: "spinButton", src:"./Assets/images/spinButton.png"},
        {id: "resetButton", src:"./Assets/images/resetButton.png"},
        {id: "quitButton", src:"./Assets/images/quitButton.png"},
        {id: "start-background", src:"./Assets/images/start-background.jpg"},
        {id: "skulls_bg", src:"./Assets/images/skulls_bg.jpg"},
        {id: "colorful-bg", src:"./Assets/images/colorful-background-rainbow.png"},
        {id: "slotMachine", src:"./Assets/images/slot-machine-clipart-transparent.png"},
        
        //Fruits
        {id: "apple", src:"./Assets/images/slot_machine_apple.png"},
        {id: "banana", src:"./Assets/images/slot_machine_banana.png"},
        {id: "bar", src:"./Assets/images/slot_machine_bar.png"},
        {id: "cherries", src:"./Assets/images/slot_machine_cherries.png"},
        {id: "grapes", src:"./Assets/images/slot_machine_grapes.png"},
        {id: "lemon", src:"./Assets/images/slot_machine_lemon.png"},
        {id: "orange", src:"./Assets/images/slot_machine_orange.png"}
    ];


    function Init():void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; // creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound); // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets listed in the manifest
        assetManager.on("complete", Start); // call Start when assets are finished loading
    }

    function Start():void {
        console.log(`%c Game Started...`,"color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage; // passing a reference to the stage globally
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);

        currentState = config.Scene.START;
        managers.Game.currentState = currentState;
        Main();
    }

    // this is the main game loop
    function Update():void {
        currentScene.Update();

        if(currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }

        stage.update();
    }

    function Main():void {
        // clean up current scene
        if(currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
            
        switch(currentState) {
            case config.Scene.START:
            currentScene = new scenes.Start();
            break;
            case config.Scene.PLAY:
            currentScene = new scenes.Play();
            break;
            case config.Scene.OVER:
             currentScene = new scenes.Over();
            break;
        }

        stage.addChild(currentScene);
    }

    window.addEventListener("load", Init);
})();