import { CloneService } from "../../clone/CloneService";
import { IPipelineStage } from "../IPipelineStage";
import { RenderContext } from "../RenderContext";

export class CloneStage implements IPipelineStage {

    constructor(
        private readonly cloneService: CloneService = new CloneService()
    ) {}
    
    public async execute(
        context: RenderContext
    ): Promise<void> {
        console.log("CloneStage");
        context.clone = this.cloneService.clone(
            context.source
        );

    }

}