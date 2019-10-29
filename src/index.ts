import {ApplicationOptions} from 'pixi.js';


export class Main {
    private _app: PIXI.Application;
    private _pixiSpine: PIXI.spine.Spine;
    private _spineJson_Test: string = 'assets/Background_FrontalGarden_Landscape.json';

    private _settings: ApplicationOptions = {
        backgroundColor: 0xFFFFFF,
        antialias: true
    };

    constructor() {
        this._app = new PIXI.Application(window.innerWidth, window.innerHeight, this._settings);
        document.body.appendChild(this._app.view);

        //Stops the app for a little while the spine gets loaded
        this._app.stop();

        // Loading the spine into the PIXI loader
        PIXI.loader
            .add('spineCharacter', this._spineJson_Test)
            .load((loader, resources) => {

                // Creating the pixi spine
                this._pixiSpine = new PIXI.spine.Spine(resources.spineCharacter.spineData);
                this._pixiSpine.skeleton.setToSetupPose();
                this._pixiSpine.skeleton.setSkinByName(resources.spineCharacter.spineData.skins[1].name);

                // Setting the spine's position
                this._pixiSpine.position.set(this._app.screen.width / 2, this._app.screen.height);

                // Adding the spine to the display
                this._app.stage.addChild(this._pixiSpine);

                console.log('Spine animation name : \n' + this._pixiSpine);

                // Playing the animation
                let animationName: string = resources.spineCharacter.spineData.animations[0].name;
                this._pixiSpine.state.setAnimation(0, animationName, true);


                this._app.start();
            });


        this._app.ticker.add((delta) => {
        });

    }

}

// When the window loads, Main Object will be instantiated
window.onload = () => {
    new Main();
};