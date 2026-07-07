import { FrameService } from "../../frame/FrameService";
import { IPipelineStage } from "../IPipelineStage";
import { RenderContext } from "../RenderContext";

export class OutputStage implements IPipelineStage {

    constructor(
        private readonly frameService = new FrameService()
    ) {}

    public async execute(
        _context: RenderContext
    ): Promise<void> {
        console.log("OutputStage");
        await this.frameService.print();

    }

}