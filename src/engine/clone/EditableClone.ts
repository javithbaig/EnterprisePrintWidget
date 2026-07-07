import { ICloneProcessor } from "../clone/processors/ICloneProcessor";

export class EditableClone implements ICloneProcessor {

    public process(
        source: HTMLElement,
        clone: HTMLElement
    ): void {

        const originals =
            source.querySelectorAll("[contenteditable]");

        const copies =
            clone.querySelectorAll("[contenteditable]");

        const length =
            Math.min(
                originals.length,
                copies.length
            );

        for (let i = 0; i < length; i++) {

            copies[i].innerHTML =
                originals[i].innerHTML;

        }

    }

}