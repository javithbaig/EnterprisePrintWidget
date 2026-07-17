import { AssetLoader } from "../../frame/AssetLoader";
import { IPipelineStage } from "../IPipelineStage";
import { RenderContext } from "../RenderContext";

export class AssetStage implements IPipelineStage {

    private readonly loader =
        new AssetLoader();

    public async execute(
        context: RenderContext
    ): Promise<void> {

        if (!context.clone) {
            throw new Error(
                "AssetStage requires a cloned element."
            );
        }

        const documentRef =
            context.clone.ownerDocument;

        await this.loader.wait(
            context.clone,
            documentRef
        );

    }

}