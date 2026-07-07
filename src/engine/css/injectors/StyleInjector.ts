import { Logger } from "../../../utils/Logger";

export class StyleInjector {

    public inject(
        documentRef: Document,
        styles: HTMLStyleElement[]
    ): void {

        Logger.group("StyleInjector");

        const injected = new Set<string>();

        let count = 0;

        for (const style of styles) {

            const css = style.textContent?.trim();

            if (!css) {
                continue;
            }

            if (injected.has(css)) {
                continue;
            }

            const clone = documentRef.createElement("style");

            clone.type = style.type || "text/css";
            clone.media = style.media || "all";
            clone.textContent = css;

            if (style.nonce) {
                clone.nonce = style.nonce;
            }

            documentRef.head.appendChild(clone);

            injected.add(css);

            count++;

        }

        Logger.info(`Injected ${count} inline stylesheet(s)`);

        Logger.groupEnd();

    }

}