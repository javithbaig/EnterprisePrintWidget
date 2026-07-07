import { CssBundle } from "../css/models/CssBundle";
import { Paper } from "../common/Paper";
import { PrintOptions } from "../../models/PrintOptions";
import { PrintFrame } from "../common/PrintFrame";

export interface RenderContext {

    source: HTMLElement;

    clone?: HTMLElement;

    css?: CssBundle;

    paper?: Paper;

    scale?: number;

    overflow?: boolean;

    pageCount?: number;

    options: PrintOptions;

    frame?: PrintFrame;

}