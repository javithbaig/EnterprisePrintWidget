import { useMemo } from "react";
import { PrintService } from "../services/PrintService";
import { ServiceContainer } from "../services/ServiceContainer";

export function usePrint() {

    const services = useMemo(
        () => new ServiceContainer(),
        []
    );

    const printService = useMemo(
        () => new PrintService(services),
        [services]
    );

    return {

        print: printService.print.bind(printService)

    };

}
