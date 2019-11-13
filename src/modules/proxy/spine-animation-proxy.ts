/*
 * Created By Geani Pocroianu on 11/6/19 8:35 PM
 */

import Proxy = puremvc.Proxy;

export class SpineAnimationProxy extends Proxy {

    public animationName: string = 'assets/Background_FrontalGarden_Landscape.json';

    constructor(proxyName?: string, data?: any) {
        super(proxyName, data);
    }
}

