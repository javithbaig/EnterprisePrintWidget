import { CssService } from "../../css/CssService";
import { IPipelineStage } from "../IPipelineStage";
import { RenderContext } from "../RenderContext";

export class CssStage implements IPipelineStage {

    constructor(
        private readonly cssService = new CssService()
    ) {}

    public async execute(
        context: RenderContext
    ): Promise<void> {
        console.log("CssStage");
        context.css = this.cssService.collect();

    }

}