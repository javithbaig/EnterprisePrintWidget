import { Logger } from "../../../utils/Logger";
import { IPipelineStage } from "../IPipelineStage";
import { RenderContext } from "../RenderContext";
import { LayoutService } from "../../layout/LayoutService";

export class LayoutStage implements IPipelineStage {

    constructor(
        private readonly layoutService = new LayoutService()
    ) {}

    public async execute(
        context: RenderContext
    ): Promise<void> {

        Logger.group("LayoutStage");

        if (!context.clone) {
            throw new Error("Clone element not available.");
        }

        // Calculate paper
        context.paper = this.layoutService.getPaper(
            context.options
        );

        // Prepare responsive layout
        this.layoutService.prepare(
            context.clone
        );

        // Detect overflow
        const overflow =
            this.layoutService.detectOverflow(
                context.clone,
                context.paper
            );

        //console.log("Overflow:", overflow);

        // Calculate scale
        const scale =
            this.layoutService.calculateScale(
                context.clone,
                context.paper
            );

        context.overflow = overflow;
        context.scale = scale;

        Logger.info(`Overflow: ${context.overflow}`);
        Logger.info(`Scale: ${context.scale}`);

        Logger.groupEnd();

    }

}