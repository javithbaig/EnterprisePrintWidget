import { CssBundle } from "../common/CssBundle";
import { LinkCollector } from "./LinkCollector";
import { StyleCollector } from "./StyleCollector";

/**
 * Collects every CSS resource required
 * to reproduce the current page.
 */
export class CssService {

    constructor(
        private readonly styleCollector = new StyleCollector(),
        private readonly linkCollector = new LinkCollector()
    ) {}

    /**
     * Collect all CSS resources.
     */
    public collect(): CssBundle {

        return {

            links: this.linkCollector.collect(),

            styles: this.styleCollector.collect(),

            fontFaces: [],

            variables: []

        };

    }

}