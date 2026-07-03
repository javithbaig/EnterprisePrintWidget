export class DomUtils {

    public static find(selector: string): HTMLElement | null {
        return document.querySelector(selector);
    }

    public static create<K extends keyof HTMLElementTagNameMap>(
        tag: K
    ): HTMLElementTagNameMap[K] {

        return document.createElement(tag);
    }

    public static remove(element?: HTMLElement | null): void {

        if (!element) {
            return;
        }

        element.remove();
    }

    public static clone(
        element: HTMLElement
    ): HTMLElement {

        return element.cloneNode(true) as HTMLElement;
    }

    public static isVisible(
        element: HTMLElement
    ): boolean {

        return !!(
            element.offsetWidth ||
            element.offsetHeight ||
            element.getClientRects().length
        );
    }

    public static getScrollSize(
        element: HTMLElement
    ): {
        width: number;
        height: number;
    } {

        return {
            width: element.scrollWidth,
            height: element.scrollHeight
        };
    }

    public static wait(milliseconds: number): Promise<void> {

        return new Promise(resolve => {

            setTimeout(resolve, milliseconds);

        });

    }
}