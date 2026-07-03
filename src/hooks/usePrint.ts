import { useMemo } from "react";

import { BrowserPrint } from "../engine/outputs/BrowserPrint";

export function usePrint() {

    const printService = useMemo(
        () => new BrowserPrint(),
        []
    );

    return {
        print: printService.print.bind(printService)
    };

}
