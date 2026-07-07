import { ICloneProcessor } from "../clone/processors/ICloneProcessor";

export class FormClone implements ICloneProcessor {

    public process(
        source: HTMLElement,
        clone: HTMLElement
    ): void {

        const originals = source.querySelectorAll<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >("input, textarea, select");

        const copies = clone.querySelectorAll<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >("input, textarea, select");

        const length = Math.min(originals.length, copies.length);

        for (let i = 0; i < length; i++) {

            const original = originals[i];
            const copy = copies[i];

            if (
                original instanceof HTMLInputElement &&
                copy instanceof HTMLInputElement
            ) {
                copy.value = original.value;
                copy.checked = original.checked;
                copy.disabled = original.disabled;
                copy.readOnly = original.readOnly;
                continue;
            }

            if (
                original instanceof HTMLTextAreaElement &&
                copy instanceof HTMLTextAreaElement
            ) {
                copy.value = original.value;
                copy.disabled = original.disabled;
                copy.readOnly = original.readOnly;
                continue;
            }

            if (
                original instanceof HTMLSelectElement &&
                copy instanceof HTMLSelectElement
            ) {
                copy.selectedIndex = original.selectedIndex;
                copy.disabled = original.disabled;
            }

        }

    }

}