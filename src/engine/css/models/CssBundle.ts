export interface CssBundle {

    links: HTMLLinkElement[];

    styles: HTMLStyleElement[];

    variables: Map<string, string>;

    fonts: CSSFontFaceRule[];

    media: CSSMediaRule[];

}