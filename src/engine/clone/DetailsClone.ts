import { ICloneProcessor } from "../clone/processors/ICloneProcessor";

export class DetailsClone implements ICloneProcessor {

    public process(
        source: HTMLElement,
        clone: HTMLElement
    ): void {

        const originals =
            source.querySelectorAll("details");

        const copies =
            clone.querySelectorAll("details");

        const length =
            Math.min(
                originals.length,
                copies.length
            );

        for (let i = 0; i < length; i++) {

            const original = originals[i];
            const copy = copies[i];

            if (
                original instanceof HTMLDetailsElement &&
                copy instanceof HTMLDetailsElement
            ) {
                copy.open = original.open;
            }

        }

    }

}