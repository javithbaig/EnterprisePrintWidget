import { PrintOptions } from "../models/PrintOptions";
import { ServiceContainer } from "./ServiceContainer";
import { Logger } from "../utils/Logger";

export class PrintService {

    constructor(
        private readonly services: ServiceContainer
    ) {}

    public async print(
        target: HTMLElement,
        options: PrintOptions
    ): Promise<void> {

        Logger.group("Print Service");

        const clone =
            this.services.cloneService.clone(target);

        console.log(clone);
        console.log(options);

        Logger.groupEnd();
    }
}