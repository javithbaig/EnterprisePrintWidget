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

        this.injectLinks(documentRef, css);

        this.injectStyles(documentRef, css);

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

        css.links.forEach(link => {

            documentRef.head.appendChild(
                link.cloneNode(true)
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

        const style = documentRef.createElement("style");

        style.textContent = `
@page{
size:${paper.size} ${paper.orientation};
margin:${options.marginTop}mm ${options.marginRight}mm ${options.marginBottom}mm ${options.marginLeft}mm;
}

html,body{
margin:0;
padding:0;
width:100%;
overflow:visible;
-webkit-print-color-adjust:exact;
print-color-adjust:exact;
}
`;

        documentRef.head.appendChild(style);

    }

}