/*
 * Created By Geani Pocroianu on 11/6/19 8:35 PM
 */

import View = puremvc.View;
import Spine = PIXI.spine.Spine;
import Container = PIXI.Container;

export class BackgroundAnimationView extends View {

    protected _display: Container;
    protected _backgroundSpineAnimation: Spine;

    constructor(key: string, display: Container) {
        super(key);
        this._display = display;
    }

    public initializeBackgroundAnimation(spine: Spine): void {


        // Creating the pixi spine
        this._backgroundSpineAnimation = spine;

        // Setting the spine's position
        this._backgroundSpineAnimation.position.set(1000,1000);
        this._backgroundSpineAnimation.skeleton.setSkin(this._backgroundSpineAnimation.spineData.skins[1]);

        // Adding the spine to the display
        this._display.addChild(this._backgroundSpineAnimation);

        console.log('Spine: BackgroundAnimation: ');
        console.log(this._backgroundSpineAnimation);

        // Playing the animation
        let animationName: string=this._backgroundSpineAnimation.spineData.animations[0].name;
        this._backgroundSpineAnimation.state.setAnimation(0, animationName, true);

    }

}