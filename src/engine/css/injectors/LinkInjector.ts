import { Logger } from "../../../utils/Logger";

export class LinkInjector {

    public inject(
        documentRef: Document,
        links: HTMLLinkElement[]
    ): void {

        Logger.group("LinkInjector");

        const injected = new Set<string>();

        let count = 0;

        for (const link of links) {

            if (!link.href) {
                continue;
            }

            if (injected.has(link.href)) {
                continue;
            }

            const clone = link.cloneNode(true) as HTMLLinkElement;

            documentRef.head.appendChild(clone);

            injected.add(link.href);

            count++;

        }

        Logger.info(`Injected ${count} stylesheet(s)`);

        Logger.groupEnd();

    }

}