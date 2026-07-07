import { Logger } from "../../utils/Logger";
import { Paper } from "../common/Paper";

export class PageBreakManager {

    public process(
        root: HTMLElement,
        _paper: Paper
    ): void {

        Logger.group("PageBreakManager");

        const selectors = [
            "table",
            "tr",
            "img",
            ".card",
            ".mx-groupbox"
        ];

        selectors.forEach(selector => {

            root.querySelectorAll<HTMLElement>(selector)
                .forEach(element => {

                    element.style.breakInside = "avoid";
                    element.style.pageBreakInside = "avoid";

                });

        });

        Logger.info("Applied page-break rules.");

        Logger.groupEnd();

    }

}