import { Logger } from "../../../utils/Logger";

/**
 * Collects all external stylesheet links.
 */
export class LinkCollector {

    /**
     * Returns cloned stylesheet links.
     */
    public collect(
        documentRef: Document = document
    ): HTMLLinkElement[] {

        Logger.group("LinkCollector");

        const links = Array.from(
            documentRef.querySelectorAll<HTMLLinkElement>(
                'link[rel="stylesheet"]'
            )
        );

        Logger.info(
            `Collected ${links.length} stylesheet link(s).`
        );

        Logger.groupEnd();

        return links.map(link =>
            link.cloneNode(true) as HTMLLinkElement
        );

    }

}