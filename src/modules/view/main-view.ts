/*
 * Created By Geani Pocroianu on 11/8/19 9:04 PM
 */

import View = puremvc.View;
import Container = PIXI.Container;
import WebGLRenderer = PIXI.WebGLRenderer;
import CanvasRenderer = PIXI.CanvasRenderer;
import {Parameters} from "../static/parameters";
import {SpineAnimationMediator} from "../mediators/spine-animation-mediator";
import {SpineAnimationUiComponent} from "../ui-components/spine-animation-ui-component";
import {MediatorNames} from "../static/names";

export class MainView extends View {

    private _pixiStage: Container;
    private _pixiRenderer: WebGLRenderer | CanvasRenderer;

    /**
     *
     * @param key
     */
    static getInstance(key: string): MainView {
        if (!View.instanceMap[key]) {
            View.instanceMap[key] = new MainView(key);
        }
        return View.instanceMap[key] as MainView;
    }

    /**
     * @inheritDoc
     */
    initializeView(): void {
        super.initializeView();
        this.createPixiApplication();
        this.registerMediators();
        this.addGraphics();
        this.startRendering();
    }

    protected registerMediators(): void {
        let spineAnimationUiComponent: Container = new SpineAnimationUiComponent();
        this.registerMediator(new SpineAnimationMediator(MediatorNames.SPINE_ANIMATION_MEDIATOR, spineAnimationUiComponent));
        this.addUiComponent(spineAnimationUiComponent);
    }

    protected addUiComponent(uiComponent: Container): void {
        this._pixiStage.addChild(uiComponent);
    }

    /**
     * Creates the PIXI Application
     */
    protected createPixiApplication(): void {
        this._pixiRenderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, Parameters.PIXI_APPLICATION_SETTINGS);
        document.body.appendChild(this._pixiRenderer.view);

        // create the root of the scene graph
        this._pixiStage = new PIXI.Container();
    }


    protected addGraphics(): void {
        let graphics = new PIXI.Graphics();

        // set a fill and line style
        graphics.beginFill(0xFF3300);
        graphics.lineStyle(4, 0xffd900, 1);

        // draw a shape
        graphics.moveTo(50, 50);
        graphics.lineTo(250, 50);
        graphics.lineTo(100, 100);
        graphics.lineTo(50, 50);
        graphics.endFill();

        // set a fill and a line style again and draw a rectangle
        graphics.lineStyle(2, 0x0000FF, 1);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(50, 250, 120, 120);

        // draw a rounded rectangle
        graphics.lineStyle(2, 0xFF00FF, 1);
        graphics.beginFill(0xFF00BB, 0.25);
        graphics.drawRoundedRect(150, 450, 300, 100, 15);
        graphics.endFill();

        // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        graphics.lineStyle(0);
        graphics.beginFill(0xFFFF0B, 0.5);
        graphics.drawCircle(470, 90, 60);
        graphics.endFill();

        this._pixiStage.addChild(graphics);

    }

    /**
     * Starts the rendering process of the PIXI Application
     */
    protected startRendering(): void {
        let animate = () => {
            this._pixiRenderer.render(this._pixiStage);
            requestAnimationFrame(animate);
        };

        // run the render loop
        animate();
    }


}