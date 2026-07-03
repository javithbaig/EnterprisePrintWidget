/**
 * This file was generated from EnterprisePrintWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { DynamicValue, WebIcon } from "mendix";
import { CSSProperties } from "react";

export type PaperSizeEnum = "A4" | "Letter";

export type OrientationEnum = "portrait" | "landscape";

export interface EnterprisePrintWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
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
    printButtonCaption: string;
    printButtonIcon: DynamicValue<WebIcon>;
    debugMode: boolean;
    printDelay: number;
}

export interface EnterprisePrintWidgetPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    selector: string;
    paperSize: PaperSizeEnum;
    orientation: OrientationEnum;
    scale: number | null;
    marginTop: number | null;
    marginRight: number | null;
    marginBottom: number | null;
    marginLeft: number | null;
    printBackground: boolean;
    waitImages: boolean;
    waitFonts: boolean;
    printButtonCaption: string;
    printButtonIcon:
        | { type: "glyph"; iconClass: string }
        | { type: "image"; imageUrl: string; iconUrl: string }
        | { type: "icon"; iconClass: string }
        | undefined;
    debugMode: boolean;
    printDelay: number | null;
}
