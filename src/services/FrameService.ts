import { Logger } from "../utils/Logger";
import { PrintFrame } from "../models/PrintFrame";

export class FrameService {

    /**
     * Creates a hidden iframe for printing.
     */
    public create(): PrintFrame {

        Logger.group("Frame Service");

        const iframe = document.createElement("iframe");

        iframe.style.position = "fixed";
        iframe.style.right = "0";
        iframe.style.bottom = "0";
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = "0";
        iframe.style.visibility = "hidden";


        document.body.appendChild(iframe);

        const frameWindow = iframe.contentWindow;

        if (!frameWindow) {
            throw new Error("Unable to access iframe window.");
        }

        const frameDocument = frameWindow.document;

        Logger.info("Print iframe created");

        Logger.groupEnd();

        return {
            iframe,
            window: frameWindow,
            document: frameDocument
        };
    }

    /**
     * Remove iframe from DOM.
     */
    public destroy(frame: PrintFrame): void {

        frame.iframe.remove();

        Logger.info("Print iframe removed");
    }

    public write(
        frame: PrintFrame,
        html: string
    ): void {

        frame.document.open();

        frame.document.write(html);

        frame.document.close();

    }

    public async ready(
    frame: PrintFrame
    ): Promise<void> {

        await new Promise<void>(resolve => {

            if (
                frame.document.readyState === "complete"
            ) {

                resolve();

                return;

            }

            frame.window.addEventListener(
                "load",
                () => resolve(),
                {
                    once: true
                }
            );

        });

    }

    public focus(
    frame: PrintFrame
    ): void {

        frame.window.focus();

    }

}