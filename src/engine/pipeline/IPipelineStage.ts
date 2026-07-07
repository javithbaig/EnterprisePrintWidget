import { RenderContext } from "./RenderContext";

export interface IPipelineStage {

    execute(
        context: RenderContext
    ): Promise<void>;

}