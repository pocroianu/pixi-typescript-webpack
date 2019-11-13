/*
 * Created By Geani Pocroianu on 11/6/19 8:35 PM
 */

import {Keys} from "./modules/static/keys";
import {MainFacade} from "./modules/facade/main-facade";

export class Main {

    private _facade: MainFacade;

    constructor() {
        this._facade = new MainFacade(Keys.FACADE_KEY);
    }

}

// When the window loads, Main Object will be instantiated
window.onload = () => {
    new Main();
};