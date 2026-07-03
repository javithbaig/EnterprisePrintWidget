import { CloneService } from "../clone/CloneService";
import { CssService } from "../css/CssService";
import { FrameService } from "../frame/FrameService";
import { LayoutService } from "../layout/LayoutService";

import { PrintOptions } from "../../models/PrintOptions";

/**
 * Browser print output.
 *
 * Responsible for rendering the cloned document
 * into an isolated iframe and invoking the browser
 * print dialog.
 */
export class BrowserPrint {

    constructor(
        private readonly cloneService = new CloneService(),
        private readonly cssService = new CssService(),
        private readonly layoutService = new LayoutService(),
        private readonly frameService = new FrameService()
    ) {}

    /**
     * Print an HTML element.
     *
     * @param source HTML element to print.
     * @param options Print options.
     */
    public async print(
        source: HTMLElement,
        options: PrintOptions
    ): Promise<void> {

        console.log("Enterprise Document Engine");

        // Clone DOM
        const clonedRoot = this.cloneService.clone(source);

        // Collect CSS
        const cssBundle = this.cssService.collect();

        // Calculate paper/layout
        const paper = this.layoutService.getPaper(options);

        // Build iframe
        await this.frameService.build(
            clonedRoot,
            cssBundle,
            paper,
            options
        );

        // Print
        await this.frameService.print();

    }

}