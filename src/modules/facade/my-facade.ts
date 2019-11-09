/*
 * Created By Geani Pocroianu on 11/6/19 8:35 PM
 */

import Facade = puremvc.Facade;
import {LoadPixiSpineCommand} from "../commands/load-pixi-spine-command";
import {Notifications} from "../static/notifications";
import {BackgroundAnimationProxy} from "../proxy/background-animation-proxy";
import {Keys} from "../static/keys";
import {MediatorNames, ProxiesNames, ViewsNames} from "../static/names";
import {MainView} from "../view/main-view";
import View = puremvc.View;

export class MyFacade extends Facade {

    /**
     * Returns the instance of MyFacade
     */
    public static getInstance(): MyFacade {
        if (Keys.FACADE_KEY === undefined) {
            return undefined;
        }
        return Facade.instanceMap[Keys.FACADE_KEY];
    }

    /**
     * @inheritDoc
     */
    initializeFacade(): void {
        super.initializeFacade();
        this.initializeModules();
    }

    /**
     * @inheritDoc
     */
    initializeModel(): void {
        super.initializeModel();
        this.registerProxy(new BackgroundAnimationProxy(ProxiesNames.BACKGROUND_ANIMATION_PROXY_NAME));
    }

    /**
     * @inheritDoc
     */
    initializeView(): void {
        this.view = null;
        View.instanceMap[Keys.FACADE_KEY] = null;
        this.view = MainView.getInstance(Keys.FACADE_KEY);
    }

    /**
     * @inheritDoc
     */
    initializeController(): void {
        super.initializeController();
        this.registerCommand(Notifications.LOAD_PIXI_SPINE, LoadPixiSpineCommand);
    }


    /**
     * Initializes the modules
     */
    private initializeModules() {
        this.sendNotification(Notifications.INITIALIZE_MODULES);
    }
}
