import { Logger } from "../../../utils/Logger";

export class VariableInjector {

    public inject(
        documentRef: Document,
        variables: Map<string, string>
    ): void {

        Logger.group("VariableInjector");

        if (variables.size === 0) {

            Logger.info("No CSS variables found.");

            Logger.groupEnd();

            return;

        }

        const style =
            documentRef.createElement("style");

        const css: string[] = [];

        css.push(":root{");

        variables.forEach((value, key) => {

            css.push(`${key}:${value};`);

        });

        css.push("}");

        style.textContent = css.join("\n");

        documentRef.head.appendChild(style);

        Logger.info(
            `Injected ${variables.size} CSS variable(s)`
        );

        Logger.groupEnd();

    }

}