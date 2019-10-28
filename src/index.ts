import {ApplicationOptions} from 'pixi.js';


new class Main {
    app: PIXI.Application;
    animation: PIXI.spine.Spine;
    private _spineJson_Test: string = 'assets/Background_FrontalGarden_Landscape.json';

    settings: ApplicationOptions = {
        backgroundColor: 0xFFFFFF,
        antialias: true
    };

    constructor() {
        this.app = new PIXI.Application(window.innerWidth, window.innerHeight, this.settings);
        document.body.appendChild(this.app.view);

        /**Stops the app for a little while the spine gets loaded */
        this.app.stop();

        PIXI.loader
            .add('spineCharacter', this._spineJson_Test)
            .load((loader, resources) => {
                console.log(resources.spineCharacter.spineData);


                this.animation = new PIXI.spine.Spine(resources.spineCharacter.spineData);
                this.animation.skeleton.setToSetupPose();
                this.animation.skeleton.setSkinByName(resources.spineCharacter.spineData.skins[1].name);



                this.animation.position.set(this.app.screen.width/2,this.app.screen.height);
                console.log(this.animation);


                this.app.stage.addChild(this.animation);


                console.log('Spine animation name : ' + resources.spineCharacter.spineData.animations[0].name);
                this.animation.state.setAnimation(0, resources.spineCharacter.spineData.animations[0].name, true);


                this.app.start();
            });


        this.app.ticker.add((delta) => {
        });

    }

};