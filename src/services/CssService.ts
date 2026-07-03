import { CssBundle } from "../models/CssBundle";
import { Logger } from "../utils/Logger";

export class CssService {

    /**
     * Collect all styles required for printing.
     */
    public collect(): CssBundle {

        Logger.group("CSS Service");

        const bundle: CssBundle = {

            links: this.getStyleSheets(),

            styles: this.getStyleTags(),

            cssVariables: this.getRootVariables()

        };

        Logger.info(
            "Stylesheets",
            bundle.links.length
        );

        Logger.info(
            "Style Tags",
            bundle.styles.length
        );

        Logger.groupEnd();

        return bundle;

    }

    /**
     * Collect external stylesheets.
     */
    private getStyleSheets(): HTMLLinkElement[] {

        return Array.from(
            document.querySelectorAll<HTMLLinkElement>(
                'link[rel="stylesheet"]'
            )
        );

    }

    /**
     * Collect inline style tags.
     */
    private getStyleTags(): HTMLStyleElement[] {

        return Array.from(
            document.querySelectorAll<HTMLStyleElement>(
                "style"
            )
        );

    }

    /**
     * Collect CSS variables from :root.
     */
    private getRootVariables(): string {

        const computed =
            getComputedStyle(
                document.documentElement
            );

        let css = ":root{\n";

        for (let i = 0; i < computed.length; i++) {

            const property =
                computed.item(i);

            if (
                !property.startsWith("--")
            ) {

                continue;

            }

            css += `${property}:${computed.getPropertyValue(property)};\n`;

        }

        css += "}";

        return css;

    }

    public inject(
    document: Document,
    bundle: CssBundle
    ): void {

        const head =
            document.head;

        bundle.links.forEach(link => {

            head.appendChild(
                link.cloneNode(true)
            );

        });

        bundle.styles.forEach(style => {

            head.appendChild(
                style.cloneNode(true)
            );

        });

        const variables =
            document.createElement("style");

        variables.textContent =
            bundle.cssVariables;

        head.appendChild(
            variables
        );

    }

}