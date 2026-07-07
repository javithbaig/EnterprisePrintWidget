import { IPipelineStage } from "../IPipelineStage";
import { RenderContext } from "../RenderContext";
import { PaginationService } from "../../pagination/PaginationService";

export class PaginationStage implements IPipelineStage {

    private readonly pagination =
        new PaginationService();

    public async execute(
        context: RenderContext
    ): Promise<void> {

        if (!context.clone || !context.paper) {
            throw new Error(
                "Pagination requires clone and paper."
            );
        }

        this.pagination.paginate(
            context.clone,
            context.paper
        );

        context.pageCount =
            this.pagination.calculatePages(
                context.clone,
                context.paper
            );

    }

}