/*
 * Created By Geani Pocroianu on 11/6/19 8:35 PM
 */

import Facade = puremvc.Facade;
import {LoadPixiSpineCommand} from "../commands/load-pixi-spine-command";
import {Notifications} from "../static/notifications";
import {Keys} from "../static/keys";
import {ProxiesNames,} from "../static/names";
import {MainView} from "../view/main-view";
import View = puremvc.View;
import {SpineAnimationProxy} from "../proxy/spine-animation-proxy";

export class MainFacade extends Facade {

    /**
     * Returns the instance of MyFacade
     */
    public static getInstance(): MainFacade {
        if (Keys.FACADE_KEY === undefined) {
            return undefined;
        }
        return Facade.instanceMap[Keys.FACADE_KEY];
    }

    /**
     * @inheritDoc
     */
    initializeFacade(): void {
        this.initializeView();
        this.initializeModel();
        this.initializeController();
        this.registerCommands();
        this.initializeModules();
    }

    /**
     * @inheritDoc
     */
    initializeModel(): void {
        super.initializeModel();
        this.registerProxy(new SpineAnimationProxy(ProxiesNames.SPINE_ANIMATION_PROXY));
    }

    /**
     * @inheritDoc
     */
    initializeView(): void {
        this.view = null;
        View.instanceMap[Keys.FACADE_KEY] = null;
        this.view = MainView.getInstance(Keys.FACADE_KEY);
    }

    initializeController(): void {
        super.initializeController();
    }

    protected registerCommands(): void {
        this.registerCommand(Notifications.LOAD_PIXI_SPINE, LoadPixiSpineCommand);
    }

    /**
     * Initializes the modules
     */
    private initializeModules() {
        this.sendNotification(Notifications.INITIALIZE_MODULES);
    }
}
