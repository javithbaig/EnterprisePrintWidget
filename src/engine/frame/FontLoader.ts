import { Logger } from "../../utils/Logger";

export class FontLoader {

    private readonly timeout = 10000;

    public async wait(
        documentRef: Document
    ): Promise<void> {

        Logger.group("FontLoader");

        if (!("fonts" in documentRef)) {

            Logger.warn(
                "Font Loading API not supported."
            );

            Logger.groupEnd();
            return;
        }

        try {

            await Promise.race([

                documentRef.fonts.ready,

                new Promise<void>(resolve =>
                    setTimeout(resolve, this.timeout)
                )

            ]);

            Logger.info("Fonts ready.");

        }
        catch (error) {

            Logger.warn(
                "Font loading timed out or failed.",
                error
            );

        }

        Logger.groupEnd();

    }

}