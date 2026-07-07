import { PrintFrame } from "../common/PrintFrame";

export class FrameBuilder {

    public create(): PrintFrame {

        const iframe = document.createElement("iframe");

        iframe.style.position = "fixed";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = "0";
        iframe.style.visibility = "hidden";
        iframe.setAttribute("aria-hidden", "true");

        document.body.appendChild(iframe);

        const windowRef = iframe.contentWindow;
        const documentRef = iframe.contentDocument;

        if (!windowRef || !documentRef) {
            throw new Error("Unable to create print frame.");
        }

        // Clear existing document
        documentRef.documentElement.innerHTML = "";

        // Create DOM
        const html = documentRef.createElement("html");
        html.lang = document.documentElement.lang || "en";

        const head = documentRef.createElement("head");
        const body = documentRef.createElement("body");

        // Charset
        const charset = documentRef.createElement("meta");
        charset.setAttribute("charset", "utf-8");

        // Viewport
        const viewport = documentRef.createElement("meta");
        viewport.name = "viewport";
        viewport.content = "width=device-width, initial-scale=1";

        // Base
        const base = documentRef.createElement("base");
        base.href = document.baseURI;

        // Title
        const title = documentRef.createElement("title");
        title.textContent = document.title;

        head.appendChild(charset);
        head.appendChild(viewport);
        head.appendChild(base);
        head.appendChild(title);

        html.appendChild(head);
        html.appendChild(body);

        documentRef.replaceChild(
            html,
            documentRef.documentElement
        );

        return {
            iframe,
            window: windowRef,
            document: documentRef
        };

    }

}