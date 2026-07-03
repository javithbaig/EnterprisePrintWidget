import { PAPER_SIZES } from "../constants/PaperSizes";
import { PrintOptions } from "../models/PrintOptions";
import { Paper } from "../models/Paper";
import { UnitConverter } from "../utils/UnitConverter";
//import { Orientation } from "../enums/Orientation";

export class LayoutService {

    public getPaper(options: PrintOptions): Paper {

        const paper =
            PAPER_SIZES[options.paperSize][options.orientation];

        return {

            size: options.paperSize,

            orientation: options.orientation,

            width: paper.width,

            height: paper.height,

            printableWidth:
                paper.width -
                options.marginLeft -
                options.marginRight,

            printableHeight:
                paper.height -
                options.marginTop -
                options.marginBottom,

            marginTop: options.marginTop,

            marginRight: options.marginRight,

            marginBottom: options.marginBottom,

            marginLeft: options.marginLeft

        };

    }

    public getPrintableWidthPx(
        paper: Paper
    ): number {

        return UnitConverter.mmToPx(
            paper.printableWidth
        );

    }

    public getPrintableHeightPx(
        paper: Paper
    ): number {

        return UnitConverter.mmToPx(
            paper.printableHeight
        );

    }

    /**
 * Detects whether the cloned content exceeds the printable width.
 */
    public detectOverflow(
        root: HTMLElement,
        paper: Paper
    ): boolean {

        const printableWidth =
            this.getPrintableWidthPx(paper);

        return root.scrollWidth > printableWidth;

    }

    public calculateScale(
    root: HTMLElement,
    paper: Paper
): number {

    const printableWidth =
        this.getPrintableWidthPx(paper);

    const contentWidth =
        root.scrollWidth;

    if (contentWidth <= printableWidth) {
        return 1;
    }

    return printableWidth / contentWidth;

}

}