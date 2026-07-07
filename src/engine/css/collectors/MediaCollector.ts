import { Logger } from "../../../utils/Logger";

export class MediaCollector {

    public collect(
        documentRef: Document = document
    ): CSSMediaRule[] {

        Logger.group("MediaCollector");

        console.log("===== MediaCollector Started =====");

        const media: CSSMediaRule[] = [];

        Array.from(documentRef.styleSheets).forEach(sheet => {

            console.log("Reading:", sheet.href);

            try {

                Array.from(sheet.cssRules).forEach(rule => {

                    if (rule instanceof CSSMediaRule) {

                        console.log(rule.media.mediaText);

                        media.push(rule);

                    }

                });

            } catch (e) {

                console.warn(
                    "Cannot access:",
                    sheet.href
                );

            }

        });

        console.log(
            "Media Rules:",
            media.length
        );

        Logger.groupEnd();

        return media;

    }

}