import {
    PaperSizeEnum,
    OrientationEnum
} from "../../typings/EnterprisePrintWidgetProps";

export const PAPER_SIZES: Record<
    PaperSizeEnum,
    Record<
        OrientationEnum,
        {
            width: number;
            height: number;
        }
    >
> = {

    A4: {
        portrait: {
            width: 210,
            height: 297
        },
        landscape: {
            width: 297,
            height: 210
        }
    },

    Letter: {
        portrait: {
            width: 216,
            height: 279
        },
        landscape: {
            width: 279,
            height: 216
        }
    }

};