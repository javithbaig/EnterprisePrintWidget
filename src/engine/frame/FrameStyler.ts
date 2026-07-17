import { CssBundle } from "../css/models/CssBundle";
import { Paper } from "../common/Paper";
import { PrintOptions } from "../../models/PrintOptions";

export class FrameStyler {

    public apply(
        documentRef: Document,
        css: CssBundle,
        paper: Paper,
        options: PrintOptions
    ): void {

        this.injectLinks(
            documentRef,
            css
        );

        this.injectStyles(
            documentRef,
            css
        );

        this.injectPageStyle(
            documentRef,
            paper,
            options
        );

    }

    private injectLinks(
        documentRef: Document,
        css: CssBundle
    ): void {

        css.links.forEach(source => {

            const link =
                source.cloneNode(
                    true
                ) as HTMLLinkElement;

            /*
             * Preserve the absolute URL from
             * the original application document.
             */
            link.href =
                source.href;

            documentRef.head.appendChild(
                link
            );

        });

    }

    private injectStyles(
        documentRef: Document,
        css: CssBundle
    ): void {

        css.styles.forEach(style => {

            documentRef.head.appendChild(
                style.cloneNode(true)
            );

        });

    }

    private injectPageStyle(
        documentRef: Document,
        paper: Paper,
        options: PrintOptions
    ): void {

        const style =
            documentRef.createElement(
                "style"
            );

        style.textContent = `
@page {
    size: ${paper.size} ${paper.orientation};

    margin:
        ${options.marginTop}mm
        ${options.marginRight}mm
        ${options.marginBottom}mm
        ${options.marginLeft}mm;
}

html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow: visible;
}

html,
body,
body * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}
`;

        documentRef.head.appendChild(
            style
        );

    }

}