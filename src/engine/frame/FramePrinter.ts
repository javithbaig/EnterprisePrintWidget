import { PrintFrame } from "../common/PrintFrame";

export class FramePrinter {

    private frame: PrintFrame | null = null;

    public setFrame(
        frame: PrintFrame
    ): void {

        this.frame = frame;

    }

    public async print(): Promise<void> {

        if (!this.frame) {
            return;
        }

        await new Promise(resolve =>
            setTimeout(resolve, 300)
        );

        this.frame.window.focus();

        this.frame.window.print();

    }

    public destroy(): void {

        if (!this.frame) {
            return;
        }

        this.frame.iframe.remove();

        this.frame = null;

    }

}