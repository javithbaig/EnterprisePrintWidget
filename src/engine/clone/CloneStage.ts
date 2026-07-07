import { CloneService } from "./CloneService";
import { IPipelineStage } from "../pipeline/IPipelineStage";
import { RenderContext } from "../pipeline/RenderContext";

export class CloneStage implements IPipelineStage {

    constructor(
        private readonly cloneService = new CloneService()
    ) {}

    public async execute(
        context: RenderContext
    ): Promise<void> {

        context.clone = this.cloneService.clone(
            context.source
        );

    }

}