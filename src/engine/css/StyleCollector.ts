/**
 * Collects all inline <style> elements from the current document.
 */
export class StyleCollector {

    /**
     * Collect all non-empty inline style elements.
     *
     * @returns Cloned HTMLStyleElement collection.
     */
    public collect(): HTMLStyleElement[] {

        const styles = Array.from(
            document.querySelectorAll<HTMLStyleElement>("style")
        );

        return styles
            .filter(style => style.textContent?.trim().length)
            .map(style => style.cloneNode(true) as HTMLStyleElement);

    }

}