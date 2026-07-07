import { IPipelineStage } from "./IPipelineStage";
import { RenderContext } from "./RenderContext";

export class RenderPipeline {

    constructor(
        private readonly stages: IPipelineStage[]
    ) {}

    public async execute(
    context: RenderContext
): Promise<void> {

    console.log("========== RenderPipeline Started ==========");

    for (const stage of this.stages) {

        console.log("Executing Stage:", stage.constructor.name);

        await stage.execute(context);

    }

    console.log("========== RenderPipeline Finished ==========");

}

}