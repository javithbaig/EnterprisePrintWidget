/**
 * Collects all external stylesheet links.
 */
export class LinkCollector {

    /**
     * Collect all active stylesheet links.
     *
     * @returns Cloned HTMLLinkElement collection.
     */
    public collect(): HTMLLinkElement[] {

        const links = Array.from(
            document.querySelectorAll<HTMLLinkElement>(
                'link[rel="stylesheet"]'
            )
        );

        return links
            .filter(link => !link.disabled && !!link.href)
            .map(link => link.cloneNode(true) as HTMLLinkElement);

    }

}