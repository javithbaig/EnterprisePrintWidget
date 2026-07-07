import { CssBundle } from "../models/CssBundle";

export class MediaInjector {

    public inject(
        bundle: CssBundle,
        documentRef: Document
    ): void {

        bundle.media.forEach(rule => {

            const style = documentRef.createElement("style");

            style.textContent = rule.cssText;

            documentRef.head.appendChild(style);

        });

    }

}