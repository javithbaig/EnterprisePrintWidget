import { Logger } from "../../utils/Logger";

export class ImageLayout {

    public process(
        root: HTMLElement
    ): void {

        Logger.group("ImageLayout");

        const images = root.querySelectorAll<HTMLImageElement>("img");

        Logger.info(
            `Processing ${images.length} image(s).`
        );

        images.forEach(image => {

            const computed = getComputedStyle(image);

            this.copyDimensions(image, computed);

            this.copyObjectFit(image, computed);

            this.preventPageBreak(image);

        });

        Logger.groupEnd();

    }

    private copyDimensions(
        image: HTMLImageElement,
        computed: CSSStyleDeclaration
    ): void {

        image.style.width = computed.width;
        image.style.height = computed.height;

        image.style.minWidth = computed.minWidth;
        image.style.maxWidth = computed.maxWidth;

        image.style.minHeight = computed.minHeight;
        image.style.maxHeight = computed.maxHeight;

    }

    private copyObjectFit(
        image: HTMLImageElement,
        computed: CSSStyleDeclaration
    ): void {

        image.style.objectFit = computed.objectFit;
        image.style.objectPosition = computed.objectPosition;

    }

    private preventPageBreak(
        image: HTMLImageElement
    ): void {

        image.style.breakInside = "avoid";
        image.style.pageBreakInside = "avoid";

        image.style.display = "block";

    }

}