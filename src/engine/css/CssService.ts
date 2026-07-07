import { StyleCollector } from "./collectors/StyleCollector";
import { LinkCollector } from "./collectors/LinkCollector";
import { VariableCollector } from "./collectors/VariableCollector";
import { FontCollector } from "./collectors/FontCollector";
import { MediaCollector } from "./collectors/MediaCollector";

import { CssBundle } from "./models/CssBundle";
import { Logger } from "../../utils/Logger";

export class CssService {

    private readonly styleCollector = new StyleCollector();
    private readonly linkCollector = new LinkCollector();
    private readonly variableCollector = new VariableCollector();
    private readonly fontCollector = new FontCollector();
    private readonly mediaCollector = new MediaCollector();

    /**
     * Collect all CSS resources required for printing.
     */
    public collect(
        documentRef: Document = document
    ): CssBundle {

        Logger.group("CssService");

        const bundle: CssBundle = {

            styles: this.styleCollector.collect(documentRef),

            links: this.linkCollector.collect(documentRef),

            variables: this.variableCollector.collect(documentRef),

            fonts: this.fontCollector.collect(documentRef),

            media: this.mediaCollector.collect(documentRef)

        };

        Logger.group("CSS Summary");

        Logger.info(`Styles     : ${bundle.styles.length}`);
        Logger.info(`Links      : ${bundle.links.length}`);
        Logger.info(`Variables  : ${bundle.variables.size}`);
        Logger.info(`Fonts      : ${bundle.fonts.length}`);
        Logger.info(`Media      : ${bundle.media.length}`);

        Logger.groupEnd();

        Logger.groupEnd();

        return bundle;

    }

}