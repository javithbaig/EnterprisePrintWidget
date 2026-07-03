export class UnitConverter {

    /**
     * 96 DPI browser conversion
     */
    private static readonly DPI = 96;

    private static readonly MM_PER_INCH = 25.4;

    public static mmToPx(mm: number): number {
        return (mm * this.DPI) / this.MM_PER_INCH;
    }

    public static pxToMm(px: number): number {
        return (px * this.MM_PER_INCH) / this.DPI;
    }

    public static cmToPx(cm: number): number {
        return this.mmToPx(cm * 10);
    }

    public static inchToPx(inch: number): number {
        return inch * this.DPI;
    }
}