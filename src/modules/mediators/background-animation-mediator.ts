/*
 * Created By Geani Pocroianu
 */

import Mediator = puremvc.Mediator;
import {Notifications} from "../static/notifications";
import {BackgroundAnimationProxy} from "../proxy/background-animation-proxy";
import {MyFacade} from "../facade/my-facade";
import {BackgroundAnimationView} from "../views/background-animation-view";
import {ProxiesNames} from "../static/names";

export class BackgroundAnimationMediator extends Mediator {

    protected _backgroundAnimationProxy: BackgroundAnimationProxy;

    /**
     * Initializes the proxies needed for this mediator
     */
    protected initializeProxies(): void {
        if (this._backgroundAnimationProxy === undefined) {
            this._backgroundAnimationProxy = MyFacade.getInstance().retrieveProxy(ProxiesNames.BACKGROUND_ANIMATION_PROXY_NAME) as BackgroundAnimationProxy;
        }
    }

    /**
     * @inheritDoc
     * @param viewComponent
     */
    setViewComponent(viewComponent: any): void {
        super.setViewComponent(viewComponent);
    }

    /**
     * @inheritDoc
     */
    getViewComponent(): BackgroundAnimationView {
        return super.getViewComponent() ;
    }

    /**
     * @inheritDoc
     */
    listNotificationInterests(): string[] {
        return [
            Notifications.SEND_SPINE_RESOURCES,
            Notifications.INITIALIZE_MODULES];
    }

    /**
     * @inheritDoc
     * @param notification
     */
    handleNotification(notification: puremvc.INotification): void {
        super.handleNotification(notification);
        switch (notification.getName()) {
            case Notifications.INITIALIZE_MODULES:
                this.initializeProxies();
                this.loadSpine();
                break;
            case Notifications.SEND_SPINE_RESOURCES:
                this.onSpineLoaded(notification.getBody().spine);
                break;
        }
    }

    private loadSpine(): void {
        this.sendNotification(Notifications.LOAD_PIXI_SPINE,
            {
                spineName: this._backgroundAnimationProxy.animationName
            });
    }

    onSpineLoaded(spine): void {
        this.getViewComponent().initializeBackgroundAnimation(spine);
    }
}