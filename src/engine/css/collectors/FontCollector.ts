import { Logger } from "../../../utils/Logger";

export class FontCollector {

    public collect(
        documentRef: Document = document
    ): CSSFontFaceRule[] {

        Logger.group("FontCollector");

        const fonts: CSSFontFaceRule[] = [];
        const unique = new Set<string>();

        Array.from(documentRef.styleSheets).forEach(sheet => {

            try {

                Array.from(sheet.cssRules).forEach(rule => {

                    if (!(rule instanceof CSSFontFaceRule)) {
                        return;
                    }

                    if (unique.has(rule.cssText)) {
                        return;
                    }

                    unique.add(rule.cssText);
                    fonts.push(rule);

                });

            } catch (error) {

                Logger.warn(
                    `Unable to read stylesheet: ${sheet.href ?? "inline"}`
                );

            }

        });

        Logger.info(
            `Collected ${fonts.length} unique font-face rule(s)`
        );

        Logger.groupEnd();

        return fonts;

    }

}