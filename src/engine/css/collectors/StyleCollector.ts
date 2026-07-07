import { Logger } from "../../../utils/Logger";

export class StyleCollector {

    public collect(
        documentRef: Document = document
    ): HTMLStyleElement[] {

        Logger.group("StyleCollector");

        const styles: HTMLStyleElement[] = [];

        documentRef.querySelectorAll("style").forEach(node => {

            // Ignore SVG styles for now
            if (node.namespaceURI !== "http://www.w3.org/1999/xhtml") {

                Logger.info(
                    `Skipping non-HTML style (${node.namespaceURI})`
                );

                return;

            }

            styles.push(
                node.cloneNode(true) as HTMLStyleElement
            );

        });

        Logger.info(
            `Collected ${styles.length} HTML style tag(s).`
        );

        Logger.groupEnd();

        return styles;

    }

}