import {
    OrientationEnum,
    PaperSizeEnum
} from "../../typings/EnterprisePrintWidgetProps";

export interface Paper {

    size: PaperSizeEnum;

    orientation: OrientationEnum;

    width: number;

    height: number;

    printableWidth: number;

    printableHeight: number;

    marginTop: number;

    marginRight: number;

    marginBottom: number;

    marginLeft: number;

}