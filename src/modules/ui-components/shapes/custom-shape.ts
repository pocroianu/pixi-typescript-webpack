/*
 * Created By Geani Pocroianu on 11/8/19 10:55 PM
 */

/*
 * Created By Geani Pocroianu on 11/8/19 8:49 PM
 */

import {AbstractShape} from "./abstract-shape";

export class CustomShape extends AbstractShape{

    protected _numberOfSides: number;
    protected _sideLength: number;

    constructor(numberOfSides: number,sideLength: number){
        super();
        this._numberOfSides = numberOfSides;
        this._sideLength = sideLength;
        this.drawShape();
    }

    protected drawShape(): void{
        super.drawShape();
        // this._graphics.drawPolygon()
    }

}