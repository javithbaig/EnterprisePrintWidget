import {
    OrientationEnum,
    PaperSizeEnum
} from "../../typings/EnterprisePrintWidgetProps";

import { PrintOptions } from "../models/PrintOptions";

export const DEFAULT_PRINT_OPTIONS: PrintOptions = {

    selector: ".print-container",

    paperSize: "A4" as PaperSizeEnum,

    orientation: "portrait" as OrientationEnum,

    scale: 100,

    marginTop: 10,

    marginRight: 10,

    marginBottom: 10,

    marginLeft: 10,

    printBackground: true,

    waitImages: true,

    waitFonts: true,

    debug: false

};