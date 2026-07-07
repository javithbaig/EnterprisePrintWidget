import { Logger } from "../../../utils/Logger";

export class FontInjector {

    public inject(
        documentRef: Document,
        fonts: CSSFontFaceRule[]
    ): void {

        Logger.group("FontInjector");

        if (fonts.length === 0) {

            Logger.info("No font-face rules to inject.");

            Logger.groupEnd();

            return;

        }

        const style = documentRef.createElement("style");

        style.textContent = fonts
            .map(font => font.cssText)
            .join("\n\n");

        documentRef.head.appendChild(style);

        Logger.info(
            `Injected ${fonts.length} font-face rule(s)`
        );

        Logger.groupEnd();

    }

}