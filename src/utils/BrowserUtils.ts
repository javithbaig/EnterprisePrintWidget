export class BrowserUtils {

    public static isChrome(): boolean {
        return /Chrome/.test(navigator.userAgent)
            && !/Edg/.test(navigator.userAgent);
    }

    public static isEdge(): boolean {
        return /Edg/.test(navigator.userAgent);
    }

    public static isFirefox(): boolean {
        return /Firefox/.test(navigator.userAgent);
    }

    public static isSafari(): boolean {
        return /^((?!chrome|android).)*safari/i.test(
            navigator.userAgent
        );
    }

    public static supportsFonts(): boolean {
        return "fonts" in document;
    }

    public static supportsPrint(): boolean {
        return typeof window.print === "function";
    }

    public static supportsCanvas(): boolean {
        return !!document.createElement("canvas").getContext("2d");
    }

    public static supportsSvg(): boolean {
        return !!document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        ).createSVGRect;
    }
}
