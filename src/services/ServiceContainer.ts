import { CloneService } from "./CloneService";
import { CssService } from "./CssService";
import { FrameService } from "./FrameService";
import { LayoutService } from "./LayoutService";

export class ServiceContainer {

    public readonly cloneService: CloneService;

    public readonly cssService: CssService;

    public readonly layoutService: LayoutService;

    public readonly frameService: FrameService;

    constructor() {

        this.cloneService = new CloneService();
        this.cssService = new CssService();
        this.layoutService = new LayoutService();
        this.frameService = new FrameService();

    }

}