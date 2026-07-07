import { BrowserPrint } from "./outputs/BrowserPrint";
import { PrintOptions } from "../models/PrintOptions";

export class EnterpriseDocumentEngine {

    private readonly browserPrint = new BrowserPrint();

    /**
     * Prints an HTML element.
     */
    public async print(
        element: HTMLElement,
        options: PrintOptions
    ): Promise<void> {

        await this.browserPrint.print(
            element,
            options
        );

    }

}