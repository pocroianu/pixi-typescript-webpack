/*
 * Created By Geani Pocroianu on 11/8/19 10:55 PM
 */

/*
 * Created By Geani Pocroianu on 11/8/19 8:50 PM
 */

import {AbstractShape} from "./abstract-shape";

export class CircleShape extends AbstractShape{

    constructor(){
        super();

    }

    protected drawShape(): void {
        super.drawShape();
        // Set the fill color
        this._graphics.beginFill(0xe74c3c); // Red

        // Draw a circle
        this._graphics.drawCircle(60, 185, 40); // drawCircle(x, y, radius)
        this._graphics.endFill();
    }
}