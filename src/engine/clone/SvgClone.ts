import { ICloneProcessor } from "../clone/processors/ICloneProcessor";

export class SvgClone implements ICloneProcessor {

    public process(
        source: HTMLElement,
        clone: HTMLElement
    ): void {

        const originals =
            source.querySelectorAll("svg");

        const copies =
            clone.querySelectorAll("svg");

        const length =
            Math.min(
                originals.length,
                copies.length
            );

        for (let i = 0; i < length; i++) {

            const original = originals[i];
            const copy = copies[i];

            this.copyAttributes(
                original,
                copy
            );

        }

    }

    private copyAttributes(
        original: SVGSVGElement,
        copy: SVGSVGElement
    ): void {

        for (const attribute of original.getAttributeNames()) {

            const value =
                original.getAttribute(attribute);

            if (value !== null) {

                copy.setAttribute(
                    attribute,
                    value
                );

            }

        }

        copy.innerHTML = original.innerHTML;

    }

}