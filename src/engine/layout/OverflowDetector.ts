export class OverflowDetector {

    public detect(
        root: HTMLElement,
        printableWidth: number
    ): boolean {

        return root.scrollWidth > printableWidth;

    }

}