import { Logger } from "../../utils/Logger";

export class ResponsiveLayout {

    public process(
        root: HTMLElement
    ): void {

        Logger.group("ResponsiveLayout");

        const elements = root.querySelectorAll<HTMLElement>("*");

        Logger.info(
            `Processing ${elements.length} element(s).`
        );

        elements.forEach(element => {

            const computed = getComputedStyle(element);

            this.copyDimensions(element, computed);

            this.copyFlex(element, computed);

            this.copyGrid(element, computed);

            this.copySpacing(element, computed);

            this.copyAlignment(element, computed);

        });

        Logger.groupEnd();

    }

    private copyDimensions(
        element: HTMLElement,
        computed: CSSStyleDeclaration
    ): void {

        element.style.width = computed.width;
        element.style.height = computed.height;

        element.style.minWidth = computed.minWidth;
        element.style.maxWidth = computed.maxWidth;

        element.style.minHeight = computed.minHeight;
        element.style.maxHeight = computed.maxHeight;

        element.style.boxSizing = computed.boxSizing;

    }

    private copyFlex(
        element: HTMLElement,
        computed: CSSStyleDeclaration
    ): void {

        if (!computed.display.includes("flex")) {
            return;
        }

        element.style.display = computed.display;

        element.style.flex = computed.flex;
        element.style.flexGrow = computed.flexGrow;
        element.style.flexShrink = computed.flexShrink;
        element.style.flexBasis = computed.flexBasis;

        element.style.flexDirection = computed.flexDirection;
        element.style.flexWrap = computed.flexWrap;

        element.style.justifyContent = computed.justifyContent;
        element.style.alignItems = computed.alignItems;
        element.style.alignContent = computed.alignContent;

        element.style.gap = computed.gap;

    }

    private copyGrid(
        element: HTMLElement,
        computed: CSSStyleDeclaration
    ): void {

        if (!computed.display.includes("grid")) {
            return;
        }

        element.style.display = computed.display;

        element.style.gridTemplateColumns =
            computed.gridTemplateColumns;

        element.style.gridTemplateRows =
            computed.gridTemplateRows;

        element.style.gridAutoColumns =
            computed.gridAutoColumns;

        element.style.gridAutoRows =
            computed.gridAutoRows;

        element.style.gridGap = computed.gap;

    }

    private copySpacing(
        element: HTMLElement,
        computed: CSSStyleDeclaration
    ): void {

        element.style.margin = computed.margin;

        element.style.padding = computed.padding;

    }

    private copyAlignment(
        element: HTMLElement,
        computed: CSSStyleDeclaration
    ): void {

        element.style.verticalAlign =
            computed.verticalAlign;

        element.style.textAlign =
            computed.textAlign;

    }

}