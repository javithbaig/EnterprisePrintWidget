import { LinkInjector } from "./LinkInjector";
import { StyleInjector } from "./StyleInjector";
import { CssBundle } from "../models/CssBundle";
import { VariableInjector } from "./VariableInjector";
import { FontInjector } from "./FontInjector";
import { MediaInjector } from "./MediaInjector";

export class CssInjector {

    constructor(

        private readonly linkInjector = new LinkInjector(),

        private readonly styleInjector = new StyleInjector(),

        private readonly variableInjector = new VariableInjector(),

        private readonly fontInjector = new FontInjector(),

        private readonly mediaInjector = new MediaInjector()

    ) {}

    public inject(
        documentRef: Document,
        bundle: CssBundle
    ): void {

        this.linkInjector.inject(
            documentRef,
            bundle.links
        );

        this.styleInjector.inject(
            documentRef,
            bundle.styles
        );

        this.variableInjector.inject(
            documentRef,
            bundle.variables
        );

         this.mediaInjector.inject(
            bundle,
            documentRef
        );

        this.fontInjector.inject(
            documentRef,
            bundle.fonts
        );

    }

}