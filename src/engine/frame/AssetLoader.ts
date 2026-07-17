import { ImageLoader } from "./ImageLoader";
import { FontLoader } from "./FontLoader";
import { StylesheetLoader } from "./StylesheetLoader";

export class AssetLoader {

    private readonly stylesheetLoader =
        new StylesheetLoader();

    private readonly imageLoader =
        new ImageLoader();

    private readonly fontLoader =
        new FontLoader();

    public async wait(
        root: HTMLElement,
        document: Document
    ): Promise<void> {

        console.log(
            "===== AssetLoader.wait START ====="
        );

        console.log(
            "Starting StylesheetLoader"
        );

        await this.stylesheetLoader.wait(
            document
        );

        console.log(
            "Stylesheets loaded"
        );

        console.log(
            "Starting ImageLoader"
        );

        await this.imageLoader.wait(
            root
        );

        console.log(
            "Images loaded"
        );

        console.log(
            "Starting FontLoader"
        );

        await this.fontLoader.wait(
            document
        );

        console.log(
            "Fonts loaded"
        );

        console.log(
            "===== All assets loaded ====="
        );

    }

}