import { Logger } from "../../utils/Logger";

export class OverflowHandler {

    public process(
        root: HTMLElement
    ): void {

        Logger.group("OverflowHandler");

        const elements = root.querySelectorAll<HTMLElement>("*");

        let modified = 0;

        elements.forEach(element => {

            const computed = getComputedStyle(element);

            if (this.shouldAdjust(computed)) {

                this.apply(element);

                modified++;

            }

        });

        Logger.info(
            `Modified ${modified} element(s).`
        );

        Logger.groupEnd();

    }

    private shouldAdjust(
        computed: CSSStyleDeclaration
    ): boolean {

        return (
            computed.overflow === "auto" ||
            computed.overflow === "scroll" ||
            computed.overflowX === "auto" ||
            computed.overflowX === "scroll" ||
            computed.overflowY === "auto" ||
            computed.overflowY === "scroll"
        );

    }

    private apply(
        element: HTMLElement
    ): void {

        element.style.overflow = "visible";
        element.style.overflowX = "visible";
        element.style.overflowY = "visible";

    }

}