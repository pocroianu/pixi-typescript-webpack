/*
 * Created By Geani Pocroianu on 11/8/19 10:55 PM
 */

/*
 * Created By Geani Pocroianu on 11/8/19 8:37 PM
 */

import Graphics = PIXI.Graphics;

export class AbstractShape {

    public _graphics: Graphics;

    constructor(){
        this.drawShape();
    }

    /**
     * Creates the shape object
     */
    protected drawShape(): void{
        this._graphics= new Graphics();
    }

    public getGraphics(): Graphics{
        return this._graphics;
    }
}