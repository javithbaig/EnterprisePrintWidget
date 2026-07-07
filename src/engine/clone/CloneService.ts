import { Logger } from "../../utils/Logger";
import { ICloneProcessor } from "./processors/ICloneProcessor";
import { FormClone } from "./FormClone";
import { CanvasClone } from "./CanvasClone";    
import { SvgClone } from "./SvgClone";
import { VideoClone } from "./VideoClone";
import { ScrollClone } from "./ScrollClone";
import { DetailsClone } from "./DetailsClone";
import { EditableClone } from "./EditableClone";

export class CloneService {

    private readonly processors: ICloneProcessor[] = [

        new FormClone(),

        new CanvasClone(),

        new SvgClone(),

        new VideoClone(),

        new ScrollClone(),

        new DetailsClone(),

        new EditableClone()

    ];

    public clone(
        source: HTMLElement
    ): HTMLElement {

        Logger.group("Clone Service");

        const clone =
            source.cloneNode(true) as HTMLElement;

        for (const processor of this.processors) {

            processor.process(
                source,
                clone
            );

        }

        Logger.groupEnd();

        return clone;

    }

}