/*
 * Created By Geani Pocroianu on 11/13/19 9:04 PM
 */

import Mediator = puremvc.Mediator;
import {Notifications} from "../static/notifications";
import {SpineAnimationUiComponent} from "../ui-components/spine-animation-ui-component";
import {ProxiesNames} from "../static/names";
import {SpineAnimationProxy} from "../proxy/spine-animation-proxy";
import {MainFacade} from "../facade/main-facade";

export class SpineAnimationMediator extends Mediator {

    protected _spineAnimationProxy: SpineAnimationProxy;

    /**
     * Initializes the proxies needed for this mediator
     */
    protected initializeProxies(): void {
        if (this._spineAnimationProxy === undefined) {
            this._spineAnimationProxy = MainFacade.getInstance().retrieveProxy(ProxiesNames.SPINE_ANIMATION_PROXY) as SpineAnimationProxy;
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
    getViewComponent(): SpineAnimationUiComponent {
        return super.getViewComponent();
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

    protected loadSpine(): void {
        this.sendNotification(Notifications.LOAD_PIXI_SPINE,
            {
                spineName: this._spineAnimationProxy.animationName
            });
    }

    protected onSpineLoaded(spine): void {
        this.getViewComponent().initializeSpineAnimation(spine);
    }

}