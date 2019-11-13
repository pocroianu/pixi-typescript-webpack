/*
 * Created By Geani Pocroianu on 11/13/19 9:05 PM
 */

import Container = PIXI.Container;
import Spine = PIXI.spine.Spine;

export class SpineAnimationUiComponent extends Container {

    protected _spineAnimation: Spine;

    constructor() {
        super();
    }

    public initializeSpineAnimation(spine: Spine): void {
        // Creating the pixi spine
        this._spineAnimation = spine;

        // Setting the spine's position
        this._spineAnimation.position.set(1000, 1000);
        this._spineAnimation.skeleton.setSkin(this._spineAnimation.spineData.skins[1]);

        // Adding the spine to the display
        this.addChild(this._spineAnimation);

        console.log('Spine: ');
        console.log(this._spineAnimation);

        // Playing the animation
        let animationName: string = this._spineAnimation.spineData.animations[0].name;
        this._spineAnimation.state.setAnimation(0, animationName, true);

    }

}