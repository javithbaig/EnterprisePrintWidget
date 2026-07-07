import { Logger } from "../../../utils/Logger";

export class VariableCollector {

    public collect(
        documentRef: Document = document
    ): Map<string, string> {

        Logger.group("VariableCollector");

        const variables = new Map<string, string>();

        const computed =
            getComputedStyle(documentRef.documentElement);

        for (let i = 0; i < computed.length; i++) {

            const property = computed.item(i);

            if (!property.startsWith("--")) {
                continue;
            }

            variables.set(
                property,
                computed.getPropertyValue(property).trim()
            );

        }

        Logger.info(
            `Collected ${variables.size} CSS variable(s)`
        );

        Logger.groupEnd();

        return variables;

    }

}