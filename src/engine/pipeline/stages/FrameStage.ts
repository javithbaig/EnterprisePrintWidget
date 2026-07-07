import { FrameService } from "../../frame/FrameService";
import { IPipelineStage } from "../IPipelineStage";
import { RenderContext } from "../RenderContext";

export class FrameStage implements IPipelineStage {

    constructor(
        private readonly frameService: FrameService
    ) {}

    public async execute(
        context: RenderContext
    ): Promise<void> {
        console.log("FrameStage");
        if (!context.clone) {
            throw new Error("Clone is missing.");
        }

        if (!context.css) {
            throw new Error("CSS bundle is missing.");
        }

        if (!context.paper) {
            throw new Error("Paper definition is missing.");
        }

        await this.frameService.build(
            context.clone,
            context.css,
            context.paper,
            context.options
        );

    }

}