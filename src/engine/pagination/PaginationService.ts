import { Paper } from "../common/Paper";
import { PageBreakManager } from "./PageBreakManager";

export class PaginationService {

    private readonly pageBreaks =
        new PageBreakManager();

    public paginate(
        root: HTMLElement,
        paper: Paper
    ): void {

        this.pageBreaks.process(
            root,
            paper
        );

    }

    public calculatePages(
        root: HTMLElement,
        paper: Paper
    ): number {

        const printableHeight =
            paper.printableHeight * 3.779527559;

        return Math.ceil(
            root.scrollHeight / printableHeight
        );

    }

}