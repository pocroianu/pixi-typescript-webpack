/*
 * Created By Geani Pocroianu on 11/6/19 8:35 PM
 */

import {MyFacade} from "./modules/facade/my-facade";
import {Keys} from "./modules/static/keys";

export class Main {

    private _facade: MyFacade;

    constructor() {
        this._facade= new MyFacade(Keys.FACADE_KEY);
    }

}

// When the window loads, Main Object will be instantiated
window.onload = () => {
    new Main();
};