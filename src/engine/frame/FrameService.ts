import { CssBundle } from "../css/models/CssBundle";
import { Paper } from "../common/Paper";
import { PrintOptions } from "../../models/PrintOptions";

import { PrintStyleMaterializer }
    from "../css/snapshot/PrintStyleMaterializer";

import { PageBreakEngine }
    from "../layout/pagebreak/PageBreakEngine";

import { FrameBuilder } from "./FrameBuilder";
import { FrameStyler } from "./FrameStyler";
import { AssetLoader } from "./AssetLoader";
import { FramePrinter } from "./FramePrinter";

export class FrameService {

    private readonly builder =
        new FrameBuilder();

    private readonly styler =
        new FrameStyler();

    private readonly assets =
        new AssetLoader();

    private readonly printer =
        new FramePrinter();

    private readonly styleMaterializer =
        new PrintStyleMaterializer();

    private readonly pageBreakEngine =
        new PageBreakEngine();

    public async build(
        source: HTMLElement,
        clone: HTMLElement,
        css: CssBundle,
        paper: Paper,
        options: PrintOptions
    ): Promise<void> {

        console.log(
            "===== FrameService.build START ====="
        );

        /*
         * Diagnostic:
         * Verify source and clone DOM state.
         */
        console.log(
            "Source connected:",
            source.isConnected
        );

        console.log(
            "Source document:",
            source.ownerDocument === document
        );

        console.log(
            "Clone connected before iframe:",
            clone.isConnected
        );

        /*
         * STEP 1
         * Create isolated print iframe.
         */
        const frame =
            this.builder.create();

        console.log(
            "Print frame created"
        );

        /*
         * STEP 2
         * Inject collected application CSS
         * and generic print rules.
         */
        this.styler.apply(
            frame.document,
            css,
            paper,
            options
        );

        console.log(
            "Frame styles injected"
        );

        /*
         * STEP 3
         * Insert the existing pipeline clone.
         *
         * Do not clone again here because
         * CloneStage already created it.
         */
        frame.document.body.appendChild(
            clone
        );

        console.log(
            "Clone added to print frame"
        );

        /*
         * STEP 4
         * Wait for stylesheets, images,
         * fonts and other print assets.
         */
        console.log(
            "Starting AssetLoader"
        );

        await this.assets.wait(
            clone,
            frame.document
        );

        console.log(
            "AssetLoader completed"
        );

        /*
         * STEP 5
         * Preserve print-sensitive visual styles
         * from the live source DOM.
         *
         * source = live rendered application DOM
         * clone  = print iframe DOM
         */
        this.styleMaterializer.apply(
            source,
            clone
        );

        console.log(
            "Print-sensitive visual styles materialized"
        );

        /*
         * STEP 6
         * Allow Chromium to calculate the layout
         * after styles have been materialized.
         *
         * This is important because the page-break
         * engine should analyze final element sizes.
         */
        await this.waitForPaint(
            frame.window
        );

        console.log(
            "Pre-pagination layout completed"
        );

        /*
         * STEP 7
         * Analyze print content and apply
         * intelligent page-break rules.
         */
        this.pageBreakEngine.process(
            clone,
            paper
        );

        console.log(
            "Page-break rules applied"
        );

        /*
         * STEP 8
         * Wait again because page-break rules
         * may affect browser layout.
         */
        await this.waitForPaint(
            frame.window
        );

        console.log(
            "Final print frame layout completed"
        );

        /*
         * STEP 9
         * Store the fully prepared frame.
         */
        this.printer.setFrame(
            frame
        );

        console.log(
            "===== FrameService.build END ====="
        );

    }

    public async print(): Promise<void> {

        await this.printer.print();

    }

    public destroy(): void {

        this.printer.destroy();

    }

    /**
     * Waits for two Chromium rendering cycles.
     *
     * First frame:
     * Layout recalculation.
     *
     * Second frame:
     * Painting completion.
     */
    private waitForPaint(
        windowRef: Window
    ): Promise<void> {

        return new Promise<void>(
            resolve => {

                windowRef.requestAnimationFrame(
                    () => {

                        windowRef.requestAnimationFrame(
                            () => {

                                resolve();

                            }
                        );

                    }
                );

            }
        );

    }

}