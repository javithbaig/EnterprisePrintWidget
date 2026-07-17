import { PrintFrame } from "../common/PrintFrame";

export class FramePrinter {

    private frame?: PrintFrame;

    public setFrame(
        frame: PrintFrame
    ): void {

        this.frame = frame;

        console.log(
            "Print frame stored."
        );

    }

    public async print(): Promise<void> {

        console.log(
            "===== FramePrinter.print START ====="
        );

        if (!this.frame) {
            throw new Error(
                "Print frame has not been created."
            );
        }

        const printWindow =
            this.frame.window;

        console.log(
            "Print window:",
            printWindow
        );

        printWindow.focus();

        console.log(
            "Calling window.print()"
        );

        printWindow.print();

        console.log(
            "window.print() completed"
        );

        console.log(
            "===== FramePrinter.print END ====="
        );

    }

    public destroy(): void {

        if (!this.frame) {
            return;
        }

        this.frame.iframe.remove();

        this.frame = undefined;

    }

}