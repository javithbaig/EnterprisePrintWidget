import { ICloneProcessor } from "../clone/processors/ICloneProcessor";

export class VideoClone implements ICloneProcessor {

    public process(
        source: HTMLElement,
        clone: HTMLElement
    ): void {

        const originals =
            source.querySelectorAll("video");

        const copies =
            clone.querySelectorAll("video");

        const length =
            Math.min(
                originals.length,
                copies.length
            );

        for (let i = 0; i < length; i++) {

            const original = originals[i];
            const copy = copies[i];

            copy.poster = original.poster;
            copy.currentTime = original.currentTime;
            copy.muted = true;

        }

    }

}