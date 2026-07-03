import { ReactElement } from "react";
import { EnterprisePrintWidgetContainerProps } from "../typings/EnterprisePrintWidgetProps";
import { PrintButton } from "./components/PrintButton";
import { usePrint } from "./hooks/usePrint";
import { PrintOptions } from "./models/PrintOptions";
import { CssService } from "./engine/css/CssService";

export function EnterprisePrintWidget(
    props: EnterprisePrintWidgetContainerProps
): ReactElement {

    const { print } = usePrint();
    const css = new CssService().collect();
    console.log(css.links);
    console.log(css.styles);
    const handleClick = async (): Promise<void> => {

        const selector = props.selector?.trim() || ".print-container";

        const element = document.querySelector(selector);

        if (!(element instanceof HTMLElement)) {
            console.error(`Enterprise Print: Element not found for selector '${selector}'.`);
            return;
        }

        const options: PrintOptions = {
            selector,
            paperSize: props.paperSize,
            orientation: props.orientation,
            scale: Number(props.scale),
            marginTop: props.marginTop,
            marginRight: props.marginRight,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            printBackground: props.printBackground,
            waitImages: props.waitImages,
            waitFonts: props.waitFonts,
            debug: props.debugMode
        };

        await print(element, options);
    };

    return (
        <PrintButton
            label={props.printButtonCaption || "Print"}
            onClick={handleClick}
        />
    );
}