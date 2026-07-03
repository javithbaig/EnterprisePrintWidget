import { CssBundle } from "../common/CssBundle";
import { Paper } from "../common/Paper";
import { PrintOptions } from "../../models/PrintOptions";

export class FrameService {

    private iframe: HTMLIFrameElement | null = null;

    /**
     * Creates the print iframe and injects the cloned document.
     */
    public async build(
        root: HTMLElement,
        css: CssBundle,
        paper: Paper,
        options: PrintOptions
    ): Promise<void> {

        // Remove previous iframe
        this.destroy();

        this.iframe = document.createElement("iframe");

        this.iframe.style.position = "fixed";
        this.iframe.style.right = "0";
        this.iframe.style.bottom = "0";
        this.iframe.style.width = "0";
        this.iframe.style.height = "0";
        this.iframe.style.border = "0";
        this.iframe.style.visibility = "hidden";

        document.body.appendChild(this.iframe);

        const frameDocument =
            this.iframe.contentDocument;

        if (!frameDocument) {
            throw new Error("Unable to access print iframe.");
        }

        frameDocument.open();

        frameDocument.write(`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Enterprise Document Engine</title>
</head>
<body></body>
</html>
        `);

        frameDocument.close();

        this.injectCss(frameDocument, css);

        this.applyPaper(frameDocument, paper, options);

        frameDocument.body.appendChild(
            root.cloneNode(true)
        );

    }

    /**
     * Opens browser print dialog.
     */
    public async print(): Promise<void> {

        if (!this.iframe) {
            return;
        }

        const win = this.iframe.contentWindow;

        if (!win) {
            return;
        }

        await new Promise(resolve => setTimeout(resolve, 300));

        win.focus();

        win.print();

    }

    /**
     * Removes previous iframe.
     */
    public destroy(): void {

        if (!this.iframe) {
            return;
        }

        this.iframe.remove();

        this.iframe = null;

    }

    /**
     * Inject collected CSS.
     */
    private injectCss(
        documentRef: Document,
        css: CssBundle
    ): void {

        css.links.forEach(link => {

            documentRef.head.appendChild(
                link.cloneNode(true)
            );

        });

        css.styles.forEach(style => {

            documentRef.head.appendChild(
                style.cloneNode(true)
            );

        });

    }

    /**
     * Applies paper size and margins.
     */
    private applyPaper(
        documentRef: Document,
        paper: Paper,
        options: PrintOptions
    ): void {

        const style = documentRef.createElement("style");

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
body{

    margin:0;

    padding:0;

    width:100%;

    overflow:visible;

    print-color-adjust:exact;

    -webkit-print-color-adjust:exact;

}
`;

        documentRef.head.appendChild(style);

    }

}