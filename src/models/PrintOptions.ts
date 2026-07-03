import {
    OrientationEnum,
    PaperSizeEnum
} from "../../typings/EnterprisePrintWidgetProps";

export interface PrintOptions {
    selector: string;

    paperSize: PaperSizeEnum;
    orientation: OrientationEnum;

    scale: number;

    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;

    printBackground: boolean;
    waitImages: boolean;
    waitFonts: boolean;

    debug: boolean;
}