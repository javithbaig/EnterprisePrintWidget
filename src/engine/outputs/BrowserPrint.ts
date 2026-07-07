import { PrintOptions } from "../../models/PrintOptions";

import { FrameService } from "../frame/FrameService";

import { RenderPipeline } from "../pipeline/RenderPipeline";
import { RenderContext } from "../pipeline/RenderContext";

import { CloneStage } from "../pipeline/stages/CloneStage";
import { CssStage } from "../pipeline/stages/CssStage";
import { LayoutStage } from "../pipeline/stages/LayoutStage";
import { FrameStage } from "../pipeline/stages/FrameStage";
import { OutputStage } from "../pipeline/stages/OutputStage";

/**
 * Browser output implementation.
 */
export class BrowserPrint {

    /**
     * Prints an HTML element.
     */
    public async print(
        source: HTMLElement,
        options: PrintOptions
    ): Promise<void> {
        console.log("BrowserPrint.print()");
        const frameService = new FrameService();

        const pipeline = new RenderPipeline([

            new CloneStage(),

            new CssStage(),

            new LayoutStage(),

            new FrameStage(frameService),

            new OutputStage(frameService)

        ]);

        const context: RenderContext = {

            source,

            options

        };

        await pipeline.execute(context);

    }

}