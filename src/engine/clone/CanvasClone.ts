import { ICloneProcessor } from "../clone/processors/ICloneProcessor";

export class CanvasClone implements ICloneProcessor {

    public process(
        source: HTMLElement,
        clone: HTMLElement
    ): void {

        const originals =
            source.querySelectorAll("canvas");

        const copies =
            clone.querySelectorAll("canvas");

        const length =
            Math.min(
                originals.length,
                copies.length
            );

        for (let i = 0; i < length; i++) {

            const original =
                originals[i];

            const copy =
                copies[i];

            if (!(copy instanceof HTMLCanvasElement)) {
                continue;
            }

            this.copyCanvas(
                original,
                copy
            );

        }

    }

    /**
     * Copies canvas pixels.
     */
    private copyCanvas(
        original: HTMLCanvasElement,
        copy: HTMLCanvasElement
    ): void {

        copy.width = original.width;
        copy.height = original.height;

        const context =
            copy.getContext("2d");

        if (!context) {
            return;
        }

        try {

            context.drawImage(
                original,
                0,
                0,
                original.width,
                original.height
            );

        }
        catch {

            // Cross-origin canvas
            // cannot be copied.
        }

    }

}