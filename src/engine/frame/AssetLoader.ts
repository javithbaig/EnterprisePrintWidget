import { Logger } from "../../utils/Logger";

import { ImageLoader } from "./ImageLoader";
//import { FontLoader } from "./FontLoader";
import { CanvasLoader } from "./CanvasLoader";
import { SvgLoader } from "./SvgLoader";
import { VideoLoader } from "./VideoLoader";

export class AssetLoader {

    private readonly imageLoader = new ImageLoader();

    //private readonly fontLoader = new FontLoader();

    private readonly canvasLoader = new CanvasLoader();

    private readonly svgLoader = new SvgLoader();

    private readonly videoLoader = new VideoLoader();

    public async wait(root: HTMLElement): Promise<void> {

        Logger.group("AssetLoader");

        await this.imageLoader.wait(root);

        //await this.fontLoader.wait(documentRef);

        await this.canvasLoader.wait(root);

        await this.svgLoader.wait(root);

        await this.videoLoader.wait(root);

        Logger.info("All assets loaded.");

        Logger.groupEnd();

    }

}