/*
 * Created By Geani Pocroianu on 11/6/19 8:35 PM
 */

import SimpleCommand = puremvc.SimpleCommand;
import {Notifications} from "../static/notifications";
import Spine = PIXI.spine.Spine;

export class LoadPixiSpineCommand extends SimpleCommand {

    execute(notification: puremvc.INotification): void {
        super.execute(notification);

        console.log('Spine Loaded');

        // Loading the spine into the PIXI loader
        PIXI.loader
            .add('spine', notification.getBody().spineName)
            .load((loader, resources) => {

                // Creating the pixi spine
                let spine: Spine = new PIXI.spine.Spine(resources.spine.spineData);

                this.sendNotification(Notifications.SEND_SPINE_RESOURCES, {
                    spine: spine
                });
            });
    }
}

