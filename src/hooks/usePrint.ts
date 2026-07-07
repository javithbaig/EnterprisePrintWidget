import { useMemo } from "react";

import { EnterpriseDocumentEngine } from "../engine/EnterpriseDocumentEngine";

export function usePrint() {

    const engine = useMemo(
        () => new EnterpriseDocumentEngine(),
        []
    );

    return {

        print: engine.print.bind(engine)

    };

}