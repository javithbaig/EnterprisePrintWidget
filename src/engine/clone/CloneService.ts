import { Logger } from "../../utils/Logger";

export class CloneService {

    public clone(source: HTMLElement): HTMLElement {

        Logger.group("Clone Service");

        const clone = source.cloneNode(true) as HTMLElement;

        this.copyFormControls(source, clone);
        this.copyCanvas(source, clone);
        this.copySvg(source, clone);
        this.copyVideo(source, clone);
        this.copyScrollPositions(source, clone);
        this.copyDetailsState(source, clone);

        Logger.groupEnd();

        return clone;
    }

    private copyFormControls(
        source: HTMLElement,
        clone: HTMLElement
    ): void {

        const originals = source.querySelectorAll<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >("input, textarea, select");

        const copies = clone.querySelectorAll<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >("input, textarea, select");

        originals.forEach((original, index) => {

            const copy = copies[index];

            if (!copy) {
                return;
            }

            if (
                original instanceof HTMLInputElement &&
                copy instanceof HTMLInputElement
            ) {

                copy.value = original.value;
                copy.checked = original.checked;

                return;
            }

            if (
                original instanceof HTMLTextAreaElement &&
                copy instanceof HTMLTextAreaElement
            ) {

                copy.value = original.value;

                return;
            }

            if (
                original instanceof HTMLSelectElement &&
                copy instanceof HTMLSelectElement
            ) {

                copy.selectedIndex = original.selectedIndex;

            }

        });

    }

    private copyCanvas(
        source: HTMLElement,
        clone: HTMLElement
    ): void {

        const originals = source.querySelectorAll("canvas");
        const copies = clone.querySelectorAll("canvas");

        originals.forEach((canvas, index) => {

            const copy = copies[index];

            if (!(copy instanceof HTMLCanvasElement)) {
                return;
            }

            const context = copy.getContext("2d");

            if (!context) {
                return;
            }

            context.drawImage(canvas, 0, 0);

        });

    }

    /**
     * Placeholder.
     * We'll improve this later.
     */
    private copySvg(
        _source: HTMLElement,
        _clone: HTMLElement
    ): void {
        // V2
    }

    /**
     * Placeholder.
     */
    private copyVideo(
        _source: HTMLElement,
        _clone: HTMLElement
    ): void {
        // V2
    }

    private copyScrollPositions(
        source: HTMLElement,
        clone: HTMLElement
    ): void {

        const originals =
            source.querySelectorAll<HTMLElement>("*");

        const copies =
            clone.querySelectorAll<HTMLElement>("*");

        originals.forEach((original, index) => {

            const copy = copies[index];

            if (!copy) {
                return;
            }

            copy.scrollTop = original.scrollTop;
            copy.scrollLeft = original.scrollLeft;

        });

    }

    /**
     * Preserve <details> expanded state.
     */
    private copyDetailsState(
        source: HTMLElement,
        clone: HTMLElement
    ): void {

        const originals =
            source.querySelectorAll("details");

        const copies =
            clone.querySelectorAll("details");

        originals.forEach((detail, index) => {

            const copy = copies[index];

            if (
                copy instanceof HTMLDetailsElement &&
                detail instanceof HTMLDetailsElement
            ) {

                copy.open = detail.open;

            }

        });

    }

}