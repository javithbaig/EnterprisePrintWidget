import { FrameService } from "../../frame/FrameService";
import { IPipelineStage } from "../IPipelineStage";
import { RenderContext } from "../RenderContext";

export class OutputStage implements IPipelineStage {

    constructor(
        private readonly frameService: FrameService
    ) {}

    public async execute(
        _context: RenderContext
    ): Promise<void> {

        console.log(
            "===== OutputStage START ====="
        );

        console.log(
            "Calling FrameService.print()"
        );

        await this.frameService.print();

        console.log(
            "FrameService.print() completed"
        );

        console.log(
            "===== OutputStage END ====="
        );

    }

}