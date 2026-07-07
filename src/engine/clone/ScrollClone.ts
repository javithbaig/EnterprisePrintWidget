import { ICloneProcessor } from "../clone/processors/ICloneProcessor";

export class ScrollClone implements ICloneProcessor {

    public process(
        source: HTMLElement,
        clone: HTMLElement
    ): void {

        this.copyWindowScroll();

        const originals =
            source.querySelectorAll<HTMLElement>("*");

        const copies =
            clone.querySelectorAll<HTMLElement>("*");

        const length =
            Math.min(
                originals.length,
                copies.length
            );

        for (let i = 0; i < length; i++) {

            this.copyElementScroll(
                originals[i],
                copies[i]
            );

        }

    }

    /**
     * Copies scroll position of one element.
     */
    private copyElementScroll(
        original: HTMLElement,
        copy: HTMLElement
    ): void {

        requestAnimationFrame(() => {

            copy.scrollTop = original.scrollTop;

            copy.scrollLeft = original.scrollLeft;

        });

    }

    /**
     * Preserves page scroll position.
     */
    private copyWindowScroll(): void {

        const x = window.scrollX;

        const y = window.scrollY;

        requestAnimationFrame(() => {

            window.scrollTo(x, y);

        });

    }

}