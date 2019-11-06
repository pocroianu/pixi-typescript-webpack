/*
 * Created By Geani Pocroianu on 11/6/19 8:35 PM
 */

import Facade = puremvc.Facade;
import {LoadPixiSpineCommand} from "../commands/load-pixi-spine-command";
import {BackgroundAnimationMediator} from "../mediators/background-animation-mediator";
import {Notifications} from "../static/notifications";
import {BackgroundAnimationView} from "../views/background-animation-view";
import {BackgroundAnimationProxy} from "../proxy/background-animation-proxy";
import {Keys} from "../static/keys";
import {Parameters} from "../static/parameters";
import {MediatorNames, ProxiesNames, ViewsNames} from "../static/names";

export class MyFacade extends Facade {

    private _pixiApp: PIXI.Application;

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
        this.initializePixiApp();
        this.registerCommands();
        this.registerMediators();
        this.registerProxies();
        this.initializeModules();
    }

    /**
     * Initializes the PIXI Application
     */
    protected initializePixiApp(): void {
        this._pixiApp = new PIXI.Application(window.innerWidth, window.innerHeight, Parameters.PIXI_APPLICATION_SETTINGS);
        document.body.appendChild(this._pixiApp.view);

        this._pixiApp.start();

        this._pixiApp.ticker.add((delta) => {
        });
    }

    /**
     * Registers the commands
     */
    protected registerCommands(): void {
        this.registerCommand(Notifications.LOAD_PIXI_SPINE, LoadPixiSpineCommand);
    }

    /**
     * Registers the mediators
     */
    protected registerMediators(): void {
        this.registerMediator(
            new BackgroundAnimationMediator(MediatorNames.BACKGROUND_ANIMATION_VIEW_NAME,
                new BackgroundAnimationView(ViewsNames.BACKGROUND_ANIMATION_NAME, this._pixiApp.stage)));
    }

    /**
     * Registers the proxies
     */
    protected registerProxies(): void {
        this.registerProxy(new BackgroundAnimationProxy(ProxiesNames.BACKGROUND_ANIMATION_PROXY_NAME));
    }

    /**
     * Initializes the modules
     */
    private initializeModules() {
        this.sendNotification(Notifications.INITIALIZE_MODULES);
    }
}
