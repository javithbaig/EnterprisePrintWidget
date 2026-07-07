import { CssBundle } from "../css/models/CssBundle";
import { Paper } from "../common/Paper";
import { PrintOptions } from "../../models/PrintOptions";
import { FrameBuilder } from "./FrameBuilder";
import { FrameStyler } from "./FrameStyler";
import { AssetLoader } from "./AssetLoader";
import { FramePrinter } from "./FramePrinter"; 
import { FontLoader } from "./FontLoader"; 

export class FrameService {

    private readonly builder = new FrameBuilder();

    private readonly styler = new FrameStyler();

    private readonly assets = new AssetLoader();

    private readonly fonts = new FontLoader();

    private readonly printer = new FramePrinter();

    public async build(
        root: HTMLElement,
        css: CssBundle,
        paper: Paper,
        options: PrintOptions
    ): Promise<void> {

        const frame = this.builder.create();

        this.styler.apply(
            frame.document,
            css,
            paper,
            options
        );

        const clone = root.cloneNode(true) as HTMLElement;

        frame.document.body.appendChild(clone);

        // Wait for images, canvas, svg, etc.
        await this.assets.wait(clone);

        // Wait for fonts in the PRINT FRAME
        await this.fonts.wait(frame.document);

        this.printer.setFrame(frame);

    }

    public async print(): Promise<void> {

        await this.printer.print();

    }

    public destroy(): void {

        this.printer.destroy();

    }

}