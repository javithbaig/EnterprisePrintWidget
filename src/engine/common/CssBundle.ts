/**
 * Represents all CSS resources required
 * to recreate the page inside the print frame.
 */
export interface CssBundle {

    /**
     * External CSS files.
     */
    links: HTMLLinkElement[];

    /**
     * Inline style tags.
     */
    styles: HTMLStyleElement[];

    /**
     * Extracted @font-face rules.
     */
    fontFaces: string[];

    /**
     * CSS variables.
     */
    variables: string[];

}