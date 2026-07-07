import { Logger } from "../../utils/Logger";

export class ImageLoader {

    private readonly timeout = 10000; // 10 seconds

    public async wait(
        root: HTMLElement
    ): Promise<void> {

        Logger.group("ImageLoader");

        const images = Array.from(
            root.querySelectorAll<HTMLImageElement>("img")
        );

        Logger.info(
            `Found ${images.length} image(s).`
        );

        await Promise.all(
            images.map(image => this.waitForImage(image))
        );

        Logger.info("All images processed.");

        Logger.groupEnd();

    }

    private async waitForImage(
        image: HTMLImageElement
    ): Promise<void> {

        // Already loaded successfully
        if (image.complete && image.naturalWidth > 0) {
            return;
        }

        // Broken image
        if (image.complete && image.naturalWidth === 0) {
            Logger.warn(
                `Broken image: ${image.src}`
            );
            return;
        }

        await Promise.race([

            new Promise<void>(resolve => {

                image.onload = () => resolve();

                image.onerror = () => {

                    Logger.warn(
                        `Failed image: ${image.src}`
                    );

                    resolve();

                };

            }),

            new Promise<void>(resolve =>
                setTimeout(resolve, this.timeout)
            )

        ]);

    }

}